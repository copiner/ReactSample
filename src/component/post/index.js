import React, { Component } from 'react';
import { Table,Button } from 'antd';
import { listPosts } from '../../actions/posts';

class Post extends Component {
    //挂载阶段
    constructor(props) {
        super(props);
        this.state = { text:'post' };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
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

    listing = () =>{
        this.props.listPosts({id:"007"})
    }

    render() {
        console.log(this.props)
        const postsList = this.props.posts.lists.data;
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
                <Button type="primary" onClick={this.listing}>获取</Button>
                <Table rowKey="id" dataSource={postsList} columns={columns} />
            </div>
        );
    }


    getSnapshotBeforeUpdate(prevProps, prevState) { // 组件更新前触发
      console.log('getSnapshotBeforeUpdate');
      return null;
    }

    componentDidMount() { // 挂载后
      this.props.listPosts({id:"007"});
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

export default Post;
