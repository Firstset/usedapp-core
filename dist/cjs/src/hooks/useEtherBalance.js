"use strict";
exports.__esModule = true;
exports.useEtherBalance = void 0;
var constants_1 = require("../constants");
var useMulticallAddress_1 = require("./useMulticallAddress");
var useContractCall_1 = require("./useContractCall");
function useEtherBalance(address) {
    var _a;
    var multicallAddress = (0, useMulticallAddress_1.useMulticallAddress)();
    var etherBalance = ((_a = (0, useContractCall_1.useContractCall)(multicallAddress &&
        address && {
        abi: constants_1.MultiCallABI,
        address: multicallAddress,
        method: 'getEthBalance',
        args: [address]
    })) !== null && _a !== void 0 ? _a : [])[0];
    return etherBalance;
}
exports.useEtherBalance = useEtherBalance;
//# sourceMappingURL=useEtherBalance.js.map