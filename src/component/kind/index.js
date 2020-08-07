import React, { useState,useEffect,useCallback } from "react";
import { Modal, Button, Table, Avatar, Space } from "antd";
import { useModalVisible } from '../common/modal';

import Item from "./item";

const KindTable = (props) => {
  //console.log(props)
  const { visible, hideModal, openModal } = useModalVisible();

  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    props.kindAct.kindSt()
  },[])

  let {data, loading} = props.kindList
  let total = data.length;

  const popItem = (action, record) =>{
      //modifyFlag 1-新增，2-修改，3-删除
      console.log(record)

      let tmp = record || {}
      tmp.modifyFlag = action;
      setFlag(tmp);

      // Modal.confirm({
      //   title: 'Do you Want to delete these items?',
      //   content: 'Some descriptions',
      //   onOk() {
      //     console.log('OK');
      //   },
      //   onCancel() {
      //     console.log('Cancel');
      //   },
      // });

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
      <hr />
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
            props.kindAct.kindSt({pageNo, pageSize})
          }
        }}
      />
      <Modal
        title={"创建修改卡类别"}
        visible={visible}
        onOk={handleOk}
        onCancel={hideModal} >
        <Item { ...flag }/>
      </Modal>
    </>
  );

};

export default KindTable;
