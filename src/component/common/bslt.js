/*
  数据字典加载 下拉框 base select
*/
import React,{ useEffect, useState } from 'react';

import DictServer from '../../services/dict';

import { Select, message } from 'antd';

import stl from './index.css'

function BaseSelect(props) {
  //console.log(props)

  /*
  type:数据字典id，
  item:props参数集合
  name:选择框对应参数名字
  */

  let { type, item, name } = props

  const [data, setData] = useState([]);

  //useEffect需要返回一个清除函数或者无返回值
  useEffect(() => {
     (async () => {
       const rst =  await DictServer.initDict(type)
       //console.log(rst.data)
       setData(rst.data);
     })()
  }, [type]);

  // useEffect(() => {
  //    const rst =  DictServer.initDict(type);
  //    console.log(rst.data)
  //    setData(rst.data);
  //    // return () => {
  //    //   setData([]);
  //    // };
  // }, []);

  const updateField = (v,o,name) =>{
    // console.log(v)
    // console.log(o)
    // console.log(name)
    props.setItem({
      ...item,
      [name]: v
    })
  }


  return (
    <Select
      className={stl.baseSelect}
      onChange={ (v,o)=>{updateField(v,o,name)} }
      value={item[name] ? item[name] : (data[0]?data[0].key:"")}>
    {
      data.map((item, idx)=>{
        return <Select.Option key={idx} value={item.key}>{item.value}</Select.Option>
      })
    }
   </Select>
  );
}

export default BaseSelect;
