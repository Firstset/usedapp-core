import { addressEqual } from '../../src';
import { useCallback, useState } from 'react';
import { useEthers } from './useEthers';
import { usePromiseTransaction } from './usePromiseTransaction';
export function connectContractToSigner(contract, options, library) {
    if (contract.signer) {
        return contract;
    }
    if (options === null || options === void 0 ? void 0 : options.signer) {
        return contract.connect(options.signer);
    }
    if (library === null || library === void 0 ? void 0 : library.getSigner()) {
        return contract.connect(library.getSigner());
    }
    throw new TypeError('No signer available in contract, options or library');
}
export function useContractFunction(contract, functionName, options) {
    const { library, chainId } = useEthers();
    const { promiseTransaction, state, resetState } = usePromiseTransaction(chainId, options);
    const [events, setEvents] = useState(undefined);
    const send = useCallback(async (...args) => {
        if (!contract) {
            throw new Error('Contract is undefined');
        }
        const contractWithSigner = connectContractToSigner(contract, options, library);
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
            }
            else {
                if (typeof contractWithSigner.functions[functionName] !== 'function') {
                    throw new Error(`Function ${functionName} is not a function on the contract`);
                }
                tx = await contractWithSigner.functions[functionName](...args);
            }
            const receipt = await promiseTransaction(tx);
            if (receipt === null || receipt === void 0 ? void 0 : receipt.logs) {
                const events = receipt.logs.reduce((accumulatedLogs, log) => {
                    try {
                        return addressEqual(log.address, contract.address)
                            ? [...accumulatedLogs, contract.interface.parseLog(log)]
                            : accumulatedLogs;
                    }
                    catch (_err) {
                        return accumulatedLogs;
                    }
                }, []);
                setEvents(events);
            }
        }
        catch (error) {
            throw error;
        }
    }, [contract, functionName, options, library, promiseTransaction]);
    return { send, state, events, resetState };
}
//# sourceMappingURL=useContractFunction.js.map