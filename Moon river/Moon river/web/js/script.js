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
const jewelryMenu = document.querySelector('.jewelry__menu')
const clock = document.querySelector('.clock')
const clockMenu = document.querySelector('.clock__menu')
const flavours = document.querySelector('.flavours')
const flavoursMenu = document.querySelector('.flavours__menu')
const brands = document.querySelector('.brands')
const brandsMenu = document.querySelector('.brands__menu')
const leather = document.querySelector('.leather')
const leatherMenu = document.querySelector('.leather__menu')
const wedding = document.querySelector('.wedding')
const weddingMenu = document.querySelector('.wedding__menu')
const other = document.querySelector('.other')
const otherMenu = document.querySelector('.other__menu')
const sections = document.querySelector('.sections')
const footer = document.querySelector('.hidden__footer')
const wrapper = document.querySelector('.wrapper')

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
    wrapperHidden.style.display = 'block';
    wrapper.style.display = 'none';
}
closeHidden = () => {
    wrapperHidden.style.display = 'none';
    wrapper.style.display = 'block';
}

showJewelry = () => {
        jewelryMenu.style.display = 'flex';
        sections.style.display = 'block';
        closeClock();
        closeBrands();
        closeFlavours();
        closeLeather();
        closeWedding();
        closeOther();
}
closeJewelry = () => {
        jewelryMenu.style.display = 'none';
        footer.style.display = 'block';
}

showClock = () => {
    clockMenu.style.display = 'flex';
    sections.style.display = 'block';
    closeJewelry();
    closeBrands();
    closeFlavours();
    closeLeather();
    closeWedding();
    closeOther();
}
closeClock = () => {
    clockMenu.style.display = 'none';  
    footer.style.display = 'block';  
}
    

showFlavours = () => {
    flavoursMenu.style.display = 'flex';
    sections.style.display = 'block';
    closeJewelry();
    closeClock();
    closeBrands();
    closeLeather();
    closeWedding();
    closeOther();
}

closeFlavours = () =>{
    flavoursMenu.style.display = 'none';
    footer.style.display = 'block';
}

showBrands = () => {
    brandsMenu.style.display = 'flex';
    sections.style.display = 'block';
    closeJewelry();
    closeClock();
    closeFlavours();
    closeLeather();
    closeWedding();
    closeOther();
}

closeBrands = () =>{
    brandsMenu.style.display = 'none';
    footer.style.display = 'block';
}

showLeather = () => {
    leatherMenu.style.display = 'flex';
    sections.style.display = 'block';
    closeJewelry();
    closeClock();
    closeFlavours();
    closeBrands();
    closeWedding();
    closeOther();
}

closeLeather = () =>{
    leatherMenu.style.display = 'none';
    footer.style.display = 'block';
}

showWedding = () => {
    weddingMenu.style.display = 'flex';
    sections.style.display = 'block';
    closeJewelry();
    closeClock();
    closeFlavours();
    closeBrands();
    closeLeather();
    closeOther();
}
closeWedding = () => {
    weddingMenu.style.display = 'none';
    footer.style.display = 'block';
}

showOther = () => {
    otherMenu.style.display = 'flex';
    sections.style.display = 'block';
    closeJewelry();
    closeClock();
    closeFlavours();
    closeBrands();
    closeWedding();
}
closeOther = () => {
    otherMenu.style.display = 'none';
    footer.style.display = 'block';
}

closeFooter = () => {
    footer.style.display = 'none';
}


closeSections = () => { 
    sections.style.display = 'none';
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
jewelryMenu.addEventListener('mouseout', closeSections)
jewelry.addEventListener('mouseover', closeFooter)

clock.addEventListener('mouseover', showClock)
clockMenu.addEventListener('mouseout', closeClock)
clockMenu.addEventListener('mouseout', closeSections)
clock.addEventListener('mouseover', closeFooter)

flavours.addEventListener('mouseover', showFlavours)
flavoursMenu.addEventListener('mouseout', closeFlavours)
flavoursMenu.addEventListener('mouseout', closeSections)
flavours.addEventListener('mouseover', closeFooter)

brands.addEventListener('mouseover', showBrands)
brandsMenu.addEventListener('mouseout', closeBrands)
brandsMenu.addEventListener('mouseout', closeSections)
brands.addEventListener('mouseover', closeFooter)

leather.addEventListener('mouseover', showLeather)
leatherMenu.addEventListener('mouseout', closeLeather)
leatherMenu.addEventListener('mouseout', closeSections)
leather.addEventListener('mouseover', closeFooter)

wedding.addEventListener('mouseover', showWedding)
weddingMenu.addEventListener('mouseout', closeWedding)
weddingMenu.addEventListener('mouseout', closeSections)
wedding.addEventListener('mouseover', closeFooter)

other.addEventListener('mouseover', showOther)
otherMenu.addEventListener('mouseout', closeOther)
otherMenu.addEventListener('mouseout', closeSections)
other.addEventListener('mouseover', closeFooter)
