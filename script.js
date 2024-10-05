const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Adicione estes event listeners para os botões de Sign Up e Sign In na tela inicial
document.querySelector('.sign-up form button').addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add("active");
});

document.querySelector('.sign-in form button').addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove("active");
});