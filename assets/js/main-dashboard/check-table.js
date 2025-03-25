$(document).ready(function () {
    let data = [
        { name: 'Horizon UI PRO', progress: '17.5%', quantity: '2.458', date: '24.Jan.2021', checked: false },
        { name: 'Horizon UI Free', progress: '10.8%', quantity: '1.485', date: '12.Jun.2021', checked: true },
        { name: 'Weekly Update', progress: '21.3%', quantity: '1.024', date: '5.Jan.2021', checked: true },
        { name: 'Venus 3D Asset', progress: '31.5%', quantity: '858', date: '7.Mar.2021', checked: true },
        { name: 'Marketplace', progress: '12.2%', quantity: '258', date: '17.Dec.2021', checked: false }
    ];

    $.each(data, function (index, item) {
        let row = $('<tr></tr>');

        let nameCell = $('<td class="name-column"></td>');
        let checkbox = $(`<input type="checkbox" id="checkboxId${index}" class="checkbox" data-id="${index}">`);

        if (item.checked) {
            checkbox.prop('checked', true);
        }

        nameCell.append(checkbox).append(`<label for="checkboxId${index}"> ${item.name} </label>`);

        let progressCell = $('<td></td>').html('<p>' + item.progress + '</p>');
        let quantityCell = $('<td></td>').html('<p>' + item.quantity + '</p>');
        let dateCell = $('<td></td>').html('<p>' + item.date + '</p>');

        row.append(nameCell, progressCell, quantityCell, dateCell);

        $('.table-body').append(row);
    });

    $.each(data, function (index, item) {
        let mobileItem = $('<div class="mobile-item d-flex"></div>').html(`
            <input type="checkbox" id="checkboxMobile${index}" class="checkbox" data-id="${index}">
            <div>
                <label for="checkboxMobile${index}"><strong>${item.name}</strong></label>
                <p class="text-gray-100">Progress: ${item.progress}</p>
                <p class="text-gray-100">Quantity: ${item.quantity}</p>
                <p class="text-gray-100">Date: ${item.date}</p>
            </div>
        `);

        if (item.checked) {
            mobileItem.find('.checkbox').prop('checked', true);
        }

        $('.check-table-body-container-mobile').append(mobileItem);
    });

    $(document).on('change', '.checkbox', function () {
        let id = $(this).data('id');
        
        let isChecked = $(this).prop('checked');

        $(`.checkbox[data-id="${id}"]`).prop('checked', isChecked);
    });
});
