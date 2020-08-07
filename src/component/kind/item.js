import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Select, message } from 'antd';

import ComInput from '../common/bipt'
import BaseSelect from '../common/bslt'
import CodeItem from '../common/code'
import stl from './index.css'

import CNF from '../../config'

function ItemForm(props) {

  console.log(props)

  let flag = props.modifyFlag;

  const [kind, setKind] = useState({ kindname: "",cost: "",need:"",times:"",cardyears:"",codeoper:"",mobile:"",code:""});

  const [codeid, setCodeid] = useState('');

  const printValues = e => {
    e.preventDefault();
    //console.log(correct.username, correct.password, correct.newpassword);
    if(kind.kindname && kind.cost){
      //TODO
    } else {
      message.info('请输入用户名，密码，新密码！');
    }
  };

  const updateField = e => {
    setKind({
      ...kind,
      [e.target.name]: e.target.value
    });
  };

  const emptyField = e => {
    setKind({
      ...kind,
      [e.target.name]: ''
    });
  };

  const fetCodeId = (param) =>{
    console.log(param)
    //TODO 获取codeId,重新获取验证码， 则需传老的验证码
    setCodeid('abc')
  }


  return (
    <div className={stl.kindModal}>
      <p>
      <i><b>*</b>卡类别名称：</i>
        {
          flag == '3'?
          <i>{'测试卡卡'}</i> :
          <ComInput
            limit={ CNF.IPTLIT.namea }
            placeholder={"卡类别名称"}
            prefix={null}
            value={ kind.kindname || "abc" }
            name={ "kindname" }
            clear = { emptyField }
            update={ updateField } />
        }
      </p>
      <p><i><b>*</b>补办成本：</i>
      <ComInput
        limit={ CNF.IPTLIT.mobile }
        prefix={null}
        placeholder={ "补办成本" }
        name={ "cost" }
        value={ kind.cost }
        clear = { emptyField }
        update={ updateField }/>
      </p>
      <p><i><b>*</b>充值费：</i>
      <ComInput
        limit={ CNF.IPTLIT.namea }
        prefix={null}
        placeholder={ "充值费" }
        name={ "need" }
        value={ kind.need }
        clear = { emptyField }
        update={ updateField }/>
      </p>
      <p><i><b>*</b>每景区每天限次：</i>
      <ComInput
        limit={ CNF.IPTLIT.namea }
        prefix={null}
        placeholder={ "每景区每天限次" }
        name={ "times" }
        value={ kind.times }
        clear = { emptyField }
        update={ updateField }/>
      </p>
      <p><i><b>*</b>有效时长：</i>
        <BaseSelect type={ CNF.DICT.cardyears } item={ kind } setItem={setKind} name={"cardyears"} />
      </p>
      <p><i><b>*</b>操作员：</i>
        <BaseSelect type={ CNF.DICT.codeoper } item={ kind } setItem={setKind} name={"codeoper"} />
      </p>
      <p>
        <i><b>*</b>操作员手机号：</i>
        <i>{"15811112222"}</i>
      </p>
      <p><i><b>*</b>确认验证码：</i>
      <ComInput
        limit={ CNF.IPTLIT.remark }
        prefix={null}
        placeholder={ "请输入验证码" }
        name={ "code" }
        value={ kind.code }
        clear = { emptyField }
        update={ updateField }/>
        <Button type="primary" onClick={()=>{fetCodeId(codeid)}}>获取验证码</Button>
      </p>
      <p>
        <i></i>
        <CodeItem codeid={codeid} setCodeid={setCodeid}  />
      </p>
      <p>操作员登录市民卡APP扫码获取二维码，以确认修改。验证码有效期为5分钟</p>
    </div>
  );
}

export default ItemForm;
