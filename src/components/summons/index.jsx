import { useState } from 'react';
import { createChest } from '../../apis/summon';
import { useWallet } from '../../contexts/wallet';
import { handleTransactionMetamask } from '../../services/metamask';
import { getDataOpenChest } from '../../services/summon';
import { toast } from '../../elements/toastify';
import './style.scss';
import { getBalanceShm } from '../../services/contract';
import { RARE_CHEST_AMOUNT } from '../../constants';

const Summon = () => {
    const { walletAddress } = useWallet();

    const [ isLoading, setLoading ] = useState(false);
    
    const handleOpenChest = async () => {
        try {
            setLoading(true);
            const chest = await createChest({ address: walletAddress, chestRare: 2 });
            const data = await getDataOpenChest({
                from: walletAddress,
                chest.heroId,
                chestRare,
                chest.tokenURI
            });
            
            const balanceShm = await getBalanceShm(walletAddress);
            
            if (balanceShm < RARE_CHEST_AMOUNT) {
                toast('SHM balance is not enough', 'error');
                setLoading(false);
                return;
            }
            
            const dataRes = await handleTransactionMetamask({ currentAddress: walletAddress, dataReturn: data });
            console.log(dataRes);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            if (error?.message) {
                toast(error.message, 'error');
            }
        }
    };
    
    return (
        <div>
            <button onClick={ handleOpenChest }>{ isLoading ? 'loading' : 'Open Chest' }</button>
        </div>
    )
};

export default Summon;
