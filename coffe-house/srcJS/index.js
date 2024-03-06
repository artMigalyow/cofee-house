import { CATALOG } from "./const.js";
import { cardClicked, handleClk } from "./fn.js";

// console.log(CATALOG)
CATALOG.addEventListener("click", cardClicked,true);
document.addEventListener('click', handleClk)