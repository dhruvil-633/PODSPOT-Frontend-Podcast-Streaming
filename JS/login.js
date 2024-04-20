// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the login form
    var loginForm = document.querySelector('form');

    // Attach an event listener to the form submission event
    loginForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the username and password values
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Perform validation checks
        if (username.trim() === '') {
            // If the username is empty, display an error message
            alert('Please enter your username.');
            return;
        }

        if (password.trim() === '') {
            // If the password is empty, display an error message
            alert('Please enter your password.');
            return;
        }

        // If validation passes, allow the form to be submitted
        // You can perform additional validation or authentication checks here
        loginForm.submit();
    });
});
