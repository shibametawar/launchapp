import { ToastContainer } from 'react-toastify';
import Layout from './layouts';
import Routes from './routes';
import { WalletProvider } from './contexts/wallet';

function App() {
    return (
        <WalletProvider>
            <ToastContainer />
            <Layout>
                <Routes />
            </Layout>
        </WalletProvider>
    );
}

export default App;
