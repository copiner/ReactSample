import React, { Component } from 'react';
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

function logProps(Component) {
  class LogProps extends React.Component {
    render() {
      const {forwardedRef, ...rest} = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

export default logProps;
