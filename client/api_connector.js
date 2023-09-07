
async function submitContactForm(name, email, message) {
    try {
      const formData = {
        name,
        email,
        message
      };

      console.log(formData);
  
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Error sending contact form data.');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error sending contact form data.');
    }
  }
  
