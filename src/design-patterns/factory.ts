export interface Boxable {
  parent: Element;
  generate(): void;
}

export class BoxSmall implements Boxable {
  parent: Element;

  constructor(p: Element) {
    this.parent = p;
  }

  generate() {
    const div = document.createElement('div');
    div.classList.add('small');
    div.innerText = 'small';
    this.parent.append(div);
  }
}

export class BoxMedium implements Boxable {
  parent: Element;

  constructor(p: Element) {
    this.parent = p;
  }

  generate() {
    const div = document.createElement('div');
    div.classList.add('medium');
    div.innerText = 'medium';
    this.parent.append(div);
  }
}

export class BoxLarge implements Boxable {
  parent: Element;

  constructor(p: Element) {
    this.parent = p;
  }

  generate() {
    const div = document.createElement('div');
    div.classList.add('large');
    div.innerText = 'large';
    this.parent.append(div);
  }
}

export class BoxFactory {
  getBox(type: 'small' | 'medium' | 'large', parent: Element) {
    switch (type) {
      case 'small':
        return new BoxSmall(parent);
      case 'medium':
        return new BoxMedium(parent);
      case 'large':
        return new BoxLarge(parent);
    }
  }
}
