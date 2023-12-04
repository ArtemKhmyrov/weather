"use strict"

const CardRightWweather = document.querySelectorAll('.card__right-weather');
let CardRightWrapWeather = document.querySelector('.card__right-wrap--weather');

for (let i = 0; i < CardRightWweather.length; i++){
    CardRightWweather[i].addEventListener('click', ()=>{

        clearItems();

        CardRightWweather[i].classList.add('_active-bg');
        CardRightWweather[i].childNodes[1].classList.add('_active-icon');
        CardRightWweather[i].childNodes[3].classList.add('_active-txt');
        CardRightWweather[i].childNodes[5].classList.add('_active-txt');
    })
}

function clearItems(){
    let ChildWeather = CardRightWrapWeather.children;
    for (let i = 0; i < ChildWeather.length; i++){
        ChildWeather[i].classList.remove('_active-bg');
        ChildWeather[i].childNodes[1].classList.remove('_active-icon');
        ChildWeather[i].childNodes[3].classList.remove('_active-txt');
        ChildWeather[i].childNodes[5].classList.remove('_active-txt');
    }
}



/* PopUp */

let checkPopup = document.querySelector('.popup');

if (checkPopup){
    const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
        const buttonElems = document.querySelectorAll(btnOpen);
        const modalElem = document.querySelector(modal);

        modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;

        const closeModal = event => {
            const target = event.target;

            if (
                target === modalElem ||
                (btnClose && target.closest(btnClose)) ||
                event.code === 'Escape'
            ) {

                modalElem.style.opacity = 0;

                setTimeout(() => {
                    modalElem.style.visibility = 'hidden';
                }, time);

                window.removeEventListener('keydown', closeModal);
                document.body.classList.remove('_lock');
            }
        }

        const openModal = () => {
            modalElem.style.visibility = 'visible';
            modalElem.style.opacity = 1;
            window.addEventListener('keydown', closeModal)
            document.body.classList.add('_lock');
        };

        buttonElems.forEach(btn => {
            btn.addEventListener('click', openModal);
        });


        modalElem.addEventListener('click', closeModal);

    };

    modalController({
        modal: '.popup',
        btnOpen: '.popup__open',
        btnClose: '.popup__close'
    });
}
