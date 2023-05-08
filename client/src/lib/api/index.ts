import axios from 'axios';

const getPostList = () => {
    axios
        .get('/api/article')
        .then((response) => {
            return response;
        }).catch(() => {
            return [];
        });
};

const api = {
    getPostList
};

export default api;