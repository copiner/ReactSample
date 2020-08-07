import React, { useState } from "react";
import { Modal, Button, Table, Avatar, Space } from "antd";
import { useModalVisible } from '../common/modal';

import ComInput from '../common/bipt'
import CNF from '../../config'

import stl from './index.css'

const TempleTable = (props) => {

  let data = props.data.list, loading = props.loading;

  let total = props.data.total;

  console.log(props)
  const { visible, hideModal, openModal } = useModalVisible();

  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  const [tmp, setTmp] = useState({id:"", name:""});

  const updateField = e => {
    setTmp({
      ...tmp,
      [e.target.name]: e.target.value
    });
  };

  const emptyField = e => {
    setTmp({
      ...tmp,
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
        </Space>
      ),
    }
  ];


  return (
    <>
      <Button onClick={ ()=>{ popItem("1"); }}type="primary">创建</Button>
      <Table
        loading={loading}
        dataSource={data}
        columns={columns}
        bordered
        pagination={{
          pageSize,
          current: pageNo,
          total,
          onChange: (pageNo, pageSize) => {
            setPageNo(pageNo);
            setPageSize(pageSize);
            props.templeSt({pageNo, pageSize})
          }
        }}
      />
      <Modal
        title={"球场"}
        visible={visible}
        onOk={handleOk}
        onCancel={hideModal} >
        <div className={stl.templeMol}>

          <p>
            <i>球场id：</i>
            <i>{"875645654"}</i>
          </p>
          <p>
            <i>球场名称：</i>
            <ComInput
              limit={ CNF.IPTLIT.namec }
              prefix={null}
              placeholder={"球场名称"}
              value={ tmp.name }
              name={ "tname" }
              clear = { emptyField }
              update={ updateField } />
          </p>
        </div>

      </Modal>
    </>
  );

};

export default TempleTable;
