import axios from 'axios'

export function post(url, params) {
    return axios.post(url, params)
}

export function get(url, params) {
    return axios.get(url, params)
}
