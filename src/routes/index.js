import React from 'react';
import loadable from "@loadable/component";

import { Spin } from 'antd';
import { UserOutlined,VideoCameraOutlined,UploadOutlined,MailOutlined } from '@ant-design/icons';

// const Postcss = loadable(() => import(/* webpackChunkName: "postcss" */'../component/postcss'))
// const BarChart = loadable(() => import(/* webpackChunkName: "bar" */'../component/chart/bar'))

export const routesList = [
{
    id:'0',
    title:"业务办理",
    exact:true,
    icon: <UserOutlined />,
    routes:[
      {
        id:'01',
        title:"白名单管理",
        path: '/allowed',
        exact: true,
        component: loadable(() => import(/* webpackChunkName: "allow" */"../container/allow"))
      },
      {
        id:'02',
        title:"卡类别管理",
        path: '/kind',
        exact: true,
        component: loadable(() => import(/* webpackChunkName: "kind" */'../container/kind'))
      },
      {
        id:'03',
        title:"球场管理",
        path: '/temple',
        exact: true,
        component: loadable(() => import(/* webpackChunkName: "temple" */'../container/temple'))
      },
      {
        id:'04',
        title:"设备管理",
        path: '/device',
        exact: true,
        component: loadable(() => import(/* webpackChunkName: "device" */'../container/device'))
      }
    ]
},
{
  id:'1',
  title:"交易查询",
  icon: <UploadOutlined />,
  routes:[
    {
      id:'10',
      title:"交易统计",
      path: '/chart',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "bar" */'../component/chart/bar'))
    },{
      id:'11',
      title:"交易对账",
      path: '/account',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "account" */"../component/account"))
    },{
      id:'12',
      title:"交易按钮",
      path: '/pbutton',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "ref" */"../component/ref"))
    },{
      id:'13',
      title:"交易报表",
      path: '/portal',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "portal" */"../component/portal"))
    }
  ]
},
{
  id:'2',
  title:'用户管理',
  icon: <MailOutlined />,
  routes:[
    {
      id:'20',
      title:"弹窗显示",
      path: '/modal',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "modal" */'../component/modal'))
    },
  ]
},
{
  id:'3',
  title:'权限管理',
  icon: <VideoCameraOutlined />,
  routes:[
    {
      id:'30',
      title:"卡类别管理",
      path: '/postcss',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "postcss" */'../component/postcss'))
    },{
      id:'31',
      title:"交易退款",
      path: '/posts',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "post" */"../container/post"))
    },{
      id:'32',
      title:"退款交易",
      path: '/props',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "props" */"../component/props"))
    }
  ]
}

];
