export class Shape {
  _shapeColor = "green";

  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  setColor(shapeColor) {
    if (shapeColor === "") {
      throw new Error("The shape color cannot be empty");
    }

    this._shapeColor = shapeColor;
  }

  createSvg(shape) {
    return `
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            ${shape}

            <text
            x="50%"
            y="50%"
            fill="${this.textColor}"
            font-size="48"
            text-anchor="middle"
            dominant-baseline="middle"
            >
            ${this.text}
            </text>
        </svg>
    `;
  }
}
