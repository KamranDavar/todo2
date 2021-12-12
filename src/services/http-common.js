import axios from "axios";
import {notification} from 'antd';

const instance = axios.create({
    baseURL: "https://c59deabb-094f-4994-8e73-8d1b7a41dcb1.mock.pstmn.io",
    headers: {
        "Content-type": "application/json"
    }
});

instance.interceptors.response.use(res => {
    return res;
}, err => {
    notification.warning({
        message: err.message,
    });
    return Promise.reject(err);
});

export default instance