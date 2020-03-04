# Consensus Ensurer

This component allows to increase the probability that node that is used by JS API has come into consensus with the rest of network, is not being successfully attacked, and is not attacking the network.

First, it iterates over all known node URLs, which it stores in `function default_nodes()`. It checks that all nodes are synched and return about the same head block number. Also, it checks that block hashes match for the blocks with the same numbers, and finally, it calls `system_networkState` to read the list of connected nodes for each URL and checks if these nodes respond. If it can find the minimum required number of responding peers for the node, the node is considered good. Further it will persist the list of good connections and rotate them next time.

## Usage

This command will return the URL of the best node to connect:

```
await get_best_url()
```

## Demo

### What has been delivered

Most of the additions are located in consensus folder in the JS API repository.

consensusEnsurer.js file is designed for use within NodeJS environment.
consensusEnsurerClient.js file is designed for use within Browser environment.

For convenience of this demo, we will use NodeJS further.

### Building API in docker container

Checkout JS API from this repository and run from the root folder of JS API:

```
docker image build -t jsapi . -f consensus.Dockerfile
docker run -d --name ce jsapi
```

This will bring up a NodeJS container, and build JS API inside this container. Also, this command will run consensus ensurer.

### Milestone Deliverables

#### Connection is established based on the list of boot nodes, node URL is not required in order to establish a connection to the network

The following command returns the URL of the best node to connect. Knowing URL ahead of time is not required:

```
await get_best_url()
```

#### List of successful connections (available nodes) is saved and maintained in persistent storage (e.g. browser cookies).

Run the following command to connect to docker container with running JS API to peek into the Consensus Ensurer config file:

```
docker exec -it ce /bin/bash
ls
```

The `ls` command will list the files currently located in `consensus` folder. If everything goes well, there is a file called nodes.json. See what is inside:

```
cat nodes.json
```

The content will look like this:
```
[{"url":"wss://kusama-rpc.polkadot.io/","ping_time":1201,"hash":"0x473e3b0d55255234f76f4cefc5b480f0e729d314a8cf1244fbcc4c457329200e","number":1307245,"ports_reachable":true,"trusted":false},{"url":"wss://cc3-3.kusama.network/","ping_time":61,"hash":"0x34b6a1185cc0928dbb8fbb9f22e779890f6c1ab86c355b85bb88628b1f105ef2","number":1307246,"ports_reachable":true,"trusted":false},{"url":"wss://cc3-4.kusama.network/","ping_time":286,"hash":"0x20813ae1cadba4a3ae2504929e21cae5ea6917ccf3c2e446b7b1520bec32cbe5","number":1307247,"ports_reachable":true,"trusted":false},{"url":"wss://cc3-5.kusama.network/","ping_time":337,"hash":"0x9a4ab94a646302ebf4bd0d42d93e4a88f77f8c46a70c30382dcf58d96bb4395f","number":1307249,"ports_reachable":true,"trusted":true},{"url":"wss://cc3-1.kusama.network/","ping_time":1010,"hash":"0xa9b5cc8c7fd2a9a7baf57296311af781bc32aca4d9ac1ca8fff2499607141d4f","number":1307250,"ports_reachable":true,"trusted":true},{"url":"wss://cc3-2.kusama.network/","ping_time":1003,"hash":"0x3150e9acca12101fb5d0a518ef1d653c3bb6cf385148c8809fc339f237938515","number":1307252,"ports_reachable":true,"trusted":true}]
```

This is the current list of "good" nodes.

#### Changes are transparent, the rest of API functionality is not affected

The consensus ensurer is not part of JS API, even though it can be distributed together with JS API. It is purely a stand alone component, which exists in two files in consensus folder.

