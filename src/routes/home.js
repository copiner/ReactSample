import React from 'react';
import loadable from "@loadable/component";
import { Spin } from 'antd';

const Hoc = loadable(() => import("../component/Hoc"), {
  fallback: <Spin size="large" />
});

const Acc = loadable(() => import("../component/Account"), {
  fallback: <Spin size="large" />
});

// import Hoc from '../component/Hoc';
// import Acc from '../component/Account';

const Home = () =>{
    return  (
        <h1>Home</h1>
      );
};

export const aRoutes = [{
  title:"交易查询",
  path: '/',
  exact: true,
  render: Home
},{
  title:"交易统计",
  path: '/hoc',
  exact: true,
  render: Hoc
},{
  title:"交易对账",
  path: '/acc',
  exact: true,
  render: Acc
}];
