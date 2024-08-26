require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        `0xc323882f3c6be3db9b6352560ddb1c256782bcd034f04d2a6b10a3b06c14fa60`, // Private key of account
      ],
    }
  },
};
