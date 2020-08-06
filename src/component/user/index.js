import React, { useState,useEffect,useCallback } from "react";
import { Button, Table, Avatar, Space } from "antd";

const GoodsTable = (props) => {
  //console.log(props)

  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    props.userAct.getUsers()
  },[])

  let {data, loading} = props.userList
  let total = data.length;

  const recordItem = (record) =>{
      console.log(record)
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
  }

  const columns = [
    {
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
          <a onClick={() => recordItem(record)}>编辑</a>
          <a onClick={() => recordItem(record)}>删除</a>
        </Space>
      ),
    }
  ];



  return (
    <>
      <Button type="primary">创建</Button>
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
            props.userAct.getUsers({pageNo, pageSize})
          }
        }}
      />
    </>
  );

};

export default GoodsTable;
