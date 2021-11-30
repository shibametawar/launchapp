import { Link } from 'react-router-dom';
import { signMetamask } from '../services/metamask';
import { toast } from '../elements/toastify';
import { useWallet } from '../contexts/wallet';
import { truncateMiddle } from '../utils/string';

const Header = () => {
    const { walletAddress, setWallet, disconnectWallet } = useWallet();
    
    const handleConnect = async () => {
        try {
            const { sign, activeAccount } = await signMetamask();
            if (!sign) return;
            setWallet(activeAccount);
        } catch (error) {
            toast(error.message, 'error');
        }
    };

    const handleDisconnect = () => {
        disconnectWallet();
    };
    
    return (
        <header className="site-header site-header-home is-sticky">
            <button onClick={ handleConnect }>{ walletAddress ? truncateMiddle(walletAddress) : 'Connect metamask' }</button>
            { walletAddress && <button onClick={ handleDisconnect }>Disconnect</button> }
            <div className="navbar navbar-full navbar-expand-lg is-transparent" id="mainnav">
                <Link className="navbar-brand animated" data-animate="fadeInDown" data-delay=".65" to="/">
                    <img className="logo logo-dark" alt="logo" src="/images/logotext.png" srcSet="/images/logotext.png 2x" />
                    <img className="logo logo-light" alt="logo" src="/images/logotext.png" srcSet="/images/logotext.png 2x" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle">
                    <span className="navbar-toggler-icon">
                        <span className="ti ti-align-justify" />
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">
                    <ul className="navbar-nav animated remove-animation" data-animate="fadeInDown" data-delay=".75">
                        <li className="nav-item">
                            <Link className="nav-link menu-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link menu-link" to="/summon">Summon</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link menu-link" to="/comming-soon">NFT Marketplace</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link menu-link" to="/comming-soon">Join Battle</Link>
                        </li>
                    </ul>
                    <ul className="navbar-btns animated remove-animation" data-animate="fadeInDown" data-delay=".85">
                        <li className="nav-item">
                            <button type="button" className="connectMetamaskButton btn btn-icon-s3">Connect wallet</button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Header;