import { Chain } from '@usedapp/core/src/constants'

export const Berachain: Chain = {
  chainId: 80084,
  chainName: 'Berachain',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
  getExplorerAddressLink: (address: string) => `https://explorer.emerald.oasis.dev/address/${address}/transactions`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://explorer.emerald.oasis.dev/tx/${transactionHash}/internal-transactions`,
}

export default { Berachain }
