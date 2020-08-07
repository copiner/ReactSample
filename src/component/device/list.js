import React, { useState } from "react";
import { Modal, Button, Table, Avatar, Space } from "antd";
import { useModalVisible } from '../common/modal';

import ComInput from '../common/bipt'
import BaseSelect from '../common/bslt'
import CNF from '../../config'

import stl from './index.css'

const DeviceTable = (props) => {

  // let data = props.data.list, loading = props.loading;
  // let total = props.data.total;

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
      console.log(record)

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
      title: "id",
      key: "id",
      dataIndex: "id"
    },{
      title: "商品名称",
      key: "name",
      dataIndex: "name",
      render: (name, item) => (
        <React.Fragment>
          <Avatar src={item.img} />
           &nbsp;
          {name}
        </React.Fragment>
      )
    },
    {
      title: "商品价格",
      key: "price",
      dataIndex: "price",
      render: price => `¥ ${parseFloat(price).toFixed(2)}`
    },
    {
      title: "商品库存",
      key: "stock",
      dataIndex: "stock"
    },{
      title: '操作',
      key: 'action',
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
      <Button onClick={ ()=>{ popItem("1"); }}type="primary">创建</Button>
      <Table
        loading={false}
        dataSource={[]}
        columns={columns}
        bordered
        pagination={{
          pageSize,
          current: pageNo,
          total:100,//total
          onChange: (pageNo, pageSize) => {
            setPageNo(pageNo);
            setPageSize(pageSize);
            //props.templeSt({pageNo, pageSize})
          }
        }}
      />
      <Modal
        title={"添加设备"}
        visible={visible}
        onOk={handleOk}
        onCancel={hideModal} >
        <div className={stl.deviceMol}>
          <p>
            <i>设备id：</i>
            <ComInput
              limit={ CNF.IPTLIT.namec }
              prefix={null}
              placeholder={"设备id"}
              value={ dve.name }
              name={ "tname" }
              clear = { emptyField }
              update={ updateField } />
          </p>
          <p>
            <i>球场名称：</i>
            <BaseSelect type={ CNF.DICT.tname } item={ dve } setItem={setDve} name={"tname"} />
          </p>
          <p>
            <i>设备类型：</i>
            <BaseSelect type={ CNF.DICT.tname } item={ dve } setItem={setDve} name={"tname"} />
          </p>
        </div>

      </Modal>
    </>
  );

};

export default DeviceTable;
