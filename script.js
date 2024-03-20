document.addEventListener('DOMContentLoaded', function () {
    const passwordField = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
  
    togglePassword.addEventListener('click', function () {
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);
  
      this.classList.toggle('fa-eye-slash');
    });
  
    passwordField.addEventListener('input', function () {
      const requirements = document.querySelectorAll('.requirement-list li');
      const password = this.value;
  
      const hasMinLength = password.length >= 8;
      const hasNumber = /\d/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
      requirements[0].querySelector('i').className = hasMinLength ? 'fa-solid fa-circle' : 'fa-solid fa-circle-thin';
      requirements[1].querySelector('i').className = hasNumber ? 'fa-solid fa-circle' : 'fa-solid fa-circle-thin';
      requirements[2].querySelector('i').className = hasLowerCase ? 'fa-solid fa-circle' : 'fa-solid fa-circle-thin';
      requirements[3].querySelector('i').className = hasSymbol ? 'fa-solid fa-circle' : 'fa-solid fa-circle-thin';
      requirements[4].querySelector('i').className = hasUpperCase ? 'fa-solid fa-circle' : 'fa-solid fa-circle-thin';
    });
  });
  