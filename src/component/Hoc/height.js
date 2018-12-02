import React, { Component } from 'react';

// export default function withHeader(WrappedComponent) {
//   return class HOC extends Component {
//     render() {
//       return (
//         <div>
//           <div>
//             header
//           </div>
//           <WrappedComponent {...this.props}/>
//         </div>
//       )
//     }
//   }
// }

const HOC = WrappedComponent => {
  return class extends Component {

    handleClick() {
      console.log('click');
    }

    render() {
      return (
        <div>
          <div>
            header
          </div>
          <WrappedComponent
            {...this.props}
            handleClick={this.handleClick}
          />
        </div>
      )
    }
  }
}

export default HOC;
