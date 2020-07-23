import React, { Component } from 'react';

import HocInput from './hocinput';

class Hoc extends Component {
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
            <HocInput name="wdaonngg" />
          </div>
        );
    }
}

export default Hoc;
