import { Popup } from "./classes.js";
import { popup } from "./data.js";

// console.log(new Popup("dialog", "popup"))
popup.forEach((el) => {
  console.log(el)

  el.getBlock()
})
const popupR = new Popup("dialog", "popup" );
popupR.getBlock()
// popup.forEach()