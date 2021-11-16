import HTTP from './http'
import API from './api'

import Mock from "mockjs";

const fetchPosts = (params) => {

  const newsList = Mock.mock({
    "data|50": [
      {
        id: "@id()",
        name: "@cname(10, 20)",
        stock: "@integer(10, 200)"
      }
    ],
    total: 50
  });

  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(newsList);
      }, Mock.Random.integer(3000, 5000));
  });

};

export default class PostServer {
  static getPosts = fetchPosts
}
