import React, { Component } from 'react';

import formHoc from './formHoc';

// form
class HForm extends Component {
  render() {
    return (
      <div>
        <label id="username">
          ACCOUNT
        </label>
        <input name="username" {...this.props.getField('username')}/>

        <label id="password">
          PASSEARD
        </label>
        <input name="password" {...this.props.getField('password')}/>

        <button onClick={this.props.handleSubmit}>SUBMIT</button>
      </div>
    )
  }
}

export default formHoc(HForm);
