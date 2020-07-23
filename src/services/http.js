import axios from 'axios'

export default class Http {
  static get = (url, params) => axios.get(url, { params })
  static post = (url, data) => axios.post(url, data)
  static put = (url, data) => axios.put(url, data)
  static delete = () => axios.delete(url, data)
}
