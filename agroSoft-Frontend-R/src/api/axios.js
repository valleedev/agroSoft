import axios from "axios";
import { API_URL } from './config';

const api = axios.create({
    baseURL: API_URL
});


api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["x-token"] = token;
    }
    return config;
});

export default api; 