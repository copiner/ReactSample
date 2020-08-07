import React, { useState } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { Button, Divider, message } from 'antd';

import TempleTable from './list'
import ComInput from '../common/bipt'
import CNF from '../../config'
import stl from '../common/index.css'

function Temple(props){

  //console.log(props)

  let initatom = { tname: "",tid: "" };

  const [dtl, setDtl] = useState(initatom);

  const printValues = e => {
    e.preventDefault();
    props.templeAct.templeSt(dtl)
  };

  const updateField = e => {
    setDtl({
      ...dtl,
      [e.target.name]: e.target.value
    });
  };

  const emptyField = e => {
    setDtl({
      ...dtl,
      [e.target.name]: ''
    });
  };

  const resetField = e => {
    setDtl(initatom);
  };

  return (
    <>
      <div className={stl.comQuery}>
        <label>
          <span>球场名称：</span>
          <ComInput
            limit={ CNF.IPTLIT.namec }
            prefix={null}
            placeholder={"球场名称"}
            value={ dtl.tname }
            name={ "tname" }
            clear = { emptyField }
            update={ updateField } />
        </label>
        <Button type="primary" size={"default"} onClick={ printValues } >查询</Button>
        <Button onClick={resetField}>清空</Button>
      </div>
      <hr />
      <div>
        <TempleTable {...props.templeList} {...props.templeAct} />
      </div>
    </>
  );

}

export default Temple
