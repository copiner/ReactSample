import React, { Component } from 'react';
//异步加载组件
import AsyncComponent from '../util/loadable';
const Counter = AsyncComponent(() => import('../component/Counter'));
//import Alert from '../component/Alert';

export const dRoutes = [
//   {
//   title:"凭证查看",
//   path: '/alert',
//   exact: true,
//   render: props => < Alert {...props} />
// },
{
  title:"统计报表",
  path: '/counter',
  exact: true,
  render: props => < Counter {...props} />
}];
