import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';

import { Table } from 'antd';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            str:'wdaonngg'
        };
    }

    static defaultProps = {
      color: 'blue'
    }

    /*
    state = {
      str:"wdaonngg"
    }
    */
    setComponentState = () =>  {
      console.log("setTheState");
      let s = "wdaonngg";
      if (this.state.str === s) {
          s = "wrq";
      }
      this.setState({
          str: s
      });
    }

    forceComponentUpdate = () => {
      console.log("forceItUpdate");
      //默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。
      //如果 render() 方法依赖于其他数据，则可以调用 forceUpdate() 强制让组件重新渲染
      this.forceUpdate();
    }


    static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps')
      return null;
    }


    shouldComponentUpdate(nextProps, nextState) {
      // 组件Props或者state改变时触发，true：更新，false：不更新
      console.log('shouldComponentUpdate');
      return true
    }

    render() {
        const columns = [{
            title: '用户编号',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        }];

        return (
            <div>
                <Table rowKey="id" dataSource={this.props.posts} columns={columns} />
            </div>
        );
    }

    componentDidMount() { // 挂载后
      console.log('componentDidMount');
      this.props.dispatch(Begin_GET_POSTS());
    }

    getSnapshotBeforeUpdate(prevProps, prevState) { // 组件更新前触发
      console.log('getSnapshotBeforeUpdate');
      return null;
    }

    componentDidUpdate() { // 组件更新后触发
      console.log('componentDidUpdate');
    }

    componentWillUnmount() { // 组件卸载时触发
      console.log('componentWillUnmount');
    }

    //Error Handling  1
    static getDerivedStateFromError(error) {
      // 更新 state 使下一次渲染可以显降级 UI
      console.log('getDerivedStateFromError')
      return null;
    }
    //Error Handling 2
    componentDidCatch(error, info) {
      console.log('componentDidCatch');
    }

}

const mapStateToProps  = (state) => ({
    posts: state.posts
});

export default connect(mapStateToProps)(NewsList);
