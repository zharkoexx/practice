// Inside the event listener for form submission
if (x === '') {
    document.getElementById('usernameError').textContent = 'Username must be filled out';
    return;
  } else {
    document.getElementById('usernameError').textContent = ''; // Clear error message
  }
  
  if (!/^[A-Za-z]+$/.test(x)) {
    document.getElementById('usernameError').textContent = 'Username must contain only letters';
    return;
  } else {
    document.getElementById('usernameError').textContent = ''; // Clear error message
  }
  
  if (y === '') {
    document.getElementById('passwordError').textContent = 'Password must be filled out';
    return;
  } else {
    document.getElementById('passwordError').textContent = ''; // Clear error message
  }
  
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(y)) {
    document.getElementById('passwordError').textContent = 'Password must contain at least 8 symbols (digit, letters, special characters)';
    return;
  } else {
    document.getElementById('passwordError').textContent = ''; // Clear error message
  }
  
  if (y !== z) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords must match';
    return;
  } else {
    document.getElementById('confirmPasswordError').textContent = ''; // Clear error message
  }
  
  // If all validations pass, submit the form
  myForm.submit();
  