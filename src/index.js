'use strict';

import '../public/index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './store';
import App from './container';

import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

const store = configureStore();

render(
    <LocaleProvider locale={zh_CN}>
      <Provider store={store}>
        <Router>
         <Route path="/" component={App} />
        </Router>
      </Provider>
    </LocaleProvider>,
    document.getElementById('app')
);
