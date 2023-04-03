const images = document.querySelector('.sliderpage-slider-container')
const prev = document.querySelector('.pagination__prev')
const next = document.querySelector('.pagination__next')

const langRu = document.querySelector('.lang__ru')
const langEng = document.querySelector('.lang__eng')

let translateArr = [],
inputArr = [];

const wrapperHidden = document.querySelector('.wrapper-hidden')
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

wordsRu = () => {
    document.querySelectorAll('div, a, p').forEach(el => {
        if(el.dataset.translate != undefined){
            translateArr.push(el)
        }
        for (let i = 0; i < translateArr.length; i++) {
            translateArr[i].value = translateArr[i].innerText;
        }
    })
    document.querySelectorAll('input').forEach(el => {
        inputArr.push(el)
    })
        for(let p = 0; p < inputArr.length; p++){
            inputArr[p].dataset.input = inputArr[p].placeholder;
        }
}

translateEn = () => {
    for (let i = 0; i < translateArr.length; i++) {
        translateArr[i].innerText = translateArr[i].dataset.translate;
    }
    document.querySelectorAll('input').forEach(el => {
        el.placeholder = el.dataset.translate;
    })
    langEng.classList.add('_langSelected');
    langRu.classList.remove('_langSelected');
}

translateRu = () => {
    for (let i = 0; i < translateArr.length; i++) {
        translateArr[i].innerText = translateArr[i].value;
    }
    for(let p = 0; p < inputArr.length; p++){
        inputArr[p].placeholder = inputArr[p].dataset.input;
    }
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

langEng.addEventListener('click', translateEn);
langRu.addEventListener('click', translateRu)

document.querySelector('.header__burger').addEventListener('click', showHidden)
document.querySelector('.hidden__burger').addEventListener('click', closeHidden)

