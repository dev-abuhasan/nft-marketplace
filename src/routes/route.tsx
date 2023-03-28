import { useRoutes } from 'react-router-dom';
import PublicRoute from './public-route';


const config = {
    basename: '',
    defaultPath: ''
};

const userJSON = localStorage.getItem('nftMarketplace');
const user = userJSON ? JSON.parse(userJSON) : null;


const Routings = () => {
    return useRoutes([PublicRoute, user ? PublicRoute : {}], config.basename);
};

export default Routings;