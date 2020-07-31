/*
  1-20位数字与字母组合输入框
*/
import React from 'react';
import { Input, message } from 'antd';

function UserInput(props) {
  //console.log(props)
  const userv = /^[0-9A-Za-z]{1,20}$/;

  const validateField = e => {
    if(!userv.test(props.value)){
      message.warning('用户名要求数字字母不能超过位20位');
      props.clear(e);
    }
  };


  return (
    <>
      <Input
        prefix={ props.prefix }
        placeholder = { props.placeholder }
        name={ props.name }
        value={ props.value }
        onBlur={ validateField }
        onChange={ props.update }
        />
    </>
  );
}

export default UserInput;
