import React, { useState } from 'react';
import { Radio, Button,Select, Input  } from 'antd';

import ComInput from '../common/bipt'
import BaseSelect from '../common/bslt'
import stl from './index.css'
import CNF from '../../config'

function Deal() {

  let initatom = { type:"", name: "", sex: 1, mobile:"", cardtype:"", pic: "" };

  const [info, setInfo] = useState(initatom);

  const updateField = e => {
    console.log(e.target.value)
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };

  const emptyField = e => {
    setInfo({
      ...info,
      [e.target.name]: ''
    });
  };

  return (
    <div className={stl.deal}>
      <div className={stl.infoDeal}>
        <p>
          <i>证件类型：</i>
          <BaseSelect type={ CNF.DICT.certtype } item={ info } setItem={setInfo} name={"type"} />
        </p>
        <p>
          <i>姓名：</i>
          <span className={stl.iptItem}>
            <ComInput
              limit={ CNF.IPTLIT.nameb }
              prefix={null}
              placeholder={"姓名"}
              value={info.name}
              name={ "name" }
              clear = { emptyField }
              update={ updateField } />
          </span>
        </p>

        <p>
          <i>性别：</i>
          <Radio.Group name="sex" onChange={updateField} value={info.sex}>
            <Radio value={1}>男</Radio>
            <Radio value={2}>女</Radio>
          </Radio.Group>
        </p>
        <p>
          <i>手机号：</i>
          <span className={stl.iptItem}>
            <ComInput
              limit={ CNF.IPTLIT.mobile }
              prefix={null}
              placeholder={"手机号"}
              value={info.mobile}
              name={ "mobile" }
              clear = { emptyField }
              update={ updateField } />
          </span>
        </p>
        <p><i></i><span className={stl.dealRemark}> {"绑定手机号可享受手机刷码入球场"}</span></p>
        <p>
          <i>卡类型：</i>
          <BaseSelect type={ CNF.DICT.cardtype } item={ info } setItem={setInfo} name={"cardtype"} />
        </p>
        <p>
          <i>当前有效期：</i>
          <span>{"2019-01-23"}</span>
        </p>
        <p>
          <i>新有效期：</i>
          <span>{"2019-01-23"}</span>
        </p>
        <p>
          <i>办卡费用：</i>
          <span>{"40.0元"}</span>
        </p>
        <div className={stl.cBtn}>
          <Button type="primary">续费开通</Button>
        </div>
      </div>
      <div className={stl.pic}>
        <div className={stl.photo}></div>
        <div className={stl.photoSit}><a>修改照片</a></div>
      </div>
    </div>
  );
}

export default Deal
