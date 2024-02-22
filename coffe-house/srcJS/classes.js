export class Block {
  constructor(tag, name, append) {
    (this.name = name), (this.tag = tag), (this.append = append);
  }
  getBlock() {
    const div = document.createElement(this.tag);
    div.className = this.name;
    document.querySelector(`.${this.append}`).appendChild(div);
  }
}

export class BtnBlock extends Block {
  constructor(name, tag, append, num, btnName) {
    super(name, tag, append);
    this.num = num;
    this.btnName = btnName;
  }
  getBtnBlock() {
    this.getBlock()
    for (let index = 0; index < this.num; index++) {
      const btn = document.createElement('button');
      btn.className = this.btnName;
      document.querySelector(`.${this.name}`).appendChild(btn)
    }

  }
}
