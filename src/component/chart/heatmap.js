/*
   Heatmap 热力图
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/visualMap';

import 'echarts/lib/chart/heatmap';


import Chart from '../components/chart/chart';

class HeatmapChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderer: 'canvas'
        };
    }
    render() {
        const renderer = this.state.renderer;
        const option = this.initOption();

        return <Chart renderer={renderer} option={option} />;
    }
    // getOption 这个函数主要用于配置 option，包括将数据配置进去
    // 也可以将其放在 state 中，然后通过 setState 更新
    initOption = () => {
        // 组装数据，返回配置 option
        const currentData = this.props.charts.heatmap;

        return {
            tooltip: {
                position: 'top'
            },
            grid: {
                containLabel: true
            },
            xAxis: {
                type: 'category',
                splitArea: {
                    show: true
                },
                boundaryGap: true
            },
            yAxis: {
                type: 'category',
                splitArea: {
                    show: true
                },
                boundaryGap: true
            },
            visualMap: {
                min: 0,
                max: 20,
                calculable: true,
                left: 'left',
                bottom: 'bottom',
                dimension: 2
            },
            dataset: {
                source: currentData
            },
            series: [
                {
                    name: '热力图',
                    type: 'heatmap',
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    encode: {
                        x: 0,
                        y: 1
                    },
                    tooltip: {
                        formatter(params) {
                            const [x, y, value] = params.data;

                            return [
                                `x: ${x}`,
                                `y: ${y}`,
                                `value: ${value}`
                            ].join('<br/>');
                        }
                    }
                }
            ]
        };
    };
}

export default HeatmapChart;
