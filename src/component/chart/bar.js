
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Chart from './chart';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const option = this.initOption();

        return <Chart option={option} />;
    }
    // getOption 这个函数主要用于配置 option，包括将数据配置进去
    // 也可以将其放在 state 中，然后通过 setState 更新
    initOption = () => {
        return {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  data: [120, 200, 150, 80, 70, 110, 130],
                  type: 'bar',
                  showBackground: true,
                  backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                  }
                }
              ]
        };
    };
}

export default BarChart;
