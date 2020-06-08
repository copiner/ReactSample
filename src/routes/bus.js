 import React, { Component } from 'react';
//异步加载组件
import asyncComponent from '../util/loadable';
const Counter = asyncComponent(() => import('../component/counter'));

const Postcss = asyncComponent(() => import(/* webpackChunkName: "postcss" */'../component/postcss'));

const BarChart = asyncComponent(() => import(/* webpackChunkName: "bar" */'../component/chart/bar'))

export const dRoutes = [
{
  title:"柱状显示",
  path: '/barchart',
  exact: true,
  render: props => < BarChart {...props} />
},
{
  title:"下代样式",
  path: '/postcss',
  exact: true,
  render: props => < Postcss {...props} />
},
{
  title:"统计报表",
  path: '/counter',
  exact: true,
  render: props => < Counter {...props} />
}];
