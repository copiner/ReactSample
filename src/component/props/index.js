/*
 a render prop is a function prop that a component uses to know what to render.
*/
import React from 'react';

import shape from './index.css';

import kitPic from './cat.png';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <>
      <img src={ kitPic } style={{ /*position: 'absolute', left: mouse.x, top: mouse.y*/ }} />
      <p>The current mouse position is ({mouse.x}, {mouse.y})</p>
      </>
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove=(event)=> {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div className={shape.mouse} onMouseMove={this.handleMouseMove}>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={mouse => (//render prop
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}
export default MouseTracker
