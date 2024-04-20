// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the sign-up form
    var signUpForm = document.querySelector('form');

    // Attach an event listener to the form submission event
    signUpForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the form input values
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;
        var birthDate = document.getElementById('date').value; // Get the birth date input value

        // Perform validation checks
        if (username.trim() === '') {
            alert('Please enter a username.');
            return;
        }

        if (email.trim() === '') {
            alert('Please enter an email address.');
            return;
        }

        if (password.trim() === '') {
            alert('Please enter a password.');
            return;
        }

        if (confirmPassword.trim() === '') {
            alert('Please confirm your password.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Password and confirm password must match.');
            return;
        }

        // Validate birth date
        var currentDate = new Date();
        var birthYear = new Date(birthDate).getFullYear();
        var minimumBirthYear = currentDate.getFullYear() - 12; // Minimum birth year allowed (12 years old)
        if (birthYear > minimumBirthYear) {
            alert('You must be at least 12 years old to sign up.');
            return;
        }

        // If validation passes, allow the form to be submitted
        signUpForm.submit();
    });
});
