import React, { useState } from "react";
import { Button, Divider, message } from 'antd';

import ComInput from '../common/bipt'
import BaseSelect from '../common/bslt'
import DeviceTable from './list'
import stl from './index.css'

import CNF from '../../config'

function Device(props) {
    console.log(props)
  let initatom = { tname: "",ttype: "",tid:"" };

  const [dee, setDee] = useState(initatom);

  const printValues = e => {
    props.listDve()
  };

  const displayValues = () =>{
      //reflect
      props.listedDve(props.dispatch,"is not redux-thunk")
  };

  const updateField = e => {
    setDee({
      ...dee,
      [e.target.name]: e.target.value
    });
  };

  const emptyField = e => {
    setDee({
      ...dee,
      [e.target.name]: ''
    });
  };

  const resetField = e => {
    setDee(initatom);
  };


  return (
    <div className={stl.device}>
      <label>名称：</label>
      {/*强制命名统一*/}
      <BaseSelect type={ CNF.DICT.tname } item={ dee } setItem={setDee} name={"tname"} />

      <label>名称：</label>
      {/*强制命名统一*/}
      <BaseSelect type={ CNF.DICT.tname } item={ dee } setItem={setDee} name={"tname"} />

      <label>设备ID：</label>
      {/*强制命名统一*/}
      <ComInput
        limit={ CNF.IPTLIT.namea }
        prefix={null}
        placeholder={"设备ID"}
        value={dee.tid}
        name={ "tid" }
        clear = { emptyField }
        update={ updateField } />
      <Button type="primary" size={"default"} onClick={ printValues } >查询</Button>
      <Button type="primary" size={"default"} onClick={ displayValues } >获取</Button>
      <Button onClick={resetField}>清空</Button>

      <hr />
      <div>
        <DeviceTable list={ props.device.list && props.device.list.data ? props.device.list.data : [] }/>
      </div>
    </div>
  );
}

export default Device
