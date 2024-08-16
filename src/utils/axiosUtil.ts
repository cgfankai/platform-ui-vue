import axios from "axios";


axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    // 超时
    timeout: 10000
});

axios.interceptors.request.use(function (config) {

    config.headers['Authorization'] = "Bearer qqqqqqqqqqqqweeertghjjjm";
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default service 