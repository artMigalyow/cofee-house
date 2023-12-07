console.log('Checking validation of pages : +18\n The layout matches the desing: +40\n CSS Requirements: +10\n Interactivity: +32\n ALL Score: 100 points')


//! VARIABLES
const BTN_BURGER = document.querySelector('.btn-burger');
const MAIN = document.querySelector('.main');
const BURGER_MENU = document.querySelector('.navigation');
const BR_MENU_LINKS = document.querySelector('.list')
const BTN_MENU_LINK = document.querySelector('.menu-link')
window.onload = function () {
    burgerClick();
    clickedMenuLinks();

}


//!     FUNCTIONS
const burgerClick =() => {
    BTN_BURGER.addEventListener('click', (e) => {
        BTN_BURGER.classList.toggle('btn-burger-active');
        BURGER_MENU.classList.toggle('openBurgerMenu');
        closeBurgerMenu(BURGER_MENU,"openBurgerMenu");
        // removeClassToClick(BTN_BURGER,'btn-burger-active');        // removeClassToClick(BURGER_MENU,'openBurgerMenu');
    })


}
const removeClassToClick = (btn,clas) => {         //*close btn-burger

    document.addEventListener('click', (e) => {
        const withBtn = e.composedPath().includes();
        if(!withBtn) {
            btn.classList.remove(clas);
        }
    })

}
const closeBurgerMenu = (menu,clas) => {
    document.addEventListener('click', (e) => {
        const withMenu = e.composedPath().includes(document.querySelectorAll('nav-list'));
        if(withMenu){
            menu.classList.toggle(clas);
        }
    })
}
const clickedMenuLinks = () => {    //*when clicked burger_menu_ links
    const childArr = document.querySelectorAll('.list');
    document.querySelector('.nav-list').addEventListener('click', (e) => {
        childArr.forEach(el => {
            let withTarget = e.composedPath().includes(el)
            if (withTarget || e.composedPath().includes(BTN_MENU_LINK)) {
                BURGER_MENU.classList.toggle('openBurgerMenu');
                removeClassToClick(BTN_BURGER,'btn-burger-active');
            }
        })
        })
}



