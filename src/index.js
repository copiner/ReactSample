'use strict';

import '../public/index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from './container';

import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

const store = configureStore();

render(
    <LocaleProvider locale={zh_CN}>
      <Provider store={store}>
        <App />
      </Provider>
    </LocaleProvider>,
    document.getElementById('app')
);
