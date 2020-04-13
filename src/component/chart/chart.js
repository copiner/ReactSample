import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts'

import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/bar'

// import 'echarts/lib/component/grid';
// import 'echarts/lib/component/visualMap';

// import 'echarts/lib/chart/heatmap';

class Chart extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
      this.chartContainer = React.createRef();
    }
    render() {
      return (
        <div id="myChart" ref={this.chartContainer} style={{ width: 400, height: 400 }}></div>
      )
    }

    componentDidMount(){
      var myChart = echarts.init(document.getElementById('myChart'));
      //var myChart = echarts.init(this.chartContainer);
      const option = this.props.option;
      myChart.setOption(option);
    }
}

export default Chart;
