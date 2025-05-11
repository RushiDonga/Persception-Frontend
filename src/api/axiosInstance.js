import axios from "axios";

const DEV = 'http://localhost:4000/api/v1';
const PROD = 'http://localhost:4000/api/v1';


export const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    },
    // withCredentials: true
});