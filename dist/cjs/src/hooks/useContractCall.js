"use strict";
exports.__esModule = true;
exports.useContractCalls = exports.useContractCall = void 0;
var react_1 = require("react");
var useChainCalls_1 = require("./useChainCalls");
function warnOnInvalidContractCall(call) {
    console.warn("Invalid contract call: address=".concat(call && call.address, " method=").concat(call && call.method, " args=").concat(call && call.args));
}
function encodeCallData(call) {
    if (!call) {
        return undefined;
    }
    if (!call.address || !call.method) {
        warnOnInvalidContractCall(call);
        return undefined;
    }
    try {
        return { address: call.address, data: call.abi.encodeFunctionData(call.method, call.args) };
    }
    catch (_a) {
        warnOnInvalidContractCall(call);
        return undefined;
    }
}
function useContractCall(call) {
    return useContractCalls([call])[0];
}
exports.useContractCall = useContractCall;
function useContractCalls(calls) {
    var results = (0, useChainCalls_1.useChainCalls)(calls.map(encodeCallData));
    return (0, react_1.useMemo)(function () {
        return results.map(function (result, idx) {
            var call = calls[idx];
            if (result === '0x') {
                warnOnInvalidContractCall(call);
                return undefined;
            }
            return call && result ? call.abi.decodeFunctionResult(call.method, result) : undefined;
        });
    }, [results]);
}
exports.useContractCalls = useContractCalls;
//# sourceMappingURL=useContractCall.js.map