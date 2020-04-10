
import React, { Component } from 'react';

import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

import 'echarts/lib/chart/heatmap';
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'

import AsyncComponent from '../../util/loadable';//异步加载组件

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
