const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) { //Close Hamburger Element
        header.classList.remove('open');

        fadeElems.forEach(element => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }else {
        header.classList.add('open');

        fadeElems.forEach(element => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        

    }
});

// Navmenu Background-color change

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;

    if (offset > 75) {
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
});