import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button,Select, message } from 'antd';

import ComInput from '../common/bipt'
import BaseSelect from '../common/bslt'
import stl from './index.css'
import cropPic from './cropper.png'

import CNF from '../../config'

function CreateForm(props) {

  const [correct, setCorrect] = useState({ username: "",password: "",newpassword:"" });

  const printValues = e => {
    e.preventDefault();
    console.log(correct.username, correct.password, correct.newpassword);
    if(correct.username && correct.password && correct.newpassword){

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
    <div className={stl.amodal}>
      <p>
      <i>姓名：</i>
      <ComInput
        limit={ CNF.IPTLIT.namea }
        placeholder={"姓名"}
        prefix={null}
        value={correct.username}
        name={ "username" }
        clear = { emptyField }
        update={ updateField } />
      </p>
      <p><i>手机号：</i>
      <ComInput
        limit={ CNF.IPTLIT.mobile }
        prefix={null}
        placeholder={ "手机号" }
        name={ "password" }
        value={ correct.password }
        clear = { emptyField }
        update={updateField}/>
      </p>
      <p><i>证件号：</i>
      <ComInput
        limit={ CNF.IPTLIT.namea }
        prefix={null}
        placeholder={ "证件号" }
        name={ "newpassword" }
        value={ correct.newpassword }
        clear = { emptyField }
        update={ updateField }/>
      </p>
      <p><i>证件类型：</i>
        <BaseSelect type={ CNF.DICT.tname } item={ correct } setItem={setCorrect} name={"cardtype"} />
      </p>
      <p><i>证件备注：</i>
      <ComInput
        limit={ CNF.IPTLIT.remark }
        prefix={null}
        placeholder={ "证件备注" }
        name={ "newpassword" }
        value={ correct.newpassword }
        clear = { emptyField }
        update={ updateField }/>
      </p>
      <p><i>头像：</i>
        <img src={cropPic} className={stl.uIcon} />
      </p>
      <p><i>备注：</i>
      <ComInput
        limit={ CNF.IPTLIT.remark }
        prefix={null}
        placeholder={ "备注" }
        name={ "newpassword" }
        value={ correct.newpassword }
        clear = { emptyField }
        update={ updateField }/>
      </p>
    </div>
  );
}

export default CreateForm;
