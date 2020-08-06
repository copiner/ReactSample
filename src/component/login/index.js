import React, { useState } from "react";
import { Input, Button, Tabs, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import QRCode from 'qrcode.react';
import MD5 from 'crypto-js/md5'

import ComInput from '../common/bipt'
import CNF from '../../config'

import stl from './index.css'

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../../actions/login';

function LoginForm(props) {

  const [login, setLogin] = useState({ username: "",password: "" });

  const printValues = e => {
    e.preventDefault();
    console.log(MD5("abc").toString());
    if(login.username && login.password){
      props.loginSt(login)
    } else {
      message.info('请输入用户名和密码！');
    }

  };

  const updateField = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const emptyField = e => {
    setLogin({
      ...login,
      [e.target.name]: ''
    });
  };

  const tabkey = (key) => {
    console.log(key);
    //TODO 轮询，查看登陆状态
  }

  return (
    <div className={stl.loginMain}>
      <Tabs defaultActiveKey="1" onChange={tabkey}>
        <Tabs.TabPane tab="账密登陆" key="1">
          <div className={stl.loginAccount}>
            <p>
              <ComInput
                limit={ CNF.IPTLIT.username }
                prefix={<UserOutlined />}
                placeholder={"用户名"}
                value={login.username}
                name={ "username" }
                clear = { emptyField }
                update={ updateField } />
            </p>
            <p>
              <ComInput
                limit={ CNF.IPTLIT.password }
                prefix={<LockOutlined />}
                placeholder={ "密码" }
                name={ "password" }
                value={ login.password }
                clear = { emptyField }
                update={ updateField }/>
            </p>
            <p>
              <Button type="primary" block onClick={printValues} >Submit</Button>
            </p>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="扫码登陆" key="2">
          <div className={stl.loginCode}>
            <QRCode size={256} value="react" />
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default LoginForm;
