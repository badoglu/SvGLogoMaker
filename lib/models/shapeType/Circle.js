import { Shape } from "../Shape.js";

export class Circle extends Shape {
  constructor(text, textColor) {
    super(text, textColor);
  }

  render() {
    return `
      <circle cx="150" cy="150" r="150" fill="${this._shapeColor}" />
    `;
  }

  renderSvg() {
    return this.createSvg(this.render());
  }
}
