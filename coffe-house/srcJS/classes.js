export class Block {
  constructor(tag, name, pend, option) {
    this.tag = tag;
    this.name = name;
    this.pend = pend;
    if (option) {
      this.option = option;
    }
  }
  getBlock() {
    const div = document.createElement(this.tag);
    div.className = this.name;
    if (this.pend) {
      document.querySelector(`.${this.pend}`).appendChild(div);
    } else {
      document.body.appendChild(div);
    }
  }
}
