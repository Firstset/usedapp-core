"use strict";
exports.__esModule = true;
exports.Sepolia = exports.Kovan = exports.Goerli = exports.Rinkeby = exports.Ropsten = exports.Mainnet = void 0;
exports.Mainnet = {
    chainId: 1,
    chainName: 'Mainnet',
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    getExplorerAddressLink: function (address) { return "https://etherscan.io/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://etherscan.io/tx/".concat(transactionHash); }
};
exports.Ropsten = {
    chainId: 3,
    chainName: 'Ropsten',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
    getExplorerAddressLink: function (address) { return "https://ropsten.etherscan.io/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://ropsten.etherscan.io/tx/".concat(transactionHash); }
};
exports.Rinkeby = {
    chainId: 4,
    chainName: 'Rinkeby',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
    getExplorerAddressLink: function (address) { return "https://rinkeby.etherscan.io/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://rinkeby.etherscan.io/tx/".concat(transactionHash); }
};
exports.Goerli = {
    chainId: 5,
    chainName: 'Goerli',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
    getExplorerAddressLink: function (address) { return "https://goerli.etherscan.io/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://goerli.etherscan.io/tx/".concat(transactionHash); }
};
exports.Kovan = {
    chainId: 42,
    chainName: 'Kovan',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
    getExplorerAddressLink: function (address) { return "https://kovan.etherscan.io/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://kovan.etherscan.io/tx/".concat(transactionHash); }
};
exports.Sepolia = {
    chainId: 11155111,
    chainName: 'Sepolia',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
    getExplorerAddressLink: function (address) { return "https://sepolia.etherscan.io/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://sepolia.etherscan.io/tx/".concat(transactionHash); }
};
exports["default"] = {
    Mainnet: exports.Mainnet,
    Ropsten: exports.Ropsten,
    Rinkeby: exports.Rinkeby,
    Goerli: exports.Goerli,
    Kovan: exports.Kovan
};
//# sourceMappingURL=ethereum.js.map