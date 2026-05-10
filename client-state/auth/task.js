const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

const savedUserId = localStorage.getItem('user_id');

if (savedUserId) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userIdSpan.textContent = savedUserId;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem('user_id', data.user_id);

        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');

        userIdSpan.textContent = data.user_id;
      } else {
        alert('Неверный логин/пароль');
      }
    });

  form.reset();
});