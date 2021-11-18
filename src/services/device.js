import HTTP from './http'
import API from './api'

import Mock from "mockjs";

const fetchGoods = (params) => {

  const goodsList = Mock.mock({
    "data|50": [
      {
        key:"@id()",
        name: "@name()",
        title: "@title(3)",
        price: "@float(0.01, 999.99)",
        stock: "@integer(10, 200)"
      }
    ]
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(goodsList);
  }, Mock.Random.integer(3000, 5000));
  });
};

export default class Deviceserver {

  static fetchItem = fetchGoods

  static fetchList = ({ orderVersions, size, page, userId, mobile, sourceId, cardId, realName, startTime, endTime }) => Http.get(API.KIND.LIST, { orderVersions, size, page, userId, mobile, sourceId, cardId, realName, startTime, endTime })

  static update = ({ loanMinAmount, loanMaxAmount, userId }) => Http.post(API.KIND.UPDATE, { loanMinAmount, loanMaxAmount, userId })

  static select = ({ id, userId }) => Http.post(API.DEVICE.SELECT, { id, userId })

  static fetchBusinessList = ({ userId }) => Http.get(API.DEVICE.BUSINESS_LIST, { userId })
}
