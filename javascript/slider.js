
    const slider = this.document.querySelector('.slider');
    const sliderImgList = this.document.querySelector('.slider__img-list');
    const sliderImgItems = this.document.querySelectorAll('.slider__img-item');
    const silderNext = this.document.querySelector('.slider__trans-right');
    const silderPrev = this.document.querySelector('.slider__trans-left');
    const dotItem = this.document.querySelectorAll('.slider__dot-item');

    const sliderImgItemWidth = sliderImgItems[0].offsetWidth;
    let positionX =0;
    const sliderIndex = sliderImgItems.length;

    silderNext.addEventListener('click', function(){
        handleChangeslide(1);
    })

    silderPrev.addEventListener('click', function(){
        handleChangeslide(-1);
    })

    function handleChangeslide(direction){
        if(direction==1){
            positionX = positionX -sliderImgItemWidth;
            if(Math.abs(positionX)==sliderImgItemWidth*sliderIndex){
                positionX=0;
            }
            sliderImgList.style = `transform: translateX(${positionX}px)`;
        }
        else if(direction==-1){
            positionX = positionX +sliderImgItemWidth;
            if(positionX>0){
                positionX=sliderImgItemWidth*-(sliderIndex-1);
            }
            sliderImgList.style = `transform: translateX(${positionX}px)`;
        }
    }



