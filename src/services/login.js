import HTTP from './http'
import API from './api'

import Mock from "mockjs";

const fetchUser = (params) => {

  const goodsList = Mock.mock({
      id: "@id()",
      name: "@cname(10, 20)",
      age: "@integer(1, 100)"
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(goodsList);
    }, Mock.Random.integer(100, 500));
  });
};

export default class LoginServer {

  static login = fetchUser

  //static login = ({ username, password }) => HTTP.post(API.LOGIN.URL, { username, password })
}
