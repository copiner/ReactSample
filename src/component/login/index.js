import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, useHistory, useLocation } from 'react-router-dom';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Util from '../../util';
import stl from './index.css'

function LoginForm() {
  const [login, setLogin] = useState({ username: "",password: "" });

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const printValues = e => {
    e.preventDefault();
    // console.log(login.username, login.password);
    console.log(from)
    Util.setLin(true)
    history.push('/');
    //window.location.href= window.location.href;

  };

  const updateField = e => {
    console.log(e.target.name)
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={printValues} className={stl.login}>
      <label>
        Username:
        <Input placeholder="用户名" prefix={<UserOutlined />} value={login.username} name="username" onChange={updateField} />
      </label>
      <label>
        Password:
        <Input.Password
        prefix={<UserOutlined />}
        placeholder="密码"
        value={login.password}
        name="password"
        onChange={updateField}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;

//ReactDOM.render(<LoginForm />, document.getElementById("container"));
