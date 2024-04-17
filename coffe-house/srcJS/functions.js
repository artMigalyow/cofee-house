import {
  POPUP,
  arrTextCard,
  arrTitleCard,
  mustTarget,
  popDescrip,
  popTitle,
} from "./const.js";
import { modal } from "./data.js";
import { BtnBlock, Block } from "./classes.js";

POPUP.setAttribute("open", "open  ");
popTitle.textContent = arrTitleCard[0].textContent;
popDescrip.textContent = arrTextCard[0].textContent;
modal.forEach((obj) => {
  console.log(obj);
  obj.getBtnBlock()

});
export function clckedCard(event) {
  const target = event.target;
  if (target === mustTarget) {
    console.log("yes");
  }
  return event;
}
