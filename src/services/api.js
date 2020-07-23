/*
服务接口
*/
const API = {
  /*
  用户登陆
  */
  LOGIN: {
    SIGN_IN: '/oauth/token',
    REFRESH: '/oauth/token',
  },
  /*
  用户信息
  */
  USER: {
    LIST: '/appuser/list',
    UPDATE: '/appuser/personal/',
    SELECT: '/appuser/business/select',
    BUSINESS_LIST: '/appuser/business/list'
  },
  /*
  业务办理
  */
  BUSINESS: {
    MENUS: '/sys/user/index',
    LOGO: {
      FETCH: '/api/open/logo/get'
    },
    VERSION: '/version',
    DEPT: {
      LIST: '/system/list',
      SAVE: '/system/save',
      EDIT: '/system/edit/',
      UPDATE: '/system/update',
      REMOVE: '/system/remove',
    }
  }
}

export default API
