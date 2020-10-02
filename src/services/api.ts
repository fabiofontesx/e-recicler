import axios from 'axios';

const api = axios.create({
    baseURL: 'https://garbage-collector-aps.herokuapp.com/'
});

export default api;