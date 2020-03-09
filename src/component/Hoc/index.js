import React, { Component } from 'react';

import withHeader from './height';

//@withHeader
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: '1'
        };
    }

    render() {
      //console.log(this.props);
        return (
          <div>
            simpleHoc
          </div>
        );
    }
}

export default withHeader(Test);
