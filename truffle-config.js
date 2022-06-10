const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const secrets = fs.readFileSync(".secrets.json").toString().trim();
console.log(secrets);
module.exports = {
    networks: {
        kovan: {
            networkCheckTimeout: 10000,
            provider: () => {
               return new HDWalletProvider(
                 secrets.mnemonic,
                 `wss://kovan.infura.io/ws/v3/${secrets.projectId}`
               );
            },
            network_id: "42",
         },         
      development: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*" // Match any network id
      }
    },
    compilers: {
      solc: {
        version: "^0.6.0"
      }
    }
  };