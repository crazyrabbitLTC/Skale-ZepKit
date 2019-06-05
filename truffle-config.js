const path = require("path");
require('dotenv').config();
const mnemonic = process.env.MNENOMIC;
const HDWalletProvider = require("truffle-hdwallet-provider");
// Create your own key for Production environments (https://infura.io/)
const INFURA_ID = 'd6760e62b67f4937ba1ea2691046f06d';

let privateKey = "43A55EB0B6F5B188011664AD9484FB355B12A51B4AD3C0FBDA412184E7A45666";

//Provide your SKALE endpoint address
let skale = "http://104.248.79.40:8024";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    skale: {
      provider: () => new HDWalletProvider(privateKey, skale),
      gasPrice: 0,
      network_id: "*"
  }
  }
};
