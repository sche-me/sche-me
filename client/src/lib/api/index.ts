import axios from 'axios';
// import { BASE_URL } from '../../config/config.json';

const searchCourier = () => {
    return axios.get(
        `BASE_URL/carriers`
    );
};

const api = {
    searchCourier
};

export default api;