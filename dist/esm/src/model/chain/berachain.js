export const Berachain = {
    chainId: 80084,
    chainName: 'Berachain',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
    getExplorerAddressLink: (address) => `https://explorer.emerald.oasis.dev/address/${address}/transactions`,
    getExplorerTransactionLink: (transactionHash) => `https://explorer.emerald.oasis.dev/tx/${transactionHash}/internal-transactions`,
};
export default { Berachain };
//# sourceMappingURL=berachain.js.map