import React, { Component } from 'react';

import hocForm from './hocForm';

// form
class HForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
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

export default hocForm(HForm);
