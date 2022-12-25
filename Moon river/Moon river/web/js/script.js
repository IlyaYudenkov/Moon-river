let offset = 0;
let active = 0;
let dots = document.querySelectorAll('.dots')

const images = document.querySelector('.sliderpage-slider-container')
const prev = document.querySelector('.pagination__prev')
const next = document.querySelector('.pagination__next')


nextSlide = () =>{
    dots[active].classList.remove('_active')
    if(active + 1 == dots.length){
        active = 0;
    }
    else{
        active++;
    }
    dots[active].classList.add('_active')
    offset += 223;
    if(offset > 1250){
        offset = 0;
    }
    images.style.left = -offset + 'px';

}

prevSlide = () =>{
    dots[active].classList.remove('_active')
    if(active - 1 == -1 ){
        active = 0;
    }
    else{
        active--;
    }
    dots[active].classList.add('_active') 
    offset -= 223;
    if(offset < 0) {
        offset = 0;
    }
    images.style.left = -offset + 'px';
}
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
