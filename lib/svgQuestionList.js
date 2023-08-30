export const svgQuestionsList = [
  {
    type: "input",
    name: "text",
    message: "Enter text:",
    validate: function (text) {
      const isTextValid = String(text).length >= 1 && String(text).length <= 3;
      return isTextValid || "Please enter 1-3 characters";
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter text color in keyword or hexadecimal number:",
    validate: function (input) {
      return input.length > 0 || "Please enter valid text color";
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Enter SVG Shape from the list below:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape color in keyword or hexadecimal number:",
    validate: function (input) {
      return input.length > 0 || "Please enter valid shape color";
    },
  },
  {
    type: "input",
    name: "fileName",
    message: "Enter your SVG file name:",
    validate: function (input) {
      const isFileNameValid = /^[A-Za-z]+$/.test(input);
      return isFileNameValid || "Please enter valid file name";
    },
  },
];
