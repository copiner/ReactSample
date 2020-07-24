import React, { Component } from 'react';

import Toast from './toast'
import Parent from './parent'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <>
        <Toast />
        <Parent />
      </>
    );
  }
}


export default App;
