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

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const passwordForm = document.getElementById("password-form");
    const passwordCard = document.getElementById("password-card");
    const passwordNameDisplay = document.getElementById("password-name-display");
    const passwordDisplay = document.getElementById("password-display");

    const addButton = document.getElementById("add-password-button");
    addButton.addEventListener("click", function () {
        // Get values from the form
        const passwordName = document.getElementById("password-name").value;
        const password = document.getElementById("password").value;

        // Display the password card with the entered data
        passwordNameDisplay.textContent = `Password Name: ${passwordName}`;
        passwordDisplay.textContent = `Password: ${password}`;
        passwordCard.classList.remove("hidden");

        // Clear the form
        passwordForm.reset();
    });
});


