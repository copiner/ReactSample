import React, { useState } from 'react';
import { Radio, Button,Select, Input  } from 'antd';

import Mobile from '../common/itemp'
import BaseInput from '../common/itemb'
import stl from './index.css'

function Deal() {

  let initatom = { type:"", name: "", sex: 1, img: "" };

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
          <select className={stl.selectItem} name="type" onChange={updateField}>
           <option value="jack">Jack</option>
           <option value="lucy">Lucy</option>
           <option value="Yiminghe">yiminghe</option>
         </select>
        </p>

        <p>
          <i>姓名：</i>
          <span className={stl.iptItem}>
            <BaseInput
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
            <Mobile
              prefix={null}
              placeholder={"手机号"}
              value={info.mobile}
              name={ "mobile" }
              clear = { emptyField }
              update={ updateField } />
          </span>
        </p>
        <p><i></i><span className={stl.dealRemark}> {"绑定手机号可享受手机刷码入寺院"}</span></p>
        <p>
          <i>卡类型：</i>
          <Select name="cardtype" defaultValue="lucy" className={stl.selectw} onChange={updateField}>
           <Select.Option value="jack">Jack</Select.Option>
           <Select.Option value="lucy">Lucy</Select.Option>
           <Select.Option value="Yiminghe">yiminghe</Select.Option>
         </Select>
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
