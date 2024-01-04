require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();



const INFURA_API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_API_KEY = process.env.GOERLI_API_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      chainId: 5,
      blockConfirmation: 6
    }
  },
  etherscan: {
    apiKey: GOERLI_API_KEY,
},
sourcify: {
  enabled: true
},
solidity: {
  compilers: [
    {
      version: "0.8.0",
    },
    {
      version: "0.8.1",
    },
    {
      version: "0.8.8",
    },
    {
      version: "0.8.17",
    },
  ],
}
};