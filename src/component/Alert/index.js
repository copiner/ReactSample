import React, { Component } from 'react';

import Child from "./child.js";
import A from "./alert.js";

class Two extends Component {
    constructor(props){
        super(props);
        this.state = {
            num:7
        };
        this.open = this.open.bind(this);
    }

    open(){
        A.open({
            alertTip:"这是一个测试弹框",
            childrens:[Child],
            props:{
              num: this.state.num
            },
            closeAlert:function(){
                console.log("关闭了...");
            },
            confirmAlert:function(data){
                console.log(data+"确认...");
            }
        });
    }
    render() {
      return (
         <div className="Two">
              Two
          <button onClick={this.open}>
               开启宝藏
          </button>
              <div>{this.state.num}</div>
         </div>
      );
    }
}

export default Two;
