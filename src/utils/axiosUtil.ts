import axios from "axios";
import { useJwtTokenStore } from '@/stores/store'
const jwtToken = useJwtTokenStore();


axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
});

service.interceptors.request.use(function (config) {
    config.headers['Authorization'] = jwtToken.jwt;
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default service 