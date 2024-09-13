import { addressEqual, TransactionOptions } from '../../src'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { useCallback, useState } from 'react'
import { useEthers } from './useEthers'
import { usePromiseTransaction } from './usePromiseTransaction'
import { LogDescription } from 'ethers/lib/utils'

export function connectContractToSigner(contract: Contract, options?: TransactionOptions, library?: Web3Provider) {
  if (contract.signer) {
    return contract
  }

  if (options?.signer) {
    return contract.connect(options.signer)
  }

  if (library?.getSigner()) {
    return contract.connect(library.getSigner())
  }

  throw new TypeError('No signer available in contract, options or library')
}

export function useContractFunction(
  contract: Contract, 
  functionName: string, 
  options?: TransactionOptions
) {
  const { library, chainId } = useEthers()
  const { promiseTransaction, state, resetState } = usePromiseTransaction(chainId, options)
  const [events, setEvents] = useState<LogDescription[] | undefined>(undefined)

  const send = useCallback(
    async (...args: any[]) => {
      if (!contract) {
        throw new Error('Contract is undefined');
      }

      const contractWithSigner = connectContractToSigner(contract, options, library)
      
      try {
        let tx;
        if (functionName === 'propose') {
          const proposeFunctions = Object.keys(contractWithSigner.functions)
            .filter(key => key.startsWith('propose('));

          if (args.length === 5) {
            args.push(0);
          }

          const matchingPropose = proposeFunctions.find(key => {
            const paramCount = key.split(',').length - 1;
            return paramCount === args.length;
          });

          if (!matchingPropose) {
            throw new Error(`No matching propose function for ${args.length} arguments. This could be due to a mismatch between the number of arguments provided and the available function signatures.`);
          }

          tx = await contractWithSigner.functions[matchingPropose](...args);
        } else {
          if (typeof contractWithSigner.functions[functionName] !== 'function') {
            throw new Error(`Function ${functionName} is not a function on the contract`);
          }
          tx = await contractWithSigner.functions[functionName](...args);
        }

        const receipt = await promiseTransaction(tx)
        
        if (receipt?.logs) {
          const events = receipt.logs.reduce((accumulatedLogs, log) => {
            try {
              return addressEqual(log.address, contract.address)
                ? [...accumulatedLogs, contract.interface.parseLog(log)]
                : accumulatedLogs
            } catch (_err) {
              return accumulatedLogs
            }
          }, [] as LogDescription[])
          setEvents(events)
        }
      } catch (error) {
        throw error
      }
    },
    [contract, functionName, options, library, promiseTransaction]
  )

  return { send, state, events, resetState }
}
