import React, { useState,useEffect } from "react";
import { Table, Avatar, Button, Space, Modal } from "antd";

const AllowList = (props) => {
  // console.log(props)

  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  let {data, loading} = props.allow;
  let {list, total} = data;

  const recordItem = (record) =>{
      console.log(record)
      Modal.confirm({
        title: 'Do you Want to delete these items?',
        content: 'Some descriptions',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
  }

  const columns = [
    {
      title: "商品id",
      key: "id",
      dataIndex: "id"
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
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>{record.id}</a>
          <a onClick={() => recordItem(record)}>删除</a>
        </Space>
      ),
    }
  ];

  return (
    <>
      <Table
        loading={loading}
        dataSource={list}
        columns={columns}
        bordered
        pagination={{
          pageSize,
          current: pageNo,
          total,
          onChange: (pageNo, pageSize) => {
            setPageNo(pageNo);
            setPageSize(pageSize);
          }
        }}
      />
    </>
  );

};

export default AllowList;
