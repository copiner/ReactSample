import HTTP from './http'
import API from './api'

import Mock from "mockjs";

const fetchList = (params) => {

  const goodsList = Mock.mock({
      id: "@id()",
      name: "@cname(10, 20)",
      age: "@integer(1, 100)"
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(goodsList);
    }, Mock.Random.integer(400, 600));
  });

};

const fetchRecord = (params) => {
  console.log(params)
  const goodsList = Mock.mock({
    "list|10": [
      {
        id: "@id()",
        name: "@cname(10, 20)",
        stock: "@integer(10, 200)"
      }
    ],
    total: 100
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(goodsList);
    }, Mock.Random.integer(500, 1000));
  });

};

export default class HomeServer {
  static custInfo = fetchList

  static custRecord = fetchRecord
  //static allowList = ({ username, password }) => HTTP.post(API.BUSINESS.ALLOW, { username, password })
}
