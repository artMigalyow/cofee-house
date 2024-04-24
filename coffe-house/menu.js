import { clickedCard, showPopup } from "./src/cerated-popup.js";

//! VARIABLES-----

const PAGINATION = document.querySelector(".menu-btn__container");
const collectionCard = document.querySelectorAll(".menu__card");
const collectionCoffeeCard = document.querySelectorAll(".card-coffee");

const collectionBtnFilter = document.querySelectorAll(".tab-item");
const menuCard = document.querySelector(".menu__card");
const btnCoffee = document.querySelector(".btn_coffee");
const btnTea = document.querySelector(".btn_tea");
const btnDessert = document.querySelector(".btn_dessert");
const mn_catalog = document.querySelector(".menu__catalog");

//!  DATA ------
export const dataCardCoffee = [
  {
    id: "irish-coffee",
    className: "card-coffee",
    imgToSource: "./assets/png/coffee-1.png",
    imgAlt: "Irish coffee",
    title: "Irish coffee",
    textCard:
      "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    priceCard: "7.00",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: ["Sugar", "Cinnamon", "Syrup"],
    },
  },
  {
    id: "kahlua-coffee",
    className: "card-coffee",
    imgToSource: "./assets/png/coffee-2.png",
    imgAlt: "Kahlua coffee",
    title: "Kahlua coffee",
    textCard:
      "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    priceCard: "7.00",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: ["Sugar", "Cinnamon", "Syrup"],
    },
  },
  {
    id: "honey-raf",
    className: "card-coffee",
    imgToSource: "./assets/png/coffee-3.png",
    imgAlt: "Honey raf",
    title: "Honey raf",
    textCard: "Espresso with frothed milk, cream and aromatic honey",
    priceCard: "5.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: ["Sugar", "Cinnamon", "Syrup"],
    },
  },
  {
    id: "ice-cappuccino",
    className: "card-coffee",
    imgToSource: "./assets/png/coffee-4.png",
    imgAlt: "Ice cappuccino",
    title: "Ice cappuccino",
    textCard: "Cappuccino with soft thick foam in summer version with ice",
    priceCard: "5.00",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: ["Sugar", "Cinnamon", "Syrup"],
    },
  },
  {
    id: "espresso",
    className: "card-coffee",
    imgToSource: "./assets/png/coffee-5.png",
    imgAlt: "Espresso",
    title: "Espresso",
    textCard: "Classic black coffee",
    priceCard: "4.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: ["Sugar", "Cinnamon", "Syrup"],
    },
  },
  {
    id: "latte",
    className: "card-coffee",
    imgToSource: "./assets/png/coffee-6.png",
    imgAlt: "Latte",
    title: "Latte",
    textCard:
      "Espresso coffee with the addition of steamed milk and dense milk foam",
    priceCard: "5.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: [, "Sugar", "Cinnamon", "Syrup"],
    },
  },
  {
    id: "latte-macchiato ",
    className: "card-coffee",
    imgToSource: "./assets/png/coffee-7.png",
    imgAlt: "Latte macchiato ",
    title: "Latte macchiato ",
    textCard: "Espresso with frothed milk and chocolate",
    priceCard: "5.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: ["Sugar", "Cinnamon", "Syrup"],
    },
  },
  {
    id: "caffe-with cognac",
    className: "card-coffee",
    imgToSource: "./assets/png/coffee-8.png",
    imgAlt: "Caffe with cognac",
    title: "Caffe with cognac",
    textCard:
      "Fragrant black coffee with cognac Irish whiskey and whipped milk",
    priceCard: "6.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: ["Sugar", "Cinnamon", "Syrup"],
    },
  },
];
export const dataCardTea = [
  {
    id: "moroccan",
    className: "menu__card card-tea",
    imgToSource: "./assets/png/tea-1.png",
    imgAlt: "Moroccan",
    title: "Moroccan",
    textCard:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    priceCard: "4.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: ["Sugar", "Lemon", "Syrup"],
    },
  },
  {
    id: "ginger",
    className: "menu__card card-tea",
    imgToSource: "./assets/png/tea-2.png",
    imgAlt: "Ginger",
    title: "Ginger",
    textCard: "Original black tea with fresh ginger, lemon and honey",
    priceCard: "5.00",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: ["Sugar", "Lemon", "Syrup"],
    },
  },
  {
    id: "cranberry",
    className: "menu__card card-tea",
    imgToSource: "./assets/png/tea-3.png",
    imgAlt: "Cranberry",
    title: "Cranberry",
    textCard: "Invigorating black tea with cranberry and honey",
    priceCard: "5.00",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: ["Sugar", "Lemon", "Syrup"],
    },
  },
  {
    id: "sea-buckthorn",
    className: "menu__card card-tea",
    imgToSource: "./assets/png/tea-4.png",
    imgAlt: "Sea buckthorn",
    title: "Sea buckthorn",
    textCard:
      "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    priceCard: "5.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "drink",
      size: ["S", "M", "L"],
      additives: ["Sugar", "Lemon", "Syrup"],
    },
  },
];
export const dataCardDesserts = [
  {
    id: "marble-cheesecake",
    className: "menu__card card-desserts",
    imgToSource: "./assets/png/dessert-1.png",
    imgAlt: "Marble cheesecake",
    title: "Marble cheesecake",
    textCard:
      "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    priceCard: "3.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "food",
      size: ["S", "M", "L"],
      additives: ["Berries", "Nuts", "Jam"],
    },
  },
  {
    id: "red-velvet",
    className: "menu__card card-desserts",
    imgToSource: "./assets/png/dessert-2.png",
    imgAlt: "Red velvet",
    title: "Red velvet",
    textCard: "Layer cake with cream cheese frosting",
    priceCard: "4.00",
    popup: {
      blockName: ["Size", "Additives"],
      type: "food",
      size: ["S", "M", "L"],
      additives: ["Berries", "Nuts", "Jam"],
    },
  },
  {
    id: "cheesecakes",
    className: "menu__card card-desserts",
    imgToSource: "./assets/png/dessert-3.png",
    imgAlt: "Cheesecakes",
    title: "Cheesecakes",
    textCard:
      "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    priceCard: "4.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "food",
      size: ["S", "M", "L"],
      additives: ["Berries", "Nuts", "Jam"],
    },
  },
  {
    id: "creme-brulee",
    className: "menu__card card-desserts",
    imgToSource: "./assets/png/dessert-4.png",
    imgAlt: "Creme brulee",
    title: "Creme brulee",
    textCard: "Delicate creamy dessert in a caramel basket with wild berries",
    priceCard: "4.00",
    popup: {
      blockName: ["Size", "Additives"],
      type: "food",
      size: ["S", "M", "L"],
      additives: ["Berries", "Nuts", "Jam"],
    },
  },
  {
    id: "pancakes",
    className: "menu__card card-desserts",
    imgToSource: "./assets/png/dessert-5.png",
    imgAlt: "Pancakes",
    title: "Pancakes",
    textCard: "Tender pancakes with strawberry jam and fresh strawberries",
    priceCard: "4.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "food",
      size: ["S", "M", "L"],
      additives: ["Berries", "Nuts", "Jam"],
    },
  },
  {
    id: "honey-cake",
    className: "menu__card card-desserts",
    imgToSource: "./assets/png/dessert-6.png",
    imgAlt: "Honey cake",
    title: "Honey cake",
    textCard: "Classic honey cake with delicate custard",
    priceCard: "4.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "food",
      size: ["S", "M", "L"],
      additives: ["Berries", "Nuts", "Jam"],
    },
  },
  {
    id: "chocolate-cake",
    className: "menu__card card-desserts",
    imgToSource: "./assets/png/dessert-7.png",
    imgAlt: "Chocolate cake",
    title: "Chocolate cake",
    textCard: "Cake with hot chocolate filling and nuts with dried apricots",
    priceCard: "5.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "food",
      size: ["S", "M", "L"],
      additives: ["Berries", "Nuts", "Jam"],
    },
  },
  {
    id: "black-forest",
    className: "menu__card card-desserts",
    imgToSource: "./assets/png/dessert-8.png",
    imgAlt: "Black forest",
    title: "Black forest",
    textCard:
      "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    priceCard: "6.50",
    popup: {
      blockName: ["Size", "Additives"],
      type: "food",
      size: ["S", "M", "L"],
      additives: ["Berries", "Nuts", "Jam"],
    },
  },
];
////!!!!!!!!
window.onload = function () {
  btnCoffee.classList.add("btnFilter-active");
  document
    .querySelector(".menu__catalog")
    .addEventListener("click", clickedCard);




};



  //! FUNCTIONS-----

//* when check filter button to menu

PAGINATION.addEventListener("click", (event) => {
  const click = event.target;
  if (
    click.classList.contains("btn_coffee") ||
    click.parentElement.classList.contains("btn_coffee")
  ) {
    document.querySelectorAll(".tab-item").forEach((el) => {
      el.classList.remove("btnFilter-active");
    });
    document.querySelectorAll(".menu__card").forEach((el) => {
      if (el.classList.contains("card-coffee")) {
        el.style.display = "flex";
      } else {
        el.style.display = "none";
        return el;
      }
    });
  } else if (
    click.classList.contains("btn_tea") ||
    click.parentElement.classList.contains("btn_tea")
  ) {
    if (!menuCard.classList.contains("card-tea")) {
      document.querySelectorAll(".menu__card").forEach((el) => {
        el.style.display = "none";
        return el;
      });
      createdCatalog(dataCardTea);
    }
  } else if (
    click.classList.contains("btn_dessert") ||
    click.parentElement.classList.contains("btn_dessert")
  ) {
    if (!menuCard.classList.contains("card-desserts")) {
      document.querySelectorAll(".menu__card").forEach((el) => {
        el.style.display = "none";
      });

      createdCatalog(dataCardDesserts);
    }
  }
});

// created tea cards
function createdCatalog(data) {
  data.forEach((el) => {
    const div = document.createElement("div");
    div.className = el.className;
    div.id = el.id;
    const block = document.createElement("div");
    block.className = "card__block";
    div.appendChild(block);
    const img = document.createElement("img");
    img.src = el.imgToSource;
    img.alt = el.imgAlt;
    block.appendChild(img);
    const describe = document.createElement("div");
    describe.className = "menu-description";
    div.appendChild(describe);
    const title = document.createElement("h4");
    title.className = "card__subTitle";
    title.textContent = el.title;
    describe.appendChild(title);
    const text = document.createElement("p");
    text.className = "card__text";
    text.textContent = el.textCard;
    describe.appendChild(text);
    const price = document.createElement("span");
    price.className = "card__price";
    price.textContent = el.priceCard;
    describe.appendChild(price);
    document.querySelector(".menu__catalog").appendChild(div);
  });
}
