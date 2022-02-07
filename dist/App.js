"use strict";
(self["webpackChunkwp_multipage_boilerplate"] = self["webpackChunkwp_multipage_boilerplate"] || []).push([["App"],{

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./console */ "./src/js/console.js");
/* harmony import */ var _images_swc_sword_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/swc-sword.png */ "./src/images/swc-sword.png");
/* harmony import */ var _images_sword_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sword.svg */ "./src/images/sword.svg");



 // Create Heading Node

var heading = document.createElement("h1");
heading.textContent = "Interesting!"; // Append Heading Node to the Root Div

var app = document.querySelector("#root");
app.append(heading); // Big Swords Image Example

var png = document.querySelector(".png img");
png.setAttribute("src", _images_swc_sword_png__WEBPACK_IMPORTED_MODULE_2__); // List Swords Image Example

var svg = document.querySelector(".svg img");
svg.setAttribute("src", _images_sword_svg__WEBPACK_IMPORTED_MODULE_3__); // log example from console.js

console.log("".concat(_console__WEBPACK_IMPORTED_MODULE_1__.fruit));
console.log(_console__WEBPACK_IMPORTED_MODULE_1__.groceries);

/***/ }),

/***/ "./src/js/console.js":
/*!***************************!*\
  !*** ./src/js/console.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fruit": function() { return /* binding */ fruit; },
/* harmony export */   "groceries": function() { return /* binding */ groceries; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Console Example
var fruit = {
  consoles: 3,
  mango: 5,
  jackfruit: 2,
  banana: 10
};

var groceries = _objectSpread({
  "ficus lyrata": 1,
  facewash: 2,
  mirror: 1
}, fruit);



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/swc-sword.png":
/*!**********************************!*\
  !*** ./src/images/swc-sword.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/b53bc62d78899818ecf9.png";

/***/ }),

/***/ "./src/images/sword.svg":
/*!******************************!*\
  !*** ./src/images/sword.svg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ed0722600370a4d15278.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/App.js"));
/******/ }
]);
//# sourceMappingURL=App.js.map