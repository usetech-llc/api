FROM node:12.15.0
WORKDIR /src
COPY . .
RUN yarn && yarn run build

WORKDIR /src/consensus
RUN node consensusEnsurer.js

CMD ["tail", "-f", "/dev/null"]