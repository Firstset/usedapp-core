"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var defaults_1 = require("./defaults");
var src_1 = require("../../../src");
describe('Harmony Chain', function () {
    it('getChainId', function () {
        (0, chai_1.expect)(src_1.Harmony.chainId).to.equal(1666600000);
    });
    it('getChainName', function () {
        (0, chai_1.expect)(src_1.Harmony.chainName).to.eq('Harmony');
    });
    it('isTestChain', function () {
        (0, chai_1.expect)(src_1.Harmony.isTestChain).to.be["false"];
    });
    it('isLocalChain', function () {
        (0, chai_1.expect)(src_1.Harmony.isLocalChain).to.be["false"];
    });
    it('getExplorerAddressLink', function () {
        (0, chai_1.expect)(src_1.Harmony.getExplorerAddressLink(defaults_1.TEST_ADDRESS)).to.eq("https://explorer.harmony.one/address/".concat(defaults_1.TEST_ADDRESS));
    });
    it('getExplorerTransactionLink', function () {
        (0, chai_1.expect)(src_1.Harmony.getExplorerTransactionLink(defaults_1.TEST_TX)).to.eq("https://explorer.harmony.one/tx/".concat(defaults_1.TEST_TX));
    });
});
//# sourceMappingURL=harmony.test.js.map