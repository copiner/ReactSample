import React, { useState } from "react";
import { Button, message } from 'antd';

import InfoInput from './item'
import stl from './index.css'

function Detail(props) {

  let initatom = { name: "",idno: "" };

  const [dtl, setDtl] = useState(initatom);

  const printValues = e => {
    e.preventDefault();
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
      <div className={stl.detailQy}>
        <span>
          <InfoInput
            prefix={null}
            placeholder={"用户名"}
            value={dtl.name}
            name={ "name" }
            clear = { emptyField }
            update={ updateField } />
        </span>
        <span>
          <InfoInput
            prefix={null}
            placeholder={"身份证"}
            value={ dtl.idno }
            name={ "idno" }
            clear = { emptyField }
            update={ updateField } />
        </span>
        <span>
          <Button type="primary" size={"default"} onClick={ printValues } >查询</Button>
        </span>
        <span>
          <Button onClick={resetField}>清空</Button>
        </span>
        <div className={stl.detailCont}>
          查询结果
        </div>
      </div>
    );
}

export default Detail;
