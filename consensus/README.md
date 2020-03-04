# Consensus Ensurer

This component allows to increase the probability that node that is used by JS API has come into consensus with the rest of network, is not being successfully attacked, and is not attacking the network.



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
TBD
```

#### Changes are transparent, the rest of API functionality is not affected

The consensus ensurer is not part of JS API, even though it can be distributed together with JS API. It is purely a stand alone component, which exists in two files in consensus folder.

## Usage

This command will return the URL of the best node to connect:

```
await get_best_url()
```