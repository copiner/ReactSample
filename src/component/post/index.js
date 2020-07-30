import React, { Component } from 'react';

import { Table } from 'antd';

class PostList extends Component {
    //挂载阶段
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps');
      return null;
    }

    static getDerivedStateFromError(error) {
      console.log('getDerivedStateFromError');
    }

    shouldComponentUpdate(nextProps, nextState) {
      // 组件Props或者state改变时触发，true：更新，false：不更新
      console.log('shouldComponentUpdate');
      return true
    }

    render() {
        const postsList = this.props.postsList.data;
        const columns = [
          {
              title: '编号',
              dataIndex: 'id',
              key: 'id',
          },{
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
          },{
              title: '库存',
              dataIndex: 'stock',
              key: 'stock',
          }
        ];

        return (
            <div>
                <Table rowKey="id" dataSource={postsList} columns={columns} />
            </div>
        );
    }


    getSnapshotBeforeUpdate(prevProps, prevState) { // 组件更新前触发
      console.log('getSnapshotBeforeUpdate');
      return null;
    }

    componentDidMount() { // 挂载后
      this.props.postsAct();
      console.log('componentDidMount');
    }

    componentDidUpdate() { // 组件更新后触发
      console.log('componentDidUpdate');
    }

    componentWillUnmount() { // 组件卸载时触发
      console.log('componentWillUnmount');
    }


    componentDidCatch(error, info) { // 获取到javascript错误
      console.log('componentDidCatch');
    }

}

export default PostList;
