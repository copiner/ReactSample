import React, { useState } from "react";
import { Modal,Empty } from 'antd';

import { useModalVisible } from '../common/modal';
import loadable from "@loadable/component";
import stl from './index.css'
const Crop = loadable((props) => import(/* webpackChunkName: "record" */'../common/copper'));

function Info(props) {
  //console.log(props)

  let initatom = { name: "", mobile: "", img: "" };

  const [info, setInfo] = useState(initatom);

  const initMod = {
    mod1:true,
    mod2:true,
    mod3:true
  }

  const [mod, setMod] = useState(initMod);

  const { visible, hideModal, openModal } = useModalVisible();

  const modifyItem = e => {
    setMod({
      ...mod,
      [e.target.name]: !mod[e.target.name]
    });

  }

  const updateField = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };

  return (
      <div className={stl.homeInfo}>
        <div className={stl.info}>
          <h3>用户信息</h3>
          <label>
            <span>证件类型：</span>
            <span>{"身份证"}</span>
          </label>
          <label>
            <span>证件号码：</span>
            <span>{"330103200812281373"}</span>
          </label>
          <label>
            <span>姓名：</span>
            <span>{mod.mod1?"周杰伦":<input type="text" name="name" value={info.name} onChange={updateField} />}</span>
            <a name={"mod1"} onClick={modifyItem}>{mod.mod1?"修改":"保存"}</a>
          </label>
          <label>
            <span>性别：</span>
            <span>{"男"}</span>
          </label>
          <label>
            <span>手机号：</span>
            <span>{mod.mod2?"18658563053":<input type="text" name="mobile"  value={info.mobile} onChange={updateField} />}</span>
            <a name={"mod2"} onClick={modifyItem}>{mod.mod2?"修改":"保存"}</a>
          </label>
          <label>
            <span>卡类型：</span>
            <span>{"普通卡"}</span>
          </label>
          <label>
            <span>市民卡号：</span>
            <span>{"8665956363"}</span>
          </label>
          <label>
            <span>球场IC卡号：</span>
            <span>{"球场IC卡号"}</span>
          </label>
          <label>
            <span>办卡费用：</span>
            <span>{"40.0元"}</span>
          </label>
          <label>
            <span>卡状态：</span>
            <span>{"已办理"}</span>
          </label>
          <label>
            <span>当前有效期：</span>
            <span>{"20200130"}</span>
          </label>
        </div>
        <div className={stl.pic}>
          <div className={stl.photo}></div>
          <div className={stl.photoSit}><a name={"mod3"} onClick={openModal}>修改照片</a></div>
        </div>
        <Modal
          className={stl.cropModal}
          visible={visible}
          footer={null}
          onCancel={hideModal} >
          <Crop hideM={hideModal} setPic={setInfo}/>
        </Modal>
      </div>

  );
}

export default Info;
