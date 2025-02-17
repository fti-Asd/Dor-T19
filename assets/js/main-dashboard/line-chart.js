$(document).ready(function () {
    Highcharts.chart('line-chart', {
        chart: {
            type: 'spline',
            backgroundColor: "#111C44",
            height: 240
        },

        title: { text: '' },

        xAxis: {
            categories: ['SEP', 'OCT', 'NOV', 'DEC', 'Jan', 'FEB'],
            labels: { style: { fontSize: '14px' , color:"#fff"} },
            gridLineWidth: 0 ,
            lineWidth:0
        },

        yAxis: { 
            title: { text: '' },
            gridLineWidth: 0 ,
            labels: { enabled: false }
        },

        legend: { enabled: false },

        series: [
            {
                data: [3, 3.1, 2.9, 3.2, 3, 3.3],
                color: '#7551FF',
                marker: { enabled: false },
                lineWidth: 4
            },
            {
                data: [2.8, 3, 2.7, 3, 2.8, 3],
                color: '#39B8FF',
                marker: { enabled: false },
                lineWidth: 4
            }
        ]
    });
});