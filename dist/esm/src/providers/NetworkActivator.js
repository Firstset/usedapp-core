import { NetworkConnector } from '@web3-react/network-connector';
import { useEffect } from 'react';
import { useEthers } from '../hooks';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useConfig } from './config/context';
export function NetworkActivator() {
    const { activate, account, chainId: connectedChainId, active, connector } = useEthers();
    const { networks, readOnlyChainId, readOnlyUrls, autoConnect } = useConfig();
    useEffect(() => {
        const eagerConnect = async () => {
            const injected = new InjectedConnector({
                supportedChainIds: (networks === null || networks === void 0 ? void 0 : networks.map((network) => network === null || network === void 0 ? void 0 : network.chainId)) || [],
            });
            if (await injected.isAuthorized()) {
                activate(injected);
            }
        };
        autoConnect && eagerConnect();
    }, []);
    useEffect(() => {
        if (readOnlyChainId && readOnlyUrls) {
            if (!active || (connector instanceof NetworkConnector && connectedChainId !== readOnlyChainId)) {
                activate(new NetworkConnector({ defaultChainId: readOnlyChainId, urls: readOnlyUrls || [] }));
            }
        }
    }, [readOnlyChainId, readOnlyUrls, active, account, connectedChainId, connector]);
    return null;
}
//# sourceMappingURL=NetworkActivator.js.map