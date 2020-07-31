import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, useHistory, useLocation } from 'react-router-dom';
import { Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import UserInput from './itemv'
import PasswordInput from './item'

import stl from './index.css'

function CorrectForm(props) {

  const [correct, setCorrect] = useState({ username: "",password: "",newpassword:"" });

  const printValues = e => {
    e.preventDefault();
    console.log(correct.username, correct.password, correct.newpassword);
    if(correct.username && correct.password && correct.newpassword){
      props.correctSt(correct)
    } else {
      message.info('请输入用户名，密码，新密码！');
    }
  };

  const updateField = e => {
    setCorrect({
      ...correct,
      [e.target.name]: e.target.value
    });
  };

  const emptyField = e => {
    setCorrect({
      ...correct,
      [e.target.name]: ''
    });
  };

  return (
    <div className={stl.loginMain}>
      <div className={stl.loginAccount}>
        <h1>密码修改</h1>
        <p>
          <UserInput
            placeholder={"用户名"}
            prefix={<UserOutlined />}
            value={correct.username}
            name={ "username" }
            clear = { emptyField }
            update={ updateField } />
        </p>
        <p>
          <PasswordInput
            prefix={<LockOutlined />}
            placeholder={ "原密码" }
            name={ "password" }
            value={ correct.password }
            clear = { emptyField }
            update={updateField}/>
        </p>
        <p>
          <PasswordInput
            prefix={<LockOutlined />}
            placeholder={ "新密码" }
            name={ "newpassword" }
            value={ correct.newpassword }
            clear = { emptyField }
            update={ updateField }/>
        </p>
        <p>
          <Button type="primary" block onClick={printValues} >Submit</Button>
        </p>
      </div>
    </div>
  );
}

export default CorrectForm;
