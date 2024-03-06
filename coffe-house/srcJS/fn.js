import { CARD, CATALOG, MODAL } from "./const.js";

export const cardClicked = (event) => {            //*open modal*/
  const tr = event.target.closest('div')
  if (
    tr.parentElement.className === "menu__card" ||
    tr.className === "menu__card"
  ) {
    document.querySelector(".modal__bg").style.display ='flex'
    MODAL.setAttribute('open',"open")
  }

  // event.stopImmediatePropagation();
};

export function handleClk(ev){              //*  close modal */
  const tr = ev.target;
  if(MODAL.hasAttribute("open") && tr.className === 'modal__bg'){
    document.querySelector(".modal__bg").style.display = "none";
    MODAL.removeAttribute("open","open")
  }
}