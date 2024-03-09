//* --------popup----------*//

import { Block } from "./classes.js";

export const modal = [
  new Block("div", "modal__bg"),
  new Block("dialog", "mn-modal", "modal__bg"),
  new Block("div", "mn__block-img", "mn-modal"),
  new Block("div", "mn__block-content", "mn-modal"),
  new Block("div", "cnt__header", "mn__block-content"),
  new Block("span", "hdr__title", "cnt__header"),
  new Block("span", "hdr__subtitle", "cnt__header"),
];
