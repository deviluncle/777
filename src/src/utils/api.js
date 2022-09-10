import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3300',
    timeout: 50000
})

const api = {
    post(path, data) {
        return instance({
            method: 'post',
            url: path,
            data: data
        }).then(res => {
            return Promise.resolve(res);
        }).catch(err => {
            return Promise.reject(err)
        })
    }
}

export default api;
