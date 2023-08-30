import inquirer from "inquirer";
import fs from "fs";
import { svgQuestionsList } from "./lib/svgQuestionList.js";
import { Circle } from "./lib/models/shapeType/Circle.js";
import { Triangle } from "./lib/models/shapeType/Triangle.js";
import { Square } from "./lib/models/shapeType/Square.js";

inquirer
  .prompt(svgQuestionsList)
  .then(answers => {
    const { text, textColor, shape, shapeColor, fileName } = answers;

    let svgShape;

    switch (shape) {
      case "circle":
        svgShape = new Circle(text, textColor);
        break;
      case "triangle":
        svgShape = new Triangle(text, textColor);
        break;
      case "square":
        svgShape = new Square(text, textColor);
        break;
    }

    svgShape.setColor(shapeColor);

    fs.writeFileSync(`./examples/${fileName}.svg`, svgShape.renderSvg());

    console.log("File saved!");
  })
  .catch(err => {
    console.log(err);
  });
