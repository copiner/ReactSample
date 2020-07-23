import HTTP from './http'
import API from './api'

import Mock from "mockjs";

const fetchGoods = (params) => {

  const goodsList = Mock.mock({
    "list|100": [
      {
        key: "@id()",
        name: "@cname(10, 20)",
        img: "@img(64x64)",
        price: "@float(0.01, 9999.99)",
        stock: "@integer(10, 200)",
        createTime: "@date(yyyy-MM-dd HH:mm:ss)",
        updateTime: "@date(yyyy-MM-dd HH:mm:ss)"
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

export default class UserServer {

  static getGoods = fetchGoods

  static fetchList = ({ orderVersions, size, page, userId, mobile, sourceId, cardId, realName, startTime, endTime }) => Http.get(API.USER.LIST, { orderVersions, size, page, userId, mobile, sourceId, cardId, realName, startTime, endTime })

  static update = ({ loanMinAmount, loanMaxAmount, userId }) => Http.post(API.USER.UPDATE, { loanMinAmount, loanMaxAmount, userId })

  static select = ({ id, userId }) => Http.post(API.USER.SELECT, { id, userId })

  static fetchBusinessList = ({ userId }) => Http.get(API.USER.BUSINESS_LIST, { userId })
}
