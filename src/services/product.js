import axios from "axios";
import { API_BASE_URL } from "../config/api";

axios.defaults.baseURL = API_BASE_URL;

export const getProducts = () => {
    return axios.get('product')
        .then(
            res => Promise.resolve(res),
            err => Promise.reject(err)
        )
}