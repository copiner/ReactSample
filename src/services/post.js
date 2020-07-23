import HTTP from './http'
import API from './api'

import Mock from "mockjs";

const fetchPosts = (params) => {

  const goodsList = Mock.mock({
    "list|100": [
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

export default class PostServer {
  static getPosts = fetchPosts
}
