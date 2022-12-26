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



const pointOne = document.querySelector('.location__point')
const pointOneAddress = document.querySelector('.pointOne')
const pointTwo = document.querySelector('.location__point2')
const pointTwoAddress = document.querySelector('.pointTwo')
const pointThree = document.querySelector('.location__point3')
const pointThreeAddress = document.querySelector('.pointThree')
const pointFour = document.querySelector('.location__point4')
const pointFourAddress = document.querySelector('.pointFour')
const pointFive = document.querySelector('.location__point5')
const pointFiveAddress = document.querySelector('.pointFive')



pointOne.addEventListener('mouseover', () => {
    pointOneAddress.style.display = 'block';
})
pointOne.addEventListener('mouseout', () => {
    pointOneAddress.style.display = 'none';
})

pointTwo.addEventListener('mouseover', () => {
    pointTwoAddress.style.display = 'block';
})
pointTwo.addEventListener('mouseout', () => {
    pointTwoAddress.style.display = 'none';
})
pointThree.addEventListener('mouseover', () => {
    pointThreeAddress.style.display = 'block';
})
pointThree.addEventListener('mouseout', () => {
    pointThreeAddress.style.display = 'none';
})

pointFour.addEventListener('mouseover', () => {
    pointFourAddress.style.display = 'block';
})
pointFour.addEventListener('mouseout', () => {
    pointFourAddress.style.display = 'none';
})

pointFive.addEventListener('mouseover', () => {
    pointFiveAddress.style.display = 'block';
})
pointFive.addEventListener('mouseout', () => {
    pointFiveAddress.style.display = 'none';
})
