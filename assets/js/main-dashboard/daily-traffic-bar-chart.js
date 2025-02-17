$(document).ready(function(){
    Highcharts.chart('daily-traffic-bar-chart', {
        chart: {
            type: 'columnrange',
            backgroundColor: "#111C44",
            height: 240
        },

        title: { text: '' },
        
        xAxis: {
            categories: ['00', '04', '08', '12', '14', '16', '18'],
            labels: { style: { fontSize: '14px', color:"#fff" } },
            gridLineWidth: 0,
            lineWidth: 0
        },
        
        yAxis: { 
            title: { text: '' },
            gridLineWidth: 0,
            labels: { enabled: false },
            lineWidth: 0
        },
        
        legend: { enabled: false },
        
        plotOptions: {
            columnrange: {
                stacking: 'normal',
                borderRadius: 50,
                pointWidth:20,
                borderWidth:0
            }
        },
        
        credits: { enabled: false },

        series: [{
            name: 'part1',
            data: [
                [0, 8.0],
                [0, 8.3],
                [0, 9.2],
                [0, 15.7],
                [0, 20.8],
                [0, 28.4],
                [0, 27.0],
            ],
            color: '#7551FF',
        }]
    });
})