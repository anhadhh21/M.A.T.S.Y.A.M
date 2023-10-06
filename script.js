// script.js
document.addEventListener("DOMContentLoaded", function () {
    const navigateButton = document.getElementById("addpassword");
    
    if (navigateButton) {
        navigateButton.addEventListener("click", function () {
            // Change the page location when the button is clicked
            window.location.href = "addpass.html";
        });
    }
});
