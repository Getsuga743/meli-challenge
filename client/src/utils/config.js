import axios from 'axios';

const api_url = process.env.API_URL;

const api = axios.create({
    baseURL: api_url,
    headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
    },
});

export default api;
