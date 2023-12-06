console.log('Checking validation of pages : +18\n The layout matches the desing: +40\n CSS Requirements: +10\n Interactivity: +32\n ALL Score: 100 points')


//! VARIABLES
const BTN_BURGER = document.querySelector('.btn-burger');


window.onload = function () {
    burgerClick();
}


//!     FUNCTIONS
const burgerClick =() => {
    BTN_BURGER.addEventListener('click', (event) => {
        BTN_BURGER.classList.toggle('btn-burger-active');
        // removeClassToClick(BTN_BURGER,'btn-burger-active');


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



