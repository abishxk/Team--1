const loginButton = document.querySelector('[name="login-button"]');
const usernameInput = document.querySelector('[name="username"]');
const passwordInput = document.querySelector('[name="password"]');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'username' && password === 'password') {
    alert('Login successful!');
  } else {
    alert('Invalid username or password');
  }
});
