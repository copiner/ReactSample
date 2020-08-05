import React, { useState, useEffect } from 'react';
import {Table, Button, Divider,Space,Modal, message  } from 'antd';

const Record = (props) => {
  console.log(props)

  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
     props.ract.recordSt('ctm')
   },[]);

  let {list, total} = props.record.data;
  list = list || [];

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
      key: "name",
      dataIndex: "name"
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
          <a onClick={() => recordItem(record)}>补打</a>
        </Space>
      )
    }
  ];

  return (
    <>
      <Table
        loading={false}
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
            props.ract.recordSt({pageNo,pageSize})//分页请求
          }
        }}
      />
    </>
  );

};

export default Record
