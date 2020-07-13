'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './container';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

import configureStore from './store';
const store = configureStore();
moment.locale('zh-cn');

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
