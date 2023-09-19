
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit-button');

const validationErrors = document.getElementById('validation-errors');
const successMessage = document.getElementById('success-message');


function displayValidationErrors(errors) {
  validationErrors.innerHTML = '<ul><li>' + errors.join('</li><li>') + '</li></ul>';
  validationErrors.style.display = 'block';
}

function hideValidationErrors() {
  validationErrors.style.display = 'none';
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function displaySuccessMessage() {
  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';
}

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();

  hideValidationErrors();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  const errors = [];

  if (name.trim() === '') {
    errors.push('Please enter your name.');
  }

  if (email.trim() === '') {
    errors.push('Please enter your email address.');
  } else if (!isValidEmail(email)) {
    errors.push('Please enter a valid email address.');
  }

  if (message.trim() === '') {
    errors.push('Please enter your message.');
  }

  if (errors.length > 0) {
    displayValidationErrors(errors);
  } else {
    try {
      await submitContactForm(name, email, message);
      displaySuccessMessage();
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}


submitButton.addEventListener('click', handleSubmit);
