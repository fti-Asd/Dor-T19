$(document).ready(function() {
    let data = [
        { name: 'Horizon UI PRO', statusImg:'/public/icons/main-dashboard/approved.svg' , status: 'approved', date: '18 Apr 2022', progress: 50},
        { name: 'Horizon UI Free', statusImg:'/public/icons/main-dashboard/disable.svg' , status: 'disabled', date: '18 Apr 2022', progress: 30},
        { name: 'Weekly Update', statusImg:'/public/icons/main-dashboard/error.svg' , status: 'error', date: '18 Apr 2022', progress: 20},
        { name: 'Venus 3D Asset', statusImg:'/public/icons/main-dashboard/approved.svg' , status: 'approved', date: '18 Apr 2022', progress: 40},
    ];

    $.each(data, function(index, item) {
        let row = $('<tr></tr>');

        let nameCell = $('<td></td>').html('<p>' + item.name + '</p>');
        
        let statusCell = $('<td></td>').addClass('status')
            .html(`<img src="${item.statusImg}" alt="${item.status}"/>` + '<span>' + item.status + '</span>');

        let progressCell = $('<td></td>').html(`
            <div class="progress-container">
                <div class="progress-bar bg-purple-500" style="width: ${item.progress}%"></div>
            </div>
        `);

        let dateCell = $('<td></td>').html('<p>' + item.date + '</p>');

        row.append(nameCell, statusCell, dateCell, progressCell);
        $('#complex-table').append(row);
    });
});