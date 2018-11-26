import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import withHeader from './height';

//===  const EnhanceDemo = withHeader(Demo);

@withHeader
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: '1'
        };
    }

    render() {
        return (
          <div>
            我是一个普通组件
          </div>
        );
    }
}

export default Test
