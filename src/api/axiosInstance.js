import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_DOMAIN}/api/v1`,
    headers: {
        'Content-Type': 'application/json'
    },
    // withCredentials: true
});