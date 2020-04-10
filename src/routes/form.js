import loadable from "@loadable/component";
import React, { Component } from 'react';
import { Spin } from 'antd';

//import CForm from '../component/form';
const CForm = loadable(() => import("../component/form"), {
  fallback: <Spin size="large" />
});
//import HForm from '../component/account/form';
const HForm = loadable(() => import("../component/account/form"), {
  fallback: <Spin size="large" />
});


export const bRoutes = [{
  title:"交易明细",
  path: '/cform',
  exact: true,
  render: props => < CForm {...props} />
},{
  title:"电子凭证",
  path: '/hform',
  exact: true,
  render: props => < HForm {...props} />
}];
