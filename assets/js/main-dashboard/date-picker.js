$(document).ready(function() {
    let selectedRanges = [];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentYear = new Date().getFullYear();
    let selectedYear = currentYear;
    let selectedMonth = new Date().getMonth();

    function populateYearAndMonth() {
        for (let i = currentYear; i <= currentYear + 10; i++) {
            $('#year-select').append(`<option value="${i}">${i}</option>`);
        }
        $('#month-select').append(months.map((month, index) => `<option value="${index}">${month}</option>`).join(''));
        $('#year-select').val(selectedYear);
        $('#month-select').val(selectedMonth);
    }

    function generateCalendar() {
        const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
        const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

        let daysHTML = '';
        for (let i = 0; i < firstDayOfMonth; i++) {
            daysHTML += `<span></span>`; 
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            daysHTML += `<span class="day" data-day="${day}">${day}</span>`;
        }

        $('.days').html(daysHTML);
    }

    let isStartSelected = $(this).hasClass('selected-start');
    let isEndSelected = $(this).hasClass('selected-end');

    $(document).on('click', '.days .day', function() {
        let day = $(this).data('day');

        if (!isStartSelected && !isEndSelected) {
            $('.days .day').removeClass('selected-start selected-end in-range');
            selectedRanges = [];

            console.log("new range....");

            $(this).addClass('selected-start');
            selectedRanges.push({ start: day, end: null });
            isStartSelected = true;

            console.log("isStartSelected: ",isStartSelected);
            console.log("isEndSelected: ",isEndSelected);

        } else if (isStartSelected && !isEndSelected) {
            $(this).removeClass('selected-start').addClass('selected-end');
            selectedRanges[selectedRanges.length - 1].end = day;
            isEndSelected = true;

            const start = selectedRanges[selectedRanges.length - 1].start;
            const end = selectedRanges[selectedRanges.length - 1].end;
            $('.days .day').removeClass('in-range');
            if (start && end) {
                $('.days .day').each(function() {
                    const currentDay = $(this).data('day');
                    if (currentDay > Math.min(start, end) && currentDay < Math.max(start, end)) {
                        $(this).addClass('in-range');
                    }
                });
            }
        } else if(isStartSelected & isEndSelected){
            
            $('.days .day').removeClass('selected-start selected-end in-range');
            selectedRanges = [];
            isEndSelected=false;

            console.log("changing range....");

            $(this).addClass('selected-start');
            selectedRanges.push({ start: day, end: null });
            isStartSelected = true;

            console.log("isStartSelected: ",isStartSelected);
            console.log("isEndSelected: ",isEndSelected);
        }
    });

    $('#year-select, #month-select').on('change', function() {
        selectedYear = $('#year-select').val();
        selectedMonth = $('#month-select').val();
        generateCalendar();
    });

    populateYearAndMonth();
    generateCalendar();
});
