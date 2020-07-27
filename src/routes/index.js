import React from 'react';
import loadable from "@loadable/component";
import { Spin } from 'antd';

// const Hoc = loadable(() => import("../component/hoc"), {fallback: <Spin size="large" />});
// const Acc = loadable(() => import("../component/account"), {fallback: <Spin size="large" />});
// const PButton = loadable(() => import("../component/ref"), {fallback: <Spin size="large" />});
// const ForRef = loadable(() => import("../component/ref/app"), {fallback: <Spin size="large" />});


// const Postcss = loadable(() => import(/* webpackChunkName: "postcss" */'../component/postcss'))
// const BarChart = loadable(() => import(/* webpackChunkName: "bar" */'../component/chart/bar'))
// const Counter = loadable(() => import(/* webpackChunkName: "counter" */'../component/counter'))

const Home = loadable((props) => import(/* webpackChunkName: "counter" */'../component/home'))

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}


export const routesList = [
{
    title:"业务办理",
    path: '/business',
    exact:true,
    routes:[
      {
        title:"售卡充值",
        path: '/sail/:name',
        extra: {
          ant: true
        },
        component: Home,
        routes: [
          {
            title:"业务办理",
            path: "/sail/bus",
            component: Bus
          },
          {
            title:"信息上传",
            path: "/sail/cart",
            component: Cart
          }
        ]
      },
      {
        title:"柱状显示",
        path: '/barchart',
        exact: true,
        component: loadable(() => import(/* webpackChunkName: "bar" */'../component/chart/bar'))
      },
      {
        title:"下代样式",
        path: '/postcss',
        exact: true,
        component: loadable(() => import(/* webpackChunkName: "postcss" */'../component/postcss'))
      },
      {
        title:"统计报表",
        path: '/counter',
        exact: true,
        component: loadable(() => import(/* webpackChunkName: "counter" */'../component/counter'))
      }
    ]
},
{
  title:"交易查询",
  path: '/report',
  exact:true,
  routes:[
    {
      title:"交易统计",
      path: '/hoc',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "hoc" */"../component/hoc"))
    },{
      title:"交易对账",
      path: '/acc',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "account" */"../component/account"))
    },{
      title:"交易按钮",
      path: '/pbutton',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "ref" */"../component/ref"))
    },{
      title:"交易报表",
      path: '/portal',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "portal" */"../component/portal"))
    }
  ]
},
{
  title:'用户管理',
  routes:[
    {
      title:"图片上传",
      path: '/cropper',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "cropper" */'../component/cropper'))
    }
  ]
},
{
  title:'权限管理',
  path:'/auth',
  routes:[
    {
      title:"统计报表",
      path: '/user',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "user" */'../container/user'))
    },{
      title:"交易退款",
      path: '/posts',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "post" */"../container/post"))
    },{
      title:"退款交易",
      path: '/props',
      exact: true,
      component: loadable(() => import(/* webpackChunkName: "props" */"../component/props"))
    }
  ]
}

];
