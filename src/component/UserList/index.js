import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table } from 'antd';

//import imgUrl from './smk.png'
import AppForm from '../Content';

class UserList extends Component {
    //挂载阶段
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
      //console.log(this.props.fetchUC.getUsers);
        this.props.fetchUC.getUsers("wdaonngg");
    }

    render() {
        const { users } = this.props;

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: '联系方式',
            dataIndex: 'phone',
            key: 'phone',
        }];

        return (
            <div>
                <AppForm />
                {
                  // <div><img src={imgUrl} /></div>
                }
                <Table rowKey="id" dataSource={users} columns={columns} />
            </div>
        );
    }


    componentDidMount(){
      //一般来说，有些组件的启动工作是依赖 DOM 的，例如动画的启动，而 componentWillMount 的时候组件还没挂载完成，
      //所以没法进行这些启动工作，这时候就可以把这些操作放在 componentDidMount 当中

    }

    componentWillUnmount() {
      //console.log('component will unmount')
    }

    //更新阶段
    componentWillReceiveProps(nextProps){

    }

    shouldComponentUpdate(nextProps, nextState){
      return true;
      //你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。
    }

    componentWillUpdate(){

    }

    componentDidUpdate(){
      
    }

}

export default UserList;
