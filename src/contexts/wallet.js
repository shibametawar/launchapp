import {
    createContext,
    useState,
    useContext,
    useEffect,
} from 'react';
import { getStorageWallet, saveStorageWallet, clearStorageWallet } from '../services/wallet';

const WalletContext = createContext(null);

function WalletProvider(props) {
    const { children } = props;

    const { address } = getStorageWallet();

    const [ isLoading, setLoading ] = useState(false);
    const [ walletAddress, setWalletAddress ] = useState(address);

    const disconnectWallet = () => {
        setWalletAddress(null);
        clearStorageWallet();
    };

    const setWallet = (address) => {
        setWalletAddress(address);
        saveStorageWallet(address);
    }

    return (
        <WalletContext.Provider value={ {
            walletAddress,
            isLoading,
            setWallet,
            disconnectWallet,
        } }>
            { children }
        </WalletContext.Provider>
    )
}

function useWallet() {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error('useWallet must be used within WalletContext');
    }
    return context;
}

export {
    useWallet,
    WalletProvider,
};
