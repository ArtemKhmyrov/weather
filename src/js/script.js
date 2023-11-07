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

