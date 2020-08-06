/*
  限定性 输入框组件
*/
import React from 'react';
import { Input, message } from 'antd';

function ComInput(props) {
  //console.log(props)

  let { limit } = props;

  const validateField = e => {
    if(!limit.reg.test(props.value)){
      message.warning(limit.msg);
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

export default ComInput;
