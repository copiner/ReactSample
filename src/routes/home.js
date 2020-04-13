import React from 'react';
import loadable from "@loadable/component";
import { Spin } from 'antd';

const Hoc = loadable(() => import("../component/hoc"), {
  fallback: <Spin size="large" />
});

const Acc = loadable(() => import("../component/account"), {
  fallback: <Spin size="large" />
});

// import Hoc from '../component/hoc';
// import Acc from '../component/account';

const PButton = loadable(() => import("../component/ref"), {
  fallback: <Spin size="large" />
});


const ForRef = loadable(() => import("../component/ref/app"), {
  fallback: <Spin size="large" />
});

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
},{
  title:"交易按钮",
  path: '/pbutton',
  exact: true,
  render: PButton
},{
  title:"交易输入",
  path: '/forref',
  exact: true,
  render: ForRef
}];
