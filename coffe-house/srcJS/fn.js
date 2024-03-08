import { CARD, CATALOG, MODAL, cardArr } from "./const.js";
import { modal } from "./data.js";

export const cardClicked = (event) => {
  //*open modal*/
  const tr = event.target.closest("div");
  const indCard = searchedCard(tr.parentElement);
  if (
    tr.parentElement.className === "menu__card" ||
    tr.className === "menu__card"
  ) {
    // document.querySelector(".modal__bg").style.display = "flex";
    // MODAL.setAttribute("open", "open");
  }
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
      console.log(cardArr[i])
      const card = cardArr[i]
      const imgCard = card.querySelector('.card__block').childNodes[1]
      const cardDescrpt = card.querySelector(".menu-description").childNodes;
      console.log(cardDescrpt)
      const dtCard = new Object()
      dtCard.img = {
        src: `.${imgCard.src.slice(imgCard.src.indexOf("a") - 1)}`,
        alt: imgCard.alt,
      };
      cardDescrpt.forEach((el) => {
        switch (el.className) {
          case "card__subTitle":
            dtCard.dscrpt[name] = el.textContent           //* имсправить *//
            break;
            case 'card__text':
              dtCard.dscrpt ={ text: el.textContent}
              break;
              case "card__price":
                dtCard.dscrpt = { price: el.textContent.slice(1)}
                break;
              }
        })

        console.log(dtCard)









    }
  }

};

//*-----------------------------------------------created modal with cls-----*//

export const createdModal = ()=> {
  modal.forEach((obj) => {
    console.log(obj)
    obj.getBlock()
  });
}

//* ---------- data to modal -----------------*//
const dataToModal = (index) => {

}