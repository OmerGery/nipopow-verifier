const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();
const { MNEMONIC, PROJECT_ID } = process.env;
module.exports = {
    networks: {
        kovan: {
            networkCheckTimeout: 10000,
            provider: () => {
               return new HDWalletProvider(
                MNEMONIC,
                 `wss://kovan.infura.io/ws/v3/${PROJECT_ID}`
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