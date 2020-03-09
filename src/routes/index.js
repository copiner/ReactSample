import React from 'react';
import { Spin } from 'antd';
import loadable from "@loadable/component";

//异步加载组件
import AsyncComponent from '../component/async';

const Counter = AsyncComponent(() => import('../component/async/counter'));

//同步加载
import UserList from '../container/UserList';
import PostList from '../container/PostList';

import Hoc from '../component/Hoc';
import Acc from '../component/Account';

import HForm from '../component/Account/form';
//import Alert from '../component/Alert';

//import CForm from '../component/Form';
const CForm = loadable(() => import("../component/Form"), {
  fallback: <Spin size="large" />
});

const Home = () =>{
    return  (
        <h1>Home</h1>
      );
};

export const comRoutes = [{
  title:"交易查询",
  path: '/',
  exact: true,
  render: Home
},{
  title:"退款查询",
  path: '/users',
  exact: true,
  //container/index.js
  //component={route.render}
  render: props => < UserList {...props} />
},{
  title:"交易退款",
  path: '/posts',
  exact: true,
  //container/index.js
  // component={(props) => {
  //   let obj = Object.assign({}, {fetchParams}, props)
  //   return <route.render {...obj}/>
  // }}
  render: props => < PostList {...props} />
}];

export const busRoutes = [{
  title:"交易统计",
  path: '/hoc',
  exact: true,
  render: Hoc
},{
  title:"交易对账",
  path: '/acc',
  exact: true,
  render: Acc
},{
  title:"交易明细",
  path: '/login',
  exact: true,
  render: props => < CForm {...props} />
},{
  title:"电子凭证",
  path: '/hform',
  exact: true,
  render: props => < HForm {...props} />
},{
  title:"凭证查看",
  path: '/alert',
  exact: true,
  render: props => < Alert {...props} />
},{
  title:"统计报表",
  path: '/counter',
  exact: true,
  render: props => < Counter {...props} />
}];
