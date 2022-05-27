import React, { Component } from 'react'

import * as am4core from '@amcharts/amcharts4/core'
import './Graph.css'
import '@amcharts/amcharts4/charts'
am4core.options.autoSetClassName = true

class Graph extends Component {
    componentDidMount() {
        const data = this.props.data
        const chartConfiguration = {
            type: 'XYChart',
            data: data,
            xAxes: [
                {
                    type: 'ValueAxis',
                },
            ],
            yAxes: [
                {
                    type: 'ValueAxis',
                },
            ],
            series: [
                {
                    type: 'LineSeries',
                    dataFields: {
                        valueX: 'x',
                        valueY: 'y',
                    },
                    groupFields: {
                        valueY: 'average',
                    },
                },
            ],
        }
        console.log(data)
        this.chart = am4core.createFromConfig(
            JSON.parse(JSON.stringify(chartConfiguration)),
            'chartdiv'
        )
        this.forceUpdate()
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose()
        }
        this.forceUpdate()
    }

    render() {
        return (
            <div className="graph">
                <div id="chartdiv"></div>
            </div>
        )
    }
}

export default Graph
