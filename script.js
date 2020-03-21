const MENU = document.getElementById('menu');

let lishki = MENU.querySelectorAll('a');
let sections = document.querySelectorAll('.wrapper > section');



menu.addEventListener('click', (event) => {
    lishki.forEach(el => el.classList.remove('current'));
    event.target.classList.add('current');

});

document.addEventListener('scroll', () => {
    const curPos = window.scrollY;
    sections.forEach((el, index) => {
        if (curPos >= el.offsetTop - 80 && (el.offsetTop - 80 + el.offsetHeight > curPos)) {
            console.log(el.offsetTop + "  " + curPos + "  " + el.offsetHeight);
            lishki.forEach(el => el.classList.remove('current'));
            lishki[index].classList.add('current');
        }
    });
});

document.get