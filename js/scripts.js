// Future JavaScript goes here (e.g., carousel, form handling)
console.log("Noisy Atom scripts loaded!");
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    // Check if the form was previously submitted in this session
    if (sessionStorage.getItem("formSubmitted") === "true") {
        // Reset the form and remove the flag
        form.reset();
        sessionStorage.removeItem("formSubmitted"); // Remove the flag
    }

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior (page reload)

        // Here you can handle form submission (e.g., using AJAX or Formspree)

        // Mark the form as submitted using sessionStorage
        sessionStorage.setItem("formSubmitted", "true");

        // Show success message
        successMessage.style.display = "block";

        // Optionally reset the form fields after submission
        form.reset();

        // Hide the success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    });
});
