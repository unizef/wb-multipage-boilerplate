import "./styles/index.scss";
import sword from "./images/swc-sword.png";
import swordSvg from "./images/sword.svg";

// Create Heading Node
const heading = document.createElement("h1");
heading.textContent = "Interesting!";

// Append Heading Node to the Root Div
const app = document.querySelector("#root");
app.append(heading);

// Big Swords Image Example
const png = document.querySelector(".png img");
png.setAttribute("src", sword);

// List Swords Image Example
const svg = document.querySelector(".svg img");
svg.setAttribute("src", swordSvg);

// Console Example
const fruit = {
  mango: 5,
  jackfruit: 2,
  banana: 10,
};

console.log(fruit);

const groceries = {
  ...fruit,
  "ficus lyrata": 1,
  facewash: 2,
  mirror: 1,
};

console.log(groceries);
