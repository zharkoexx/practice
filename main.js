
const myForm = document.forms['myForm'];

myForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let x = myForm['fname'].value;
  let y = myForm['phoneNumber'].value;
  let z = myForm['phoneNumber1'].value;

  if (x === '') {
    alert('Username must be filled out');
    return;
  } else if (!/^[A-Za-z]+$/.test(x)) {
    alert('Username must contain only letters');
    return;
  } else if (y === '') {
    alert('Password must be filled out');
    return;
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(y)) {
    alert('Password must contain at least 8 symbols (digit, letters, special characters)');
    return;
  } else if (y !== z) {
    alert('Passwords must match');
    return;
  } else {
    alert("Success! YAAAY");
  }

  myForm.submit();
});
