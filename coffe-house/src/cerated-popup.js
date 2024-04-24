import { dataCardCoffee, dataCardTea, dataCardDesserts } from "../menu.js";

export const clickedCard = (e) => {
  const click = e.target;
  document.querySelectorAll(".menu__card").forEach((card) => {
    if (card.contains(click)) {
      const type = card.className.split(" ")[1];
      let cardItem = card
        .querySelector(".card__subTitle")
        .textContent.toLocaleLowerCase()
        .replace(" ", "-");

      if (type.includes("tea") || type.includes("coffee")) {
        dataCardCoffee.forEach((el) => {
          if (el.id === cardItem) {
            document.body.appendChild(showPopup(el));
          }
        });
        dataCardTea.forEach((el) => {
          if (el.id === cardItem) {
            document.body.appendChild(showPopup(el));

          }
        });
        document.body.style.overflow ='hidden'
      } else {
        dataCardDesserts.forEach((el) => {
          if (el.id === cardItem) {
            document.body.appendChild(showPopup(el));
          }
        });
        document.body.style.overflow = "hidden";

      }
    }
  });
};

export function showPopup(card) {
  const fragment = new DocumentFragment();
  const bgPopup = document.createElement("div");
  bgPopup.className = "popup__bg";
  fragment.appendChild(bgPopup);
  const popup = document.createElement("dialog");
  popup.style.display = "flex";
  popup.className = "menu__popup";
  const img = document.createElement("img");
  img.className = "popup__img";
  img.src = card.imgToSource;
  img.alt = card.imgAlt;
  popup.appendChild(img);
  const description = document.createElement("div");
  description.className = "popup__description";
  popup.appendChild(description);
  const title = document.createElement("h4");
  title.className = "popup__title";
  title.textContent = card.title;
  description.appendChild(title);
  const text = document.createElement("p");
  text.className = "popup__text";
  text.textContent = card.textCard;
  description.appendChild(text);
  createBlockButtons(card, description);       //* created block buttons

  const total = document.createElement("div");
  total.className = "popup__total";
  description.appendChild(total);
  const totalText = document.createElement("span");
  totalText.className = "total__text";
  totalText.textContent = "Total:";
  total.appendChild(totalText);
  const price = document.createElement("span");
  price.className = "card__price";
  price.textContent = `$${card.priceCard}`;
  total.appendChild(price);
  const alert = document.createElement("div");
  alert.className = "popup__alert";
  description.appendChild(alert);
  const infEmpty = document.createElement("span");
  infEmpty.className = "alert__empty";
  alert.appendChild(infEmpty);
  const inf = document.createElement("span");
  inf.className = "alert__text";
  inf.textContent =
    "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.";
  alert.appendChild(inf);
  const btn = document.createElement("button");
  btn.className = "popup__btn";
  btn.textContent = "Close";
  description.appendChild(btn);

  bgPopup.appendChild(popup);
  bgPopup.addEventListener("click", hiddenPopup);
  return fragment;
}

function createBlockButtons(card, parentApp) {
  const blocks = card.popup.blockName;
  for (let i = 0; i < blocks.length; i++) {
    //*created block
    const block = document.createElement("div");
    block.className = `block__${blocks[i].toLocaleLowerCase()}`;
    const p = document.createElement("p");
    p.className = "block__text";
    p.textContent = block[i];
    block.appendChild(p);
    let buttons = "";
    const blockBtn = document.createElement("div"); //* btns container
    blockBtn.className = "block__btn";
    block.appendChild(blockBtn);
    i === 0 ? (buttons = card.popup.size) : (buttons = card.popup.additives);
    for (let b = 1; b < buttons.length + 1; b++) {
      //* btns created
      const btn = document.createElement("button");
      btn.className = `btn__${blocks[i].toLocaleLowerCase()}`;
      blockBtn.appendChild(btn);
      const empty = document.createElement("span"); //* first span created
      empty.className = `btn__empty`;
      if (i === 0) {
        empty.textContent = buttons[b - 1];
      } else {
        empty.textContent = b;
      }
      btn.appendChild(empty);
      const text = document.createElement("span");
      text.className = "btn__text";
      if (i === 0) {
        if (card.popup.type === "drink") {
          text.textContent = `${(b + 1) * 100} ml`;
        }
        if (card.popup.type === "food") {
          if (b === 3) {
            text.textContent = `${(b - 1) * 100} mg`;
          } else {
            text.textContent = `${(b * 100) / 2} mg`;
          }
        }
      } else {
        text.textContent = card.popup.additives[b - 1];
      }
      btn.appendChild(text);
    }
    parentApp.appendChild(block);
  }
}


function hiddenPopup(event){
  if(event.target.classList.contains('popup__bg')){
    document.body.removeChild(document.querySelector(".popup__bg"));
    document.body.style = 'auto'
  }
}


