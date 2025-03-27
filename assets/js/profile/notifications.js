$(document).ready(function(){
    data = [
        {ischecked:true, title:"Item update notifications"},
        {ischecked:false, title:"Item comment notifications"},
        {ischecked:true, title:"Buyer review notifications"},
        {ischecked:false, title:"Rating reminders notifications"},
        {ischecked:false, title:"Meetups near you notifications"},
        {ischecked:true, title:"Company news notifications"},
        {ischecked:true, title:"New launches and projects"},
        {ischecked:false, title:"Monthly product changes"},
        {ischecked:false, title:"Subscribe to newsletter"},
        {ischecked:true, title:"Email me when someone follows me"},
    ]

    let items = ``;

    $.each(
        data,function(index, item){
            items+= `<li class="form-check form-switch d-flex justify-content-start gap-3 text-gray-50">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked${index}" ${item.ischecked ? "checked" : ""}>
                            <label class="form-check-label fs-7" for="flexSwitchCheckChecked${index}">${item.title}</label>
                    </li>`
        }
    );

    $(".checkbox-container").append(items);
    
})