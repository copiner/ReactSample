import HTTP from './http'
import API from './api'


export default class LoginServer {

  static login = ({ username, password }) => http.post(LOGIN.URL, { username, password })
}
