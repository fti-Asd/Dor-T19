$(document).ready(function(){
    Highcharts.chart('pie-chart', {
        chart: {
            type: 'pie',
            backgroundColor: "#111C44",
            height: 240
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        series: [{
            name: 'Share',
            colorByPoint: true,
            data: [{
                name: 'Company A',
                y: 40,
                sliced: true,
                selected: true
            }, {
                name: 'Company B',
                y: 25
            }, {
                name: 'Company C',
                y: 20
            }, {
                name: 'Company D',
                y: 15
            }]
        }]
    });
})