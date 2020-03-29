const MENU = document.getElementById('menu');

const submit=document.getElementById('submit');
const modal=document.querySelector('.modal');
const SUBJECT=document.getElementById('mSubject');
const DESC=document.getElementById('mDesc');
const buttons=document.querySelectorAll('.button-container button');
const btnContainer=document.querySelector('.button-container');
const imgContainer=document.querySelector('.image-container');
const images=document.querySelectorAll('.image-container img');
let lishki = MENU.querySelectorAll('a');
let sections = document.querySelectorAll('.wrapper > section');
let vbScreen = document.getElementById('black_vertical');
let hbScreen = document.getElementById('black_horizontal');
const carousel=document.querySelector('.carousel');
const carouselImages=document.querySelectorAll('.carousel > div');
const prevBtn = document.querySelector('.slider__btn_left');
const nextBtn=document.querySelector('.slider__btn_right');
const okBtn=document.querySelector('.modal__content button');
let counter=1;
let size=carouselImages[0].clientWidth;
let shifter=0;
let menuOpen=false;
const burger=document.querySelector('.burger');
var mq = window.matchMedia('(max-width: 768px)');
const header=document.querySelector('.header');
const navigation = document.querySelector('.navigation');
const navItem=document.querySelectorAll('.navigation__item');

function myFunction() {
    
    if (mq.matches) {
       menuOpen=false;
        
    } else {
        header.classList.remove('header__mob');
        navigation.classList.remove('navigation__mob');
        document.querySelector('.header__bottom').classList.remove('bottom__mob');
        navItem.forEach(el => el.classList.add('navigation__item'));
        burger.style.transform = "rotate(0deg)";
        document.querySelector('.wrapper').style.opacity = "1";
        
    }
  
}
    window.addEventListener('resize', function () {
        size = carouselImages[0].clientWidth;
       
        carousel.style.transition = 'none';
        prevBtn.style.transition = 'none';
        nextBtn.style.transition = 'none';
        
        carousel.style.transform = 'translateX(' + (-size) * counter + 'px)';
        prevBtn.style.transform = 'translateX(' + (size) * counter + 'px)';
        nextBtn.style.transform = 'translateX(' + (size) * counter + 'px)';
    mq.addListener(myFunction());
});

 
burger.addEventListener('click', () => {
    
    if (!menuOpen) {
        burger.style.transform = "rotate(90deg)";
        header.classList.add('header__mob');
        navigation.classList.add('navigation__mob');
        document.querySelector('.header__bottom').classList.add('bottom__mob');
        navItem.forEach(el => el.classList.remove('navigation__item'));
        document.querySelector('.wrapper').style.opacity="0.5";

    } else {
        burger.style.transform = "rotate(0deg)";
        header.classList.remove('header__mob');
        navigation.classList.remove('navigation__mob');
        document.querySelector('.header__bottom').classList.remove('bottom__mob');
        navItem.forEach(el => el.classList.add('navigation__item'));
        document.querySelector('.wrapper').style.opacity = "1";
    }
    menuOpen = !menuOpen;
});




submit.addEventListener('click',()=>{
  
    if(ValidateEmailAndName()){
       
    var subject=document.forms["contact"]["subject"].value;
    var description=document.forms["contact"]["textarea"].value;

    if(subject==""){
        SUBJECT.innerHTML="No subject";
    }else{
        SUBJECT.innerHTML="Subject: "+subject;
    }
    if (description == "") {
        DESC.innerHTML = "No description";
    } else {
        DESC.innerHTML = "Description: "+description;
    }
    modal.style.display="block";
}
});

okBtn.addEventListener('click',()=>{
    modal.style.display="none";
    document.getElementById('subject').value="";
    document.forms['contact']['textarea'].value="";
    document.forms['contact']['name'].value = "";
    document.forms['contact']['email'].value = "";
});

btnContainer.addEventListener('click',(event)=>{
    if (!event.target.classList.contains('active') && event.target.classList.contains('portfolio__btn')){
    buttons.forEach(el=>el.classList.remove('active'));
    event.target.classList.add('active');
    if(shifter===images.length){
        console.log(shifter);
        shifter=0;
    }
    
    for(let i=0;i<1;i++){
        imgContainer.appendChild(images[shifter]);
        
        shifter++;
    }
}
});

imgContainer.addEventListener('click',(event)=>{
    if (!event.target.classList.contains('selected') && event.target.classList.contains('portfolio__img')){
        images.forEach(el => el.classList.remove('selected'));
        event.target.classList.add('selected');
    }

    
});

imgContainer.addEventListener('mouseover',(event)=>{
    if (event.target.classList.contains('portfolio__img')) {
        
        event.target.classList.add('hover');
    }
});
imgContainer.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('portfolio__img')) {
        images.forEach(el => el.classList.remove('hover'));
        
    }
});





carousel.style.transform='translateX('+(-size)*counter+'px)';
prevBtn.style.transform = 'translateX(' + (size) * counter + 'px)';
nextBtn.style.transform = 'translateX(' + (size) * counter + 'px)';

nextBtn.addEventListener('click',()=>{
  if(counter>=carouselImages.length-1) return;
  
        carousel.style.transition = 'transform 0.4s ease-in-out';
    prevBtn.style.transition = 'transform 0.4s ease-in-out';
    nextBtn.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carousel.style.transform = 'translateX(' + (-size) * counter + 'px)';
        prevBtn.style.transform = 'translateX(' + (size) * counter + 'px)';
        nextBtn.style.transform = 'translateX(' + (size) * counter + 'px)';
    


});
prevBtn.addEventListener('click', () => {
    if(counter<=0) return;
    carousel.style.transition = 'transform 0.4s ease-in-out';
    prevBtn.style.transition = 'transform 0.4s ease-in-out';
    nextBtn.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carousel.style.transform = 'translateX(' + (-size) * counter + 'px)';
    prevBtn.style.transform = 'translateX(' + (size) * counter + 'px)';
    nextBtn.style.transform = 'translateX(' + (size) * counter + 'px)';
});


carousel.addEventListener('transitionend', function () {
    console.log('Transition end\n')
    console.log(counter);
    if (carouselImages[counter].className === 'false_green') {
        carousel.style.transition = 'none';
        prevBtn.style.transition = 'none';
        nextBtn.style.transition = 'none';
        counter = carouselImages.length - 2;
        carousel.style.transform = 'translateX(' + (-size) * counter + 'px)';
        prevBtn.style.transform = 'translateX(' + (size) * counter + 'px)';
        nextBtn.style.transform = 'translateX(' + (size) * counter + 'px)';
    }
    if (carouselImages[counter].className === 'false_red') {
        carousel.style.transition = 'none';
        prevBtn.style.transition = 'none';
        nextBtn.style.transition = 'none';
        counter = carouselImages.length - counter;
        carousel.style.transform = 'translateX(' + (-size) * counter + 'px)';
        prevBtn.style.transform = 'translateX(' + (size) * counter + 'px)';
        nextBtn.style.transform = 'translateX(' + (size) * counter + 'px)';
    }
});

 



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



function ValidateEmailAndName() 
{
    
 if ((/^\w+([\.-]?\w+)*@\w+/.test(document.forms['contact']['email'].value)) && document.forms['contact']['name'].value!=="")
  {
    return (true)
  }
   
    return (false)
}