import axios from 'axios'

const BASE_URL = 'http://localhost:8000/v1/api'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

export default api