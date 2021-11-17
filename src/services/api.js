/*
服务接口
*/
const isDev = process.env.NODE_ENV === 'development'
console.log('isDev', isDev)

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
    ALLOW: {
        LIST:'/system/list'
    },
    DEVICE: {
        LIST: '/system/list',
        SAVE: '/system/save',
        EDIT: '/system/edit/',
        UPDATE: '/system/update',
        REMOVE: '/system/remove',
    },
    /*
    数据字典
    */
    DICT:"/com/initdict"
}

export default API
