import { Shape } from "../Shape.js";

export class Square extends Shape {
  constructor(text, textColor) {
    super(text, textColor);
  }

  render() {
    return `
      <rect x="0" y="0" width="300" height="300" fill="${this._shapeColor}" />
    `;
  }

  renderSvg() {
    return this.createSvg(this.render());
  }
}
