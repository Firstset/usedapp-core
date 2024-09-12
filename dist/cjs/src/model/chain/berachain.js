"use strict";
exports.__esModule = true;
exports.Berachain = void 0;
exports.Berachain = {
    chainId: 80084,
    chainName: 'Berachain',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
    getExplorerAddressLink: function (address) { return "https://explorer.emerald.oasis.dev/address/".concat(address, "/transactions"); },
    getExplorerTransactionLink: function (transactionHash) {
        return "https://explorer.emerald.oasis.dev/tx/".concat(transactionHash, "/internal-transactions");
    }
};
exports["default"] = { Berachain: exports.Berachain };
//# sourceMappingURL=berachain.js.map