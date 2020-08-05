/*
  数字与字母组合输入框
*/
import React from 'react';
import { Input, message } from 'antd';

function BaseInput(props) {
  const infov = /^[a-zA-z\u4e00-\u9fa5]{2,30}$/;

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

export default BaseInput;
