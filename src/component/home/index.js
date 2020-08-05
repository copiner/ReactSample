import React, { useState } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { Button, Divider, message } from 'antd';

import loadable from "@loadable/component";

const Detail = loadable((props) => import(/* webpackChunkName: "detail" */'./detail'));

import InfoInput from './item'
import stl from './index.css'

function Home(props){

  let initatom = { cardno: "",idno: "" };

  const [dtl, setDtl] = useState(initatom);

  const printValues = e => {
    e.preventDefault();
    props.hact.infoSt()
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
      <div className={stl.detailQy}>
        <label>
          <span>IC卡面号：</span>
          <InfoInput
            prefix={null}
            placeholder={"IC卡面号"}
            value={dtl.cardno}
            name={ "cardno" }
            clear = { emptyField }
            update={ updateField } />
          <Button type="primary" size={"default"} onClick={ printValues } >读卡</Button>
        </label>
        <label>
          <span>身份证号：</span>
          <InfoInput
            prefix={null}
            placeholder={"身份证"}
            value={ dtl.idno }
            name={ "idno" }
            clear = { emptyField }
            update={ updateField } />
        </label>
        <Button type="primary" size={"default"} onClick={ printValues } ><Link to="/sail/detail">查询</Link></Button>
        <Button onClick={resetField}>清空</Button>
      </div>
      <Divider />
      <div className={stl.homeDetail}>
        {<Detail hAct={props.hact} detail={ props.home } />}
      </div>
    </>
  );

}

export default Home
