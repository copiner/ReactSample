import React, { useState,useEffect,useCallback } from "react";
import { Table, Avatar } from "antd";

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
  },
  {
    title: "创建时间",
    key: "createTime",
    dataIndex: "createTime"
  },
  {
    title: "更新时间",
    key: "updateTime",
    dataIndex: "updateTime"
  }
];

const GoodsTable = (props) => {
  console.log(props)

  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  // const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    props.userAct.getUsers()
  },[])

  let {data, loading} = props.userList
  let total = data.length;
  return (
    <>
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
          }
        }}
      />
    </>
  );

};

export default GoodsTable;
