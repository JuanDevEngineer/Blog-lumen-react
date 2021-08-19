import axios from 'axios'

const BASE_URL = 'localhost:9090/v1/'

export const apiAuthorize = (token = '') => {
    let api = null
    
    if(token !== '') {
        api = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'apllication/json',
                'Authorization': `Bearer ${token}`
            }
        });
    } else {
        api = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'apllication/json',
            }
        });
    }
    

    return api
}