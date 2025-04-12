document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const confirmationMessage = document.getElementById('confirmation');

  form.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Show confirmation message
    confirmationMessage.style.display = 'block';

    // Reset the form fields
    form.reset();

    // Optionally, hide the confirmation message after a few seconds
    setTimeout(function() {
      confirmationMessage.style.display = 'none';
    }, 5000); // Hide confirmation after 5 seconds
  });
});
