import axios from 'axios'

const BASE_URL = 'http://localhost:9090/v1/api'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default api