import "../styles/index.scss";
import { fruit, groceries } from "./console";

import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";

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

// log example from console.js
console.log(`${fruit}`);
console.log(groceries);
