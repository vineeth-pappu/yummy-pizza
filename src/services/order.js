import axios from "axios";
import { API_BASE_URL } from "../config/api";

axios.defaults.baseURL = API_BASE_URL;

export const createOrder = (payload) => {
    return axios.post('order', payload)
        .then(
            res => Promise.resolve(res),
            err => Promise.reject(err)
        )
}