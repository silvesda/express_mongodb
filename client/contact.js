
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit-button');


function displaySuccessMessage() {
  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';
}

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  try {

    await submitContactForm(name, email, message);


    displaySuccessMessage();
  } catch (error) {
    console.error('Error:', error.message);

  }
}


submitButton.addEventListener('click', handleSubmit);
