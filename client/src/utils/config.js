import axios from 'axios';
import { getValidationError } from './getValidationError';

const api_url = 'http://localhost:8000/api';

const api = axios.create({
    baseURL: api_url,
    headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors',
    },
});


api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = getValidationError(error);
        if(message) {
            return Promise.reject(message);
        }
        return Promise.reject(error);
    }
);

export default api;
