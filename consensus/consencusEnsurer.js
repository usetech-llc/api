
const { ApiPromise, WsProvider } = require('@polkadot/api');
const fs = require('fs');
const net = require('net');
const isPortReachable = require('is-port-reachable');

const parse_multiaddr = (addr) => {
	let parsed = addr.match(/^\/(ip4|ip6|dns4|dns6)\/(.*?)\/tcp\/(.*?)$/);
	let proto = 'wss';
	if (parsed[4] == 'ws' || parsed[4] == 'x-parity-ws') {
		proto = 'ws';
	}
	let url = decodeURIComponent(parsed[5] || parsed[6] || '');
	if (parsed != null) {     
      return {ip : parsed[2], port : parsed[3]}
	}
  return undefined
}

const test_ip = (ip) => {
  let test1 = ip.match(/10\..*$/) == null
  let test2 = ip.match(/127\..*$/) == null
  let test3 = ip.match(/172\..*$/) == null

  return test1 & test2 & test3
}

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
       const key = keyGetter(item);
       const collection = map.get(key);
       if (!collection) {
           map.set(key, [item]);
       } else {
           collection.push(item);
       }
  });
  return map;
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function asyncForEachMap(array, callback) {
  var arr = Array.from(array)
  for (let index = 0; index < arr.length; index++) {
    await callback(arr[index], index, arr);
  }
}

function default_nodes()
{
  return [
    {"url":"wss://kusama-rpc.polkadot.io/","ping_time":0},
    {"url":"wss://cc3-3.kusama.network/","ping_time":0},
    {"url":"wss://cc3-4.kusama.network/","ping_time":0},
    {"url":"wss://cc3-5.kusama.network/","ping_time":0},
    {"url":"wss://cc3-1.kusama.network/","ping_time":0},
    {"url":"wss://cc3-2.kusama.network/","ping_time":0}
  ];
}

function read_nodes() {
  try{
    let data = fs.readFileSync('nodes.json', 'utf8');
    return JSON.parse(data);
  }
  catch(e)
  {
    return undefined;
  }
}

function write_nodes(nodes)
{
  fs.writeFileSync('nodes.json', JSON.stringify(nodes));
}

async function get_node_state(node) {

  let result = {};

    var provider = new WsProvider(node);
    // Create the API and wait until ready
    var api = await ApiPromise.create({ provider });

    var pingTime = Date.now();
    await Promise.all([
      api.rpc.system.health()
    ]);
    pingTime = Date.now() - pingTime;

    const network_state = await Promise.all([
      api.rpc.system.networkState()
    ]);
    
   var conPeers = network_state[0].connectedPeers;

   let isOpened = false;
    // check ports
    await asyncForEachMap(conPeers, async (i) =>  {
      let item = i[1]   
      if (item.enabled && item.open){
        await asyncForEach(item.knownAddresses, async (a) => {
          if (!isOpened){
            var addr = parse_multiaddr(a)
            if (addr != undefined)
            {
              if(test_ip(addr.ip)){
                if (await isPortReachable(addr.port, { host : addr.ip })){
                  isOpened = true;
                }
              }
            }
          }
        })
      }
    })

    const block = await Promise.all([
      api.rpc.chain.getBlock()
    ]);

    var number = block[0].block.header.number.toNumber()
    var hash = block[0].block.hash.toHex()
    
    result.number = number
    result.hash = hash
    result.ports_reachable = isOpened
    result.ping_time = pingTime

    return result
}

async function get_nodes_state(nodes) {

  await asyncForEach(nodes, async (node) => {
    let res = await get_node_state(node.url)
    node.ping_time = res.ping_time
    node.hash = res.hash
    node.number = res.number
    node.ports_reachable = res.ports_reachable
  });

  let blocksNums2 = []
  nodes.forEach(element => {
    blocksNums2.push({num : element.number, el : element})
  });

  let blocksNums = []
  nodes.forEach(element => {
    blocksNums.push(element.number)
  });
  let highestBlock = Math.max(...blocksNums)
  let consensusBlock = Math.min(...blocksNums)

  nodes.forEach(node => {
    node.trusted = node.number >=  highestBlock - 3 && node.ports_reachable
  });

  let consensusArray = []
  await asyncForEach(nodes, async (i) => {
    var provider = new WsProvider(i.url);
    var api = await ApiPromise.create({ provider });
  
    var pingTime = Date.now();
    var el = blocksNums2.find(e => e.num == consensusBlock)
    const consensusBlockHash = await Promise.all([
      api.rpc.chain.getBlock(el.el.hash)
    ]);

    consensusArray.push({item: i, blockHash: consensusBlockHash[0].block.hash.toHex() })
  })

  var groups = groupBy(consensusArray, consensus => consensus.blockHash)
  nodes = []
  Array.from(groups.values().next().value).forEach(i => {
    i.trusted = true
    nodes.push(i.item)
  })

  nodes.sort((a, b) => {
    if (a.ping_time > b.ping_time)
      return 1;

    if (a.ping_time < b.ping_time)
      return -1;  

    return 0; 
    })

 // return nodes
}

async function get_best_url () {

  let nodes = read_nodes();
  if (nodes == undefined)
    nodes = default_nodes()

  // checking initialize nodes
  if (nodes.filter(e => e.ping_time <= 0).length > 0) {
    await get_nodes_state(nodes)
    write_nodes(nodes)
  }

  // get best ping time connection
  let bestNode = nodes.filter(i => i.trusted == true)[0]
  
  return bestNode.url
}
async function main () {

  console.log(await get_best_url());
}
  
main().catch(console.error).finally(() => process.exit());