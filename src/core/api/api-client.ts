import axios from "axios";
import { BASE_URL, TIME_OUT } from "../config/api.confing";


const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    headers: {
        'Content-Type': 'application/json'
    },
});


export default apiClient;
