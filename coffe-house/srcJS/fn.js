import { CARD, CATALOG, MODAL, cardArr } from "./const.js";
import { modal } from "./data.js";

export const cardClicked = (event) => {
  //*open modal*/
  const tr = event.target.closest("div");
  const cardDt = searchedCard(tr.parentElement);
  if (
    tr.parentElement.className === "menu__card" ||
    tr.className === "menu__card"
  ) {
    createdModal(cardDt);

  }
  console.log(cardDt);
};

export function handleClk(ev) {
  //*  close modal */
  const tr = ev.target;
  if (MODAL.hasAttribute("open") && tr.className === "modal__bg") {
    document.querySelector(".modal__bg").style.display = "none";
    MODAL.removeAttribute("open", "open");
  }
}

const searchedCard = (tr) => {
  //* возвращает элемент в каталоге *//
  const lenCard = cardArr.length;
  for (let i = 0; i < lenCard; i++) {
    if (cardArr[i] === tr) {
      console.log(cardArr[i]);
      const card = cardArr[i];
      const imgCard = card.querySelector(".card__block").childNodes[1];
      const cardDescrpt = card.querySelector(".menu-description").childNodes;
      console.log(cardDescrpt);
      const dtCard = new Object();
      dtCard.img = {
        src: `.${imgCard.src.slice(imgCard.src.indexOf("a") - 1)}`,
        alt: imgCard.alt,
      };
      let dtArr = [];
      cardDescrpt.forEach((el) => {
        switch (el.className) {
          case "card__subTitle":
            dtArr.push(['name', `${el.textContent}`]);
            break;
          case "card__text":
            dtArr.push(["text", `${el.textContent}`]);
            break;
          case "card__price":
            dtArr.push(["price", `${el.textContent.slice(1)}`]);
            break;
        }
      });
      dtCard.dscrp = {}
      dtArr.forEach(element => {
        dtCard.dscrp[element[0]] = element[1]
      });

      return dtCard;

    }
  }
};

//*-----------------------------------------------created modal with cls-----*//

export const createdModal = (data) => {
  modal.forEach((obj) => {
    obj.getBlock()
  });
  const bgImg = document.querySelector(".mn-modal").querySelector(".mn__block-img")
  bgImg.style.backgroundImage =`url(${data.img.src})`;
  const mdCont = document.querySelector(".cnt__header").childNodes;
  mdCont.forEach((el) => {

    if(el.className === 'hdr__title'){
      el.textContent = data.dscrp.name;
    }else {
      el.textContent = data.dscrp.text
    }
  })



};


