import { post } from '../services/fetcher';

const createChest = ({ address, chestRare }) => {
    return post('/summon/openChest', { address, chestRare });
};

export { createChest };
