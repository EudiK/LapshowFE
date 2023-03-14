const modalLogIn = document.querySelector('.modal__login');
const LogInBackground = document.querySelector('.login__background');
const LogInCard = document.querySelector('.login__card')
const LogInClose = document.querySelector('.login-close');
const LogInBtn = document.querySelector('.login__btn');
const actionLogIn = document.querySelector('.header__navbar-action-login');

function showModal(){
    modalLogIn.classList.add('open');
}

function hideModal(){
    modalLogIn.classList.remove('open');
}

actionLogIn.addEventListener('click', 
    showModal
)

LogInBackground.addEventListener('click',
    hideModal
)

LogInClose.addEventListener('click',
    hideModal
)

LogInCard.addEventListener('click', (event)=>{
    event.stopPropagation();
})