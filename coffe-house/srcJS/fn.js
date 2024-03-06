import { CARD, CATALOG, MODAL, cardArr } from "./const.js";

export const cardClicked = (event) => {
  //*open modal*/
  const tr = event.target.closest("div");
  // console.log(tr.parentElement)
  if (
    tr.parentElement.className === "menu__card" ||
    tr.className === "menu__card"
  ) {
    document.querySelector(".modal__bg").style.display ='flex'
    MODAL.setAttribute('open',"open")
  }
  const clkedCard=searchedCard(tr.parentElement)
};

export function handleClk(ev) {
  //*  close modal */
  const tr = ev.target;
  if (MODAL.hasAttribute("open") && tr.className === "modal__bg") {
    document.querySelector(".modal__bg").style.display = "none";
    MODAL.removeAttribute("open", "open");
  }
}

const searchedCard = (tr)=> {        //* возвращает элемент в каталоге *//
  const lenCard = cardArr.length;
  for (let i = 0; i < lenCard; i++) {
    if(cardArr[i] === tr ){
      return i;
    }

  }
}
