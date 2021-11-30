import { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import './layout.scss';
import { handleAccountsMetamaskChanged } from '../services/metamask';
import { useWallet } from '../contexts/wallet';

const Layout = ({ children }) => {
    const { walletAddress } = useWallet();
    
    useEffect(() => {
        if (walletAddress) {
            handleAccountsMetamaskChanged(walletAddress);
        }
    }, [ walletAddress ])
    
    return (
        <div className="u-body theme-dark io-zinnia">
            <Header />
            { children }
            <Footer />
        </div>
    );
};

export default Layout;
