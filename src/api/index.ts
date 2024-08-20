import axios, {AxiosError, InternalAxiosRequestConfig} from 'axios';
import {userStoreHook} from "@/stores/modules/user.ts";

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    noLoading?: boolean
}

const instance = axios.create({
    baseURL: 'http://43.139.67.232:32775/api',
    timeout: 30000,
    withCredentials: true,
});

// 请求拦截器
instance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
        if (config.headers && typeof config.headers.set == 'function') {
            config.headers.set('x-access-token', userStoreHook().token)
        }
        return config
    },
    (err: AxiosError) => {
        return Promise.reject(err)
    }
);

// 响应拦截器
instance.interceptors.response.use();

export default instance;
