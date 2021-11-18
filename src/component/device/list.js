import React, { useState } from "react";
import { Modal, Button, Table, Avatar, Space } from "antd";
import { useModalVisible } from '../common/modal';

import ComInput from '../common/bipt'
import BaseSelect from '../common/bslt'
import CNF from '../../config'

import stl from './index.css'

const DeviceTable = (props) => {

  let data = props.list;

  const { visible, hideModal, openModal } = useModalVisible();

  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  const [dve, setDve] = useState({id:"", name:"",type:""});

  const updateField = e => {
    setDve({
      ...dve,
      [e.target.name]: e.target.value
    });
  };

  const emptyField = e => {
    setDve({
      ...dve,
      [e.target.name]: ''
    });
  };


  const [flag, setFlag] = useState(null);


  const popItem = (action, record) =>{
      // 1-新增，2-修改

      let tmp = record || {}
      tmp.modifyFlag = action;
      setFlag(tmp);

      openModal();
  }

  const handleOk = () =>{
      hideModal()
  }

  const columns = [
    {
      key: "name",
      title: "所属人",
      dataIndex: "name"
    },{
      key: "title",
      title: "商品名称",
      dataIndex: "title"
    },
    {
      key: "price",
      title: "商品价格",
      dataIndex: "price",
      render: price => `¥ ${parseFloat(price).toFixed(2)}`
    },
    {
      key: "id",
      title: "商品库存",
      dataIndex: "stock"
    },{
      key: 'id',
      title: '操作',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => popItem("2",record)}>编辑</a>
          <a onClick={() => popItem("3",record)}>删除</a>
        </Space>
      ),
    }
  ];


  return (
    <>
      <Button onClick={ ()=>{ popItem("1"); } } type="primary">创建</Button>
      <Table
        loading={false}
        dataSource={data}
        columns={columns}
        bordered
        pagination={{
          pageSize,
          current: pageNo,
          total:data.length,//total
          onChange: (pageNo, pageSize) => {
            setPageNo(pageNo);
            setPageSize(pageSize);
          }
        }}
      />
      <Modal
        title={"添加设备"}
        visible={visible}
        onOk={handleOk}
        onCancel={hideModal} >
        <div className={stl.deviceMol}>
          <div>
            <i>设备id：</i>
            <ComInput
              limit={ CNF.IPTLIT.namec }
              prefix={null}
              placeholder={"设备id"}
              value={ dve.name }
              name={ "tname" }
              clear = { emptyField }
              update={ updateField } />
          </div>
          <div>
            <i>球场名称：</i>
            <BaseSelect type={ CNF.DICT.tname } item={ dve } setItem={setDve} name={"tname"} />
          </div>
          <div>
            <i>设备类型：</i>
            <BaseSelect type={ CNF.DICT.tname } item={ dve } setItem={setDve} name={"tname"} />
          </div>
        </div>

      </Modal>
    </>
  );

};

export default DeviceTable;
