/*
  二维码逻辑组件
*/
import React, { useState, useEffect } from "react";
import { Input, Button, Tabs, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import QRCode from 'qrcode.react';



function CodeItem(props) {
  //console.log(props)


  useEffect(() => {
     (async () => {
       //const rst =  await DictServer.initDict(type)
       //console.log(rst.data)
       props.setCodeid("react");
     })()
  }, []);


  return (
    <QRCode size={128} value={props.codeid} />
  )

}

export default CodeItem;
