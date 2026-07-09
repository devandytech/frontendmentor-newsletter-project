document.addEventListener('DOMContentLoaded', () => {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  let form = document.getElementById('form-validation');
  let emailInput = document.getElementById('email');
  let errorMessage = document.querySelector('.error');
  
  const signUpPage = document.querySelector('.container');
  const confirmationPage = document.querySelector('.confirmation');
  const signUpButton = document.querySelector('.button1');
  const confirmButton = document.querySelector('.button2');
  
  function formValidation() {
    form.addEventListener('submit', (e) => {
      if (!emailInput.value.trim().match(emailRegex)) {
        e.preventDefault();
        errorMessage.textContent = 'Valid email required';
        errorMessage.classList.add('error');
        
        emailInput.classList.add('error-state');
        emailInput.style.color = 'red';
        emailInput.style.border = '2px solid hsl(4, 100%, 67%)';
      } else {
        return true;
      }
    });
  };
  
  function confirm() {
    signUpButton.addEventListener('click', () => {
      formValidation();
    });
  };
  
  confirm();
});
