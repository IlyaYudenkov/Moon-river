const images = document.querySelector('.sliderpage-slider-container')
const prev = document.querySelector('.pagination__prev')
const next = document.querySelector('.pagination__next')

const pointOne = document.querySelector('.location__point')
const pointTwo = document.querySelector('.location__point2')
const pointThree = document.querySelector('.location__point3')
const pointFour = document.querySelector('.location__point4')
const pointFive = document.querySelector('.location__point5')

const langRu = document.querySelector('.lang__ru')
const langEng = document.querySelector('.lang__eng')
let translateArr = document.querySelectorAll('._translate');
let placeholder1 = document.querySelector('._1');
let placeholder2 = document.querySelector('._2');
let placeholder3 = document.querySelector('._3');
let placeholder4 = document.querySelector('._4');


const burgerHeader = document.querySelector('.header__burger')
const burgerHidden = document.querySelector('.hidden__burger')
const wrapperHidden = document.querySelector('.wrapper-hidden')

const footer = document.querySelector('.hidden__footer')
const wrapper = document.querySelector('.wrapper')

let offset = 0;
let active = 0;
let dots = document.querySelectorAll('.dots')

nextSlide = () => {
    dots[active].classList.remove('_active')
    if (active + 1 == dots.length) {
        active = 0;
        prev.disabled = 'true';
        prev.classList.add('_disabled')
    }
    else {
        active++;
        prev.disabled = false;
        prev.classList.remove('_disabled')
    }
    dots[active].classList.add('_active')
    offset += 223;
    if (offset > 1250) {
        offset = 0;
    }
    images.style.left = -offset + 'px';

}

prevSlide = () => {
    dots[active].classList.remove('_active')
    if (active - 1 == 0) {
        prev.disabled = 'true';
        prev.classList.add('_disabled')
    }
    if (active - 1 == -1) {
        active = 0;
    }
    else {
        active--;
    }
    dots[active].classList.add('_active')
    offset -= 223;
    if (offset < 0) {
        offset = 0;
    }
    images.style.left = -offset + 'px';
}


function displayBlock() {
    this.querySelector('p').style.display = 'block';

}
function displayNone() {
    this.querySelector('p').style.display = 'none';

}

wordsRu = () => {
    for (let i = 0; i < translateArr.length; i++) {
        translateArr[i].value = translateArr[i].innerText;
    }
}

translateEn = () => {
    for (let i = 0; i < translateArr.length; i++) {
        translateArr[i].innerText = translateArr[i].dataset.translate;
    }
    placeholder1.placeholder = placeholder1.dataset.translate;
    placeholder2.placeholder = placeholder2.dataset.translate;
    placeholder3.placeholder = placeholder3.dataset.translate;
    placeholder4.placeholder = placeholder4.dataset.translate;
    langEng.classList.add('_langSelected');
    langRu.classList.remove('_langSelected');
}

translateRu = () => {
    for (let i = 0; i < translateArr.length; i++) {
        translateArr[i].innerText = translateArr[i].value;
    }
    placeholder1.placeholder = 'Введите E-mail';
    placeholder2.placeholder = 'Введите адрес';
    placeholder3.placeholder = 'Введите E-mail';
    placeholder4.placeholder = 'Введите E-mail';
    langRu.classList.add('_langSelected');
    langEng.classList.remove('_langSelected');
}

showHidden = () => {
    wrapperHidden.style.display = 'block';
    wrapper.style.display = 'none';
}
closeHidden = () => {
    wrapperHidden.style.display = 'none';
    wrapper.style.display = 'block';
}


wordsRu();

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);


pointOne.addEventListener('mouseover', displayBlock)
pointOne.addEventListener('mouseout', displayNone)

pointTwo.addEventListener('mouseover', displayBlock)
pointTwo.addEventListener('mouseout', displayNone)

pointThree.addEventListener('mouseover', displayBlock)
pointThree.addEventListener('mouseout', displayNone)

pointFour.addEventListener('mouseover', displayBlock)
pointFour.addEventListener('mouseout', displayNone)

pointFive.addEventListener('mouseover', displayBlock)
pointFive.addEventListener('mouseout', displayNone)

langEng.addEventListener('click', translateEn);
langRu.addEventListener('click', translateRu)


burgerHeader.addEventListener('click', showHidden)
burgerHidden.addEventListener('click', closeHidden)

