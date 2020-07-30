import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, useHistory, useLocation } from 'react-router-dom';
import { Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import stl from './index.css'

function CorrectForm(props) {

  const [correct, setCorrect] = useState({ username: "",password: "",newpassword:"" });

  const printValues = e => {
    e.preventDefault();
    //console.log(correct.username, correct.password);
    props.correctSt(correct)
  };

  const updateField = e => {
    setCorrect({
      ...correct,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={stl.login}>
      <h1>密码修改</h1>
      <p>
        <Input placeholder="用户名" prefix={<UserOutlined />} value={correct.username} name="username" onChange={updateField} />
      </p>
      <p>
        <Input.Password
        prefix={<LockOutlined />}
        placeholder="原密码"
        value={correct.password}
        name="password"
        onChange={updateField}
        />
      </p>
      <p>
        <Input.Password
        prefix={<LockOutlined />}
        placeholder="新密码"
        value={correct.newpassword}
        name="newpassword"
        onChange={updateField}
        />
      </p>
      <p>
        <Button type="primary" block onClick={printValues} >Submit</Button>
      </p>
    </div>
  );
}

export default CorrectForm;
