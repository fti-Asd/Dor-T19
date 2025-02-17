$(document).ready(function(){
    Highcharts.chart('pie-chart', {
        chart: {
            type: 'pie',
            backgroundColor: "#111C44",
            height: 190,
            borderWidth: 0
        },
        title: {
            text: ''
        },

        credits:{
            enabled:false
        },

        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                },
                borderWidth: 0,
                borderRadius:0,
                borderColor: 'transparent',
                states: {
                    hover: {
                        halo: {
                            size: 0
                        }
                    }
                }
            }
        },

        series: [{
            name: 'Share',
            colorByPoint: true,
            data: [{
                name: '',
                y: 60,
                sliced: false,
                selected: false,
                color:"#7551FF"
            }, {
                name: '',
                y: 20,
                color:"#39B8FF"
            }, {
                name: '',
                y: 20,
                color:"#6AD2FF"
            }]
        }]
    });
});
