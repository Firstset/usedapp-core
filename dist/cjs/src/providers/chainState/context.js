"use strict";
exports.__esModule = true;
exports.useChainState = exports.ChainStateContext = void 0;
var react_1 = require("react");
exports.ChainStateContext = (0, react_1.createContext)({
    multicallAddress: '',
    dispatchCalls: function () {
        // empty
    }
});
function useChainState() {
    return (0, react_1.useContext)(exports.ChainStateContext);
}
exports.useChainState = useChainState;
//# sourceMappingURL=context.js.map