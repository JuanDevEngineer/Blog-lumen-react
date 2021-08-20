import api from '../config/configAxios'

class Service {

    constructor() {
        this.token = localStorage.getItem('token') || ''
    }

    fetchServericeUp(enpoint, data, method = 'GET') {
        if(method === 'GET') {
            return api.get(enpoint, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                data: data
            })
        } else {
            return api.request({
                method: method,
                url: enpoint,
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                data: data
            })
        }
    }

    fetchServericeDown(enpoint, data, method = 'GET') {
        if(method === 'GET') {
            return api.get(enpoint, {
                data: data
            })
        } else {
            return api.request({
                method: method,
                url: enpoint,
                data: data
            })
        }
    }

}

export default new Service()