import React, { Component } from 'react';
import loadable from "@loadable/component";
import { Spin } from 'antd';

const User = loadable(() => import("../container/user"), {
  fallback: <Spin size="large" />
});

const Post = loadable(() => import("../container/post"), {
  fallback: <Spin size="large" />
});
//同步加载
// import UserList from '../container/UserList';
// import PostList from '../container/PostList';

export const cRoutes = [{
  title:"退款查询",
  path: '/users',
  exact: true,
  //container/index.js
  //component={route.render}
  render: props => < User {...props} />
},{
  title:"交易退款",
  path: '/posts',
  exact: true,
  //container/index.js
  // component={(props) => {
  //   let obj = Object.assign({}, {fetchParams}, props)
  //   return <route.render {...obj}/>
  // }}
  render: props => < Post {...props} />
}];
