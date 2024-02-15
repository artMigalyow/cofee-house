export class Block {
  constructor(tag, clsName, parent, content) {
    this.tag = tag;
    this.clsName = clsName;
    this.parent = parent;
    if (content) {
      this.content = content;
    }
  }
  getBlock() {
    const div = document.createElement(this.tag);
    div.className = this.clsName;
    if (typeof this.content === "string") {
      div.textContent = this.content;
    }
    if (typeof this.parent === "string") {
      document.querySelector(`.${this.parent}`).appendChild(div);
    } else {
      document.body.appendChild(div);
    }
    return div;
  }
}

export class Popup extends Block {
  constructor(tag, clsName) {
    super(tag, clsName, parent);
    this.tag;
    this.clsName;
  }
}

export class BtnBlock extends Block {
  constructor(tag, clsName, content) {
    super(tag, clsName, parent, content);

  }
}
export class ImgBlock extends Block {
  constructor(tag, clsName,parent,src) {
    super(tag, clsName, parent);
    
    this.src = src;
  }
}
