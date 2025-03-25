$(document).ready(function(){
    $(".sidebar-container").click(function(){
        $(".sidebar-container").removeClass("hide");
    });

    $(".layout-container").click(function(){
        $(".sidebar-container").addClass("hide");
    })

    $(".sidebar-container").click(function(event) {
        if ($(event.target).hasClass("close-sidebar-btn")) {
            $(".sidebar-container").addClass("hide");
        }
    });    
});


function toggleSidebarClass() {
    if (window.matchMedia("(max-width: 1200px)").matches) {
        $(".sidebar-container").addClass("hide");
    } else {
        $(".sidebar-container").removeClass("hide");
    }
}

toggleSidebarClass();

$(window).resize(function(){
    toggleSidebarClass();
});
