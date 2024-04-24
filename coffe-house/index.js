console.log(
  "Checking validation of pages : +18\n The layout matches the desing: +40\n CSS Requirements: +10\n Interactivity: +32\n ALL Score: 100 points"
);

//! IMPORT


//! VARIABLES
const BTN_BURGER = document.querySelector(".btn-burger");
const MAIN = document.querySelector(".main");
const BURGER_MENU = document.querySelector(".navigation");
const BR_MENU_LINKS = document.querySelector(".list");
const BTN_MENU_LINK = document.querySelector(".header__menu");
const btnPagin = document.querySelectorAll(".pagin__btn");
const SLIDER_CONTAINER = document.querySelector(".favCoffee__container");
export const MN_CATALOG = document.querySelector(".menu__catalog");

window.onload = function () {
  slideGenerated(dataSlides);
  paginBtnMove();
  setInterval(() => {
    paginBtnMove();
  }, 15000);
  burgerClick();
  clickedMenuLinks();

};

//!     FUNCTIONS
const burgerClick = () => {
  BTN_BURGER.addEventListener("click", (e) => {
    BTN_BURGER.classList.toggle("btn-burger-active");
    BURGER_MENU.classList.toggle("openBurgerMenu");
    closeBurgerMenu(BURGER_MENU, "openBurgerMenu");

  });
};

const closeBurgerMenu = (menu, clas) => {
  document.addEventListener("click", (e) => {
    const withMenu = e
      .composedPath()
      .includes(document.querySelectorAll("nav-list"));
    if (withMenu) {
      menu.classList.toggle(clas);
    }
  });
};
const clickedMenuLinks = () => {
  //*when clicked burger_menu_ links
  const childArr = document.querySelectorAll(".list");
  document.querySelector(".nav-list").addEventListener("click", (e) => {
    if (e.target == document.querySelector("header__menu-activePage")) {
      e.preventDefault();
    }
    childArr.forEach((el) => {
      let withTarget = e.composedPath().includes(el);

      if (withTarget || e.composedPath().includes(BTN_MENU_LINK)) {
        BURGER_MENU.classList.toggle("openBurgerMenu");
        BTN_BURGER.classList.toggle("btn-burger-active");
      }
    });
  });
};
const clickBtnSlider = () => {
  SLIDER_CONTAINER.addEventListener("click", (ev) => {
    let click = ev.target;
    let withBtnRight = click.classList.contains("btn-slider__right");
    let withBtnLeft = click.classList.contains("btn-slider__left");

    if (withBtnRight) {
      document.querySelectorAll(".slide").forEach((el) => {
        let slidePosition = el.style.right;
        slidePosition = slidePosition.replace(/[a-zа-яё]/gi, "");
        slidePosition = Number(slidePosition);
        slidePosition += 480;
        let maxPositionX = 480 * document.querySelectorAll(".slide").length - 1;
        if (slidePosition > maxPositionX) {
          slidePosition = 0;
        }
        el.style.right = `${slidePosition}px`;
      });
    } else if (withBtnLeft) {
      document.querySelectorAll(".slide").forEach((el) => {
        let slidePosition = el.style.right;
        slidePosition = slidePosition.replace(/[a-zа-яё]/gi, "");
        slidePosition = Number(slidePosition);
        slidePosition -= 480;
        let maxPositionX =
          -480 * document.querySelectorAll(".slide").length - 1;
        if (slidePosition < maxPositionX) {
          slidePosition = 0;
        }
        el.style.right = `${slidePosition}px`;
      });
    }
  });
};
const paginBtnMove = () => {
  let posX = 0;
  const slide = document.querySelectorAll(".slide");
  slide.forEach((el) => {
    el.classList.add("slide-move");
  });
  clickBtnSlider();

  const paginMove1 = setTimeout(() => {
    btnPagin[2].classList.remove("animBtn");
    slide.forEach((el) => {
      el.style.right = "0";
      el.style.transition = "right .5s ease-in";
    });
    btnPagin[0].classList.add("animBtn");
  }, 0);
  const paginMove2 = setTimeout(() => {
    btnPagin[0].classList.remove("animBtn");
    posX += 480;
    slide.forEach((el) => {
      el.style.right = `${posX}px`;
      el.style.transition = "right .5s ease-in";
    });
    btnPagin[1].classList.add("animBtn");
  }, 5000);
  const paginMove3 = setTimeout(() => {
    btnPagin[1].classList.remove("animBtn");
    posX += 480;
    slide.forEach((el) => {
      el.style.right = `${posX}px`;
      el.style.transition = "right .5s ease-in";
    });
    btnPagin[2].classList.add("animBtn");
  }, 10000);
};
const slideGenerated = (dataSlides) => {
  dataSlides.forEach((el) => {
    constructorSlide(
      el.id,
      el.className,
      el.imgToSourse,
      el.title,
      el.text,
      el.price
    );
  });
};

const constructorSlide = (id, className, urlImg, title, text, price) => {
  const div = document.createElement("div");
  div.id = id;
  div.className = className;
  document.querySelector(".favCoffee__slider").appendChild(div);
  const imgToSlide = document.createElement("img");
  imgToSlide.src = urlImg;
  div.appendChild(imgToSlide);
  const nameSlide = document.createElement("h4");
  nameSlide.className = "slide__subTitle";
  nameSlide.textContent = title;
  div.appendChild(nameSlide);
  const textSlide = document.createElement("p");
  textSlide.className = "slide__text";
  textSlide.textContent = text;
  div.appendChild(textSlide);
  const priceSlide = document.createElement("span");
  priceSlide.className = "slide__price";
  priceSlide.textContent = price;
  div.appendChild(priceSlide);
};

//!     DATA
const dataSlides = [
  {
    id: "1",
    className: "slide frappuccino",
    imgToSourse: "./assets/png/coffee-slider-1.png",
    title: "S’mores Frappuccino",
    text: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
    price: "$5.50",
  },
  {
    id: "2",
    className: "slide macchiato",
    imgToSourse: "./assets/png/coffee-slider-2.png",
    title: "Caramel Macchiato",
    text: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
    price: "$5.00",
  },
  {
    id: "3",
    className: "slide iceCoffee",
    imgToSourse: "./assets/png/coffee-slider-3.png",
    title: "Ice coffee",
    text: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
    price: "$4.50",
  },
];
