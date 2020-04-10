import React, { Component } from 'react';
//异步加载组件
import AsyncComponent from '../util/loadable';
const Counter = AsyncComponent(() => import('../component/counter'));
//import Alert from '../component/alert';

//import { pieOption, barOption, lineOption, scatterOption, mapOption, radarOption, candlestickOption } from './optionConfig/options'
//const Pie = asyncComponent(() => import(/* webpackChunkName: "Pie" */'../component/chart/pie'))  //饼图组件
const Heatmap = asyncComponent(() => import(/* webpackChunkName: "Pie" */'../component/chart/heatmap'))  //饼图组件
// const BarReact = asyncComponent(() => import(/* webpackChunkName: "BarReact" */'./EchartsDemo/BarReact')) //柱状图组件
// const LineReact = asyncComponent(() => import(/* webpackChunkName: "LineReact" */'./EchartsDemo/LineReact'))  //折线图组件
// const ScatterReact = asyncComponent(() => import(/* webpackChunkName: "ScatterReact" */'./EchartsDemo/ScatterReact'))  //散点图组件
// const MapReact = asyncComponent(() => import(/* webpackChunkName: "MapReact" */'./EchartsDemo/MapReact'))  //地图组件
// const RadarReact = asyncComponent(() => import(/* webpackChunkName: "RadarReact" */'./EchartsDemo/RadarReact')) //雷达图组件
// const CandlestickReact = asyncComponent(() => import(/* webpackChunkName: "CandlestickReact" */'./EchartsDemo/CandlestickReact')) //k线图组件


export const dRoutes = [
//   {
//   title:"凭证查看",
//   path: '/alert',
//   exact: true,
//   render: props => < Alert {...props} />
// },
{
  title:"热力显示",
  path: '/heatmap',
  exact: true,
  render: props => < Heatmap {...props} />
},
{
  title:"统计报表",
  path: '/counter',
  exact: true,
  render: props => < Counter {...props} />
}];
