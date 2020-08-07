import React, { Component } from 'react';


class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  handleSubmit = (event) => {

    event.preventDefault();
    console.log(`Selected file - ${this.fileInput.current.files[0].name}`)

  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}


export default FileInput;
