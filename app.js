const form = document.querySelector('.signup');
const feedback = document.querySelector('.feedback');
const userPattern = /^[a-zA-Z0-9]{5,12}$/;

form.addEventListener('submit', e => {
  e.preventDefault();

  const username = form.username.value

  if (userPattern.test(username)) {
    feedback.textContent = 'Password is valid!'
  } else {
    feedback.textContent = 'Password is not valid'
  }
})

form.username.addEventListener('keyup', e => {
  if (userPattern.test(form.username.value)) {
    form.username.setAttribute('class', 'success');
  } else {
    form.username.setAttribute('class', 'error');
  }
});