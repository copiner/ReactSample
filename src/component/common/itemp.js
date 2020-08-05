/*
  手机号输入框
*/
import React from 'react';
import { Input, message } from 'antd';

function InfoInput(props) {
  //console.log(props)
  const infov = /^[\d]{11}$/;

  const validateField = e => {
    if(!infov.test(props.value)){
      message.warning('输入值不合法！');
      props.clear(e);
    }
  };


  return (
      <Input
        prefix={ props.prefix }
        placeholder = { props.placeholder }
        name={ props.name }
        value={ props.value }
        onBlur={ validateField }
        onChange={ props.update }
        />
  );
}

export default InfoInput;
