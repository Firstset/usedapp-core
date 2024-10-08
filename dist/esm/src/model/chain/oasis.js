export const OasisEmerald = {
    chainId: 42262,
    chainName: 'OasisEmerald',
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0xA1513CE1a147BB84E04cD61d877d598C018a460F',
    getExplorerAddressLink: (address) => `https://explorer.emerald.oasis.dev/address/${address}/transactions`,
    getExplorerTransactionLink: (transactionHash) => `https://explorer.emerald.oasis.dev/tx/${transactionHash}/internal-transactions`,
};
export default { OasisEmerald };
//# sourceMappingURL=oasis.js.map