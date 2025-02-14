$(document).ready(function(){
    /** 
    * javascript comment 
    * @Author: flydreame 
    * @Date: 2025-02-14 08:08:22 
    * @Desc: Toggles the password input field between "password" and "text" 
    */
    $(".password-image-container").click(function(){
        let passwordInput = $("#password");
        let type = passwordInput.attr("type") === "password" ? "text" : "password";
        passwordInput.attr("type", type);
    })

})


