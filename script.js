const menu = document.getElementById('header');

menu.addEventListener('click', (event) => {
    menu.querySelectorAll('li').forEach(el => el.classList.remove('current'));
    event.target.classList.add('current');
    

});