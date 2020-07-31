import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function Code() {
  // 声明一个叫 "count" 的 state 变量
  // const [count, setCount] = useState(0);

  return (
    <>
      <QRCode
        size={256} 
        value="react" />
    </>
  );
}

export default Code;
