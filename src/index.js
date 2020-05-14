'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './store';
import App from './container';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';

const store = configureStore();

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
