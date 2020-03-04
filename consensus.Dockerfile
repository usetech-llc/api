FROM node:12.15.0
WORKDIR /src
COPY . .
RUN yarn && yarn run build
RUN npm install --save @polkadot/api

WORKDIR /src/consensus
RUN node consensusEnsurer.js

CMD ["tail", "-f", "/dev/null"]