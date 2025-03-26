$(document).ready(function() {
    $("#upload-wrapper").on("click", function(event) {
        event.stopPropagation(); 
        $("#file-upload").trigger("click");
    });    

    // ***
    $("#file-upload").on("click", function(event) {
        event.stopPropagation();
    });
    // ***

    $("#file-upload").on("change", function(event) {
        if (event.target.files.length > 0) {
            console.log("Selected file:", event.target.files[0]);
        }
    });
});