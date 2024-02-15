import { Block, BtnBlock, ImgBlock, Popup } from "./classes.js";
export const popup = [
  new Popup("dialog", "popup"),
  new ImgBlock("img", "card__img", "popup", "src_img"),
  new Block("div", "content", "popup"),
  new Block("h3", "card__title", "content", ""),
  new Block("p", "card__text", "content", ""),
  new BtnBlock("div", "card-coffeeSize", "content", {
    num: 3,
    tag: "button",
    clsName: "coffeeSize__btn",
    parent: "card-coffeeSize",
    btnText: 'span',
    btnDiv: 'span'
  }),
];

export const btnSize = [
  { size: "s", text: "200" },
  { size: "m", text: "300" },
  { size: "l", text: "400" },
];
