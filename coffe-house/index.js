console.log('Checking validation of pages : +18\n The layout matches the desing: +40\n CSS Requirements: +10\n Interactivity: +32\n ALL Score: 100 points')


//! VARIABLES
const BTN_BURGER = document.querySelector('.btn-burger');
const MAIN = document.querySelector('.main');
const BURGER_MENU = document.querySelector('.navigation');
window.onload = function () {
    burgerClick();
}


//!     FUNCTIONS
const burgerClick =() => {
    BTN_BURGER.addEventListener('click', (event) => {
        BTN_BURGER.classList.toggle('btn-burger-active');
        BURGER_MENU.classList.toggle('openBurgerMenu');






        removeClassToClick(BTN_BURGER,'btn-burger-active');
        // removeClassToClick(BURGER_MENU,'openBurgerMenu');


    })


}
const removeClassToClick = (btn,clas) => {         //*close btn-burger
    document.addEventListener('click', (e) => {
        const withBtn = e.composedPath().includes(btn);
        if(!withBtn) {
            btn.classList.remove(clas);
        }
    })

}



