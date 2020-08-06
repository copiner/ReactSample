import HTTP from './http'
import API from './api'

import Mock from "mockjs";

const fetchDict = (params) => {
  //console.log(params)
  const goodsList = Mock.mock({
    "data|3-7": [
      {
        key: '@string("number", 5)',
        value: "@cword(2,7)"
      }
    ]
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(goodsList);
    }, Mock.Random.integer(100, 500));
  });
};

export default class DictServer {

  static initDict = fetchDict

  //static initDict = (idx) => HTTP.post(API.DICT, { idx })
}
