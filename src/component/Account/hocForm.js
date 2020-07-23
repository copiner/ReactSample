import React, { Component } from 'react';

const hocForm = WrappedComponent => class extends Component {

  constructor() {
    super();
    this.state = {
      fields: {},
    }

    this.onChange = key => e => {
      const { fields } = this.state;
      fields[key] = e.target.value;
      this.setState({
        fields,
      })
    }

    this.handleSubmit = () => {
      console.log(this.state.fields);
    }

    this.getField = fieldName => {
      return {
        onChange: this.onChange(fieldName),
      }
    }

  }

  render() {
    const props = {
      ...this.props,
      handleSubmit: this.handleSubmit,
      getField: this.getField,
    }
    return (<WrappedComponent
      {...props}
    />);
  }
};

export default hocForm;
