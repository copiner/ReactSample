import React, { Component } from 'react';
//异步加载组件
import asyncComponent from '../util/loadable';
const Counter = asyncComponent(() => import('../component/counter'));

// const BarReact = asyncComponent(() => import(/* webpackChunkName: "BarReact" */'./EchartsDemo/BarReact')) //柱状图组件
// const LineReact = asyncComponent(() => import(/* webpackChunkName: "LineReact" */'./EchartsDemo/LineReact'))  //折线图组件
// const ScatterReact = asyncComponent(() => import(/* webpackChunkName: "ScatterReact" */'./EchartsDemo/ScatterReact'))  //散点图组件
// const MapReact = asyncComponent(() => import(/* webpackChunkName: "MapReact" */'./EchartsDemo/MapReact'))  //地图组件
// const RadarReact = asyncComponent(() => import(/* webpackChunkName: "RadarReact" */'./EchartsDemo/RadarReact')) //雷达图组件
// const CandlestickReact = asyncComponent(() => import(/* webpackChunkName: "CandlestickReact" */'./EchartsDemo/CandlestickReact')) //k线图组件

const BarChart = asyncComponent(() => import(/* webpackChunkName: "Pie" */'../component/chart/bar'))

export const dRoutes = [
{
  title:"柱状显示",
  path: '/barchart',
  exact: true,
  render: props => < BarChart {...props} />
},
{
  title:"统计报表",
  path: '/counter',
  exact: true,
  render: props => < Counter {...props} />
}];
