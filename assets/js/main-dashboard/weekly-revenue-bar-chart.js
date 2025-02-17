$(document).ready(function(){
    Highcharts.chart('weekly-revenue-bar-chart', {
        chart: {
            type: 'column',
            backgroundColor: "#111C44",
            height: 240
        },

        title: { text: '' },
        
        xAxis: {
            categories: ['17', '18', '19', '20', '21', '22', '23', '24', '25'],
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
            column: {
                stacking: 'normal',
                borderRadius: 50,
                pointWidth:25,
                borderWidth:0
            }
        },
        
        credits: { enabled: false },
        
        series: [
            {
                name: 'part1',
                data: [3, 4, 2, 5, 6, 3, 4],
                color: '#A3AED0',
            },
            {
                name: 'part2',
                data: [2, 3, 4, 3, 2, 5, 3],
                color: '#39B8FF'
            },
            {
                name: 'part3',
                data: [1, 2, 3, 4, 3, 2, 5],
                color: '#4318FF'
            }
        ]
    });
})