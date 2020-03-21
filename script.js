const MENU = document.getElementById('menu');

let lishki = MENU.querySelectorAll('a');
let sections = document.querySelectorAll('.wrapper > section');
let vbScreen = document.getElementById('black_vertical');
let hbScreen = document.getElementById('black_horizontal');



menu.addEventListener('click', (event) => {
    lishki.forEach(el => el.classList.remove('current'));
    event.target.classList.add('current');

});

document.addEventListener('scroll', () => {
    const curPos = window.scrollY;
    sections.forEach((el, index) => {
        if (curPos >= el.offsetTop - 80 && (el.offsetTop - 80 + el.offsetHeight > curPos)) {
            lishki.forEach(el => el.classList.remove('current'));
            lishki[index].classList.add('current');
        }
    });
});

document.getElementsByClassName('slider__phone_ver')[0].addEventListener('click',(event)=>{
   if(vbScreen.style.zIndex==0){
       vbScreen.style.zIndex = '1';
   }
   else{
       vbScreen.style.zIndex = '0';
   }
});
vbScreen.addEventListener('click',(event)=>{
    vbScreen.style.zIndex='0';
});

document.getElementsByClassName('slider__phone_gor')[0].addEventListener('click', (event) => {
    
    if (hbScreen.style.zIndex == 0) {
        hbScreen.style.zIndex = '1';
    }
    else {
        hbScreen.style.zIndex = '0';
    }
});
hbScreen.addEventListener('click', (event) => {
    hbScreen.style.zIndex = '0';
});