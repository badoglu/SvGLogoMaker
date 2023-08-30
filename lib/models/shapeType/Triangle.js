import { Shape } from "../Shape.js";

export class Triangle extends Shape {
  constructor(text, textColor) {
    super(text, textColor);
  }

  render() {
    return `
        <polygon points="150,0 300,300 0,300" fill="${this._shapeColor}" />
    `;
  }

  renderSvg() {
    return this.createSvg(this.render());
  }
}
