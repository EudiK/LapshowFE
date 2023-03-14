const modal = document.querySelector('.modal');
const modalClose = document.querySelectorAll('.modal-close');
const detailBtn = document.querySelector('.product__detail-inf');
const modalCard = document.querySelector('.modal__card');
const modaBground = document.querySelector('.modal__background');

detailBtn.addEventListener('click', function(){
    modal.classList.add('open');
})

modal.addEventListener('click', function(){
    modal.classList.remove('open');
})

modaBground.addEventListener('click', ()=>{
    modal.classList.remove('open');
})

modalCard.addEventListener('click', (event)=>{
    event.stopPropagation();
})

modalClose.forEach(element => {
    element.addEventListener('click', ()=>{
        modal.classList.remove('open');
    })
});
