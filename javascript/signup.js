const modalSignUp = document.querySelector('.modal__sign-up');
const signUpBackground = document.querySelector('.sign-up__background');
const signUpCard = document.querySelector('.sign-up__card')
const signUpClose = document.querySelector('.sign-up-close');
const signUpBtn = document.querySelector('.sign-up__btn');
const actionSignUp = document.querySelector('.header__navbar-action-sign-up');

function showModal(){
    modalSignUp.classList.add('open');
}

function hideModal(){
    modalSignUp.classList.remove('open');
}

actionSignUp.addEventListener('click', 
    showModal
)

signUpBackground.addEventListener('click',
    hideModal
)

signUpClose.addEventListener('click',
    hideModal
)

signUpCard.addEventListener('click', (event)=>{
    event.stopPropagation();
})