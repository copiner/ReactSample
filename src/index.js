'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './store';
import App from './container';

import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const store = configureStore();

render(
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router>
         <Route path="/" component={App} />
        </Router>
      </Provider>
    </ConfigProvider>,
    document.getElementById('root')
);
