import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './alert.css';


class Alert extends Component{

  constructor(props) {
      super(props);
      this.state = {
        alertStatus:false,
        alertTip:"提示",
        closeAlert:Function,
        confirmAlert:Function,
        childs:''
      };
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.confirm = this.confirm.bind(this);
      this.firstChild = this.firstChild.bind(this);
      this.renderChildren = this.renderChildren.bind(this);
  }

  // css动画组件设置为目标组件
  firstChild (props){
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }

  //打开弹窗
  open (options){
    options.alertStatus = true;
    var props = options.props || {};

    var childs = this.renderChildren(props,options.childrens) || '';
    console.log(childs);
    this.setState({
      ...this.state,
      ...options,
      childs
    })

  }

  confirm(data){
    this.state.confirmAlert(data);
  }

  //关闭弹窗
  close(){
    this.state.closeAlert();
    this.setState({
      alertStatus:false
    })
  }

  renderChildren(props,childrens) {
    //遍历所有子组件
    var childs = [];
    childrens = childrens || [];
    var ps = {
        ...props,  //给子组件绑定props
        _close:this.close,  //给子组件也绑定一个关闭弹窗的事件
        _confirm:this.confirm  //给子组件也绑定一个确认事件
       };
    childrens.forEach((currentItem,index) => {
        childs.push(React.createElement(
            currentItem,
            {
                ...ps,
                key:index
            }
        ));
    })

    return childs;
  }

  shouldComponentUpdate(nextProps, nextState){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render(){
    return (
      <ReactCSSTransitionGroup
        component={this.firstChild}
        transitionName='transitionWrapper'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <div className="alert-con" style={this.state.alertStatus? {display:'block'}:{display:'none'}}>
          <div className="alert-context">
          {this.state.childs}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

let doc = document.createElement('div');
let props = {

};

document.body.appendChild(doc);

let Box = ReactDOM.render(React.createElement(
    Alert,
    props
),doc);


export default Box;　　
