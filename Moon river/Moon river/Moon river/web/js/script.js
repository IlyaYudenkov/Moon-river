let offset = 0;
let active = 0;
let dots = document.querySelectorAll('.dots')

const images = document.querySelector('.sliderpage-slider-container')
const prev = document.querySelector('.pagination__prev')
const next = document.querySelector('.pagination__next')

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

const burgerHeader = document.querySelector('.header__burger')
const burgerHidden = document.querySelector('.hidden__burger')
const wrapperHidden = document.querySelector('.wrapper-hidden')


const jewelry = document.querySelector('.jewelry')
const jewelryTitle = document.querySelector('.jewelry__title')
const jewelryMenu = document.querySelector('.jewelry__menu')
const clock = document.querySelector('.clock')
const clockMenu = document.querySelector('.clock__menu')
const flavors = document.querySelector('.flavors')
const brands = document.querySelector('.brands')
const leather = document.querySelector('.leather')
const wedding = document.querySelector('.wedding')
const other = document.querySelector('.other')

nextSlide = () =>{
    dots[active].classList.remove('_active')
    if(active + 1 == dots.length){
        active = 0;
        prev.disabled = 'true';
        prev.classList.add('_disabled')
    }
    else{
        active++;
        prev.disabled = false;
        prev.classList.remove('_disabled')
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
    if (active - 1 == 0){
            prev.disabled = 'true';
            prev.classList.add('_disabled')
    }
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


displayBlock = () => {
    pointOneAddress.style.display = 'block';
}
displayNone = () => {
    pointOneAddress.style.display = 'none';
}
displayBlock2 = () => {
    pointTwoAddress.style.display = 'block';
}
displayNone2 = () => {
    pointTwoAddress.style.display = 'none';
}
displayBlock3 = () => {
    pointThreeAddress.style.display = 'block';
}
displayNone3 = () => {
    pointThreeAddress.style.display = 'none';
}
displayBlock4 = () => {
    pointFourAddress.style.display = 'block';
}
displayNone4 = () => {
    pointFourAddress.style.display = 'none';
}
displayBlock5 = () => {
    pointFiveAddress.style.display = 'block';
}
displayNone5 = () => {
    pointFiveAddress.style.display = 'none';
}

showHidden = () =>{
    wrapperHidden.style.display = 'block'
}
closeHidden = () => {
    wrapperHidden.style.display = 'none'
}

showJewelry = () => {
    jewelryMenu.style.display = 'flex';
}
closeJewelry = () => {
    jewelryMenu.style.display = 'none';
}

showClock = () => {
    clockMenu.style.display = 'flex';
}
closeClock = () => {
    clockMenu.style.display = 'none';
}
    

showFlavors = () => {
    sectionsHidden.style.display = 'flex';
}

closeFlavors = () =>{
    sectionsHidden.style.display = 'none';
}

showBrands = () => {
    sectionsHidden.style.display = 'flex';
}

closeBrands = () =>{
    sectionsHidden.style.display = 'none';
}

showLeather = () => {
    sectionsHidden.style.display = 'flex';
}

closeLeather= () =>{
    sectionsHidden.style.display = 'none';
}

showWedding = () => {
    sectionsHidden.style.display = 'flex';
}
closeWedding = () => {
    sectionsHidden.style.display = 'none';
}

showOther = () => {
    sectionsHidden.style.display = 'flex';
}
closeOther = () => {
    sectionsHidden.style.display = 'none';
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);


pointOne.addEventListener('mouseover', displayBlock)
pointOne.addEventListener('mouseout', displayNone)

pointTwo.addEventListener('mouseover', displayBlock2)
pointTwo.addEventListener('mouseout', displayNone2)

pointThree.addEventListener('mouseover', displayBlock3)
pointThree.addEventListener('mouseout', displayNone3)

pointFour.addEventListener('mouseover', displayBlock4)
pointFour.addEventListener('mouseout', displayNone4)

pointFive.addEventListener('mouseover', displayBlock5)
pointFive.addEventListener('mouseout', displayNone5)



burgerHeader.addEventListener('click', showHidden)
burgerHidden.addEventListener('click', closeHidden)



jewelry.addEventListener('mouseover', showJewelry)
jewelryMenu.addEventListener('mouseout', closeJewelry)

/*clock.addEventListener('mouseover', showClock)
clockMenu.addEventListener('mouseout', closeClock)

flavors.addEventListener('mouseenter', showFlavors)
sectionsHidden.addEventListener('mouseleave', closeFlavors)

brands.addEventListener('mouseenter', showBrands)
sectionsHidden.addEventListener('mouseleave', closeBrands)

leather.addEventListener('mouseenter', showLeather)
sectionsHidden.addEventListener('mouseleave', closeLeather)

wedding.addEventListener('mouseenter', showWedding)
sectionsHidden.addEventListener('mouseleave', closeWedding)

other.addEventListener('mouseenter', showOther)
sectionsHidden.addEventListener('mouseleave', closeOther)*/
