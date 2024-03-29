'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

import configureStore from './store';
const store = configureStore();
//打印store 查看下面方法
// console.log(store)
// console.log(Object.getPrototypeOf(store))

import App from './container';

let render = () => {
  ReactDOM.render(
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Router>
           <App />
          </Router>
        </Provider>
      </ConfigProvider>,
      document.getElementById('root')
  );
}

render();

if(module.hot) {
  module.hot.accept(['./container'], () => {
    render()
  })
}

//reflect

let bl = "ob"
let cl = "oc"
let dl = "od"

const al = (bl,cl,dl) =>{
    return bl + cl + dl
}

function arrowhead(ppi="ppi"){

    return (cl, dl) => al => bl => {
        return al(bl,cl,dl)+ppi
    }
}

let rr = arrowhead()("ki",dl)(al)(bl);
console.log(rr)
