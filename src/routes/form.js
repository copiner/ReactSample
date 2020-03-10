import loadable from "@loadable/component";
import React, { Component } from 'react';
import { Spin } from 'antd';

//import CForm from '../component/Form';
const CForm = loadable(() => import("../component/Form"), {
  fallback: <Spin size="large" />
});
//import HForm from '../component/Account/form';
const HForm = loadable(() => import("../component/Account/form"), {
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
