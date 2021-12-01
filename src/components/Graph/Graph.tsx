
import React, { useRef } from 'react'
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Props{
    data: any
}

export const Graph: React.FC<Props> = ({data}) => {

    const options: Highcharts.Options = {

        title: {
            text: 'Cable Timeseries Data'
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Date Time'
            }
        },
        yAxis: {
            title: {
                text: 'Average measurements'
            },
            labels: {
                formatter: function () {
                    return this.value as any;
                }
            },
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: true
                }
            }
        },

        colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
        series: data,

    }
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    return (

        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartComponentRef}
        />

    )
}
