$(document).ready(function(){
    $(".sidebar-container").click(function(){
        $(".sidebar-container").toggleClass("hide");
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
