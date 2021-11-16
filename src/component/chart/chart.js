import React, { Component } from 'react';

import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer]);

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref}>
    {props.children}
  </button>
));

class Chart extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
      //1 next react v16
      this.chartContainer = React.createRef();
      //ref={this.chartContainer}

      //2 pre react v16
      //this.chartContainer = null;
      //ref={refs => { this.chartContainer = refs}}


      this.buttonRef = React.createRef()
    }

    handleClick = () => {
      console.log(this.buttonRef.current)
    }

    render() {
      /*
      我们创建一个引用，本来是给外面的FancyButton组件的，但是因为React.forwardRef的处理，
      这个引用被传递给了内部的button元素。
      这样ref.current的引用由本来的FancyButton实例传递到了button元素本身
      */
      return (
        <div>
          <div id="myChart" ref={this.chartContainer}  style={{ width: 600, height: 400 }}></div>
          <button onClick={this.handleClick}>Click</button>
          <FancyButton ref={this.buttonRef} >Me</FancyButton>
        </div>
      )
    }

    componentDidMount(){
      //var myChart = echarts.init(document.getElementById('myChart'));

      //2 pre react v16
      //var myChart = echarts.init(this.chartContainer);

      //1 next react v16
      //Note: we're accessing "current" to get the DOM node
      /*
      在V16版本前，我们可以直接通过变量访问元素的方法，在V16后，我们需要通过 this.textInput.current，
      即真实的DOM是通过current属性来引用的

      如果通过 createRef（）这个API赋值给组件的ref，那么引用的就是组件实例；
      如果是DOM元素，那引用的自然的就是DOM元素了
      */
      var myChart = echarts.init(this.chartContainer.current);
      const option = this.props.option;
      option && myChart.setOption(option);
    }
}

export default Chart;
