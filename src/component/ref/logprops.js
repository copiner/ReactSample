import React, { Component } from 'react';

function logProps(Component) {
  class LogProps extends React.Component {
    render() {
      const {fref, ...rest} = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={fref} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} fref={ref} />;
  });
}

export default logProps;
/*
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref}>
    {props.children}
  </button>
));
*/


//HOC
// function logProps(WrappedComponent) {
//   class LogProps extends React.Component {
//     render() {
//       const {forwardedRef, ...rest} = this.props;
//       return <WrappedComponent {...this.props} />;
//     }
//   }
//
//   return LogProps;
// }
