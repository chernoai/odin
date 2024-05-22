/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/MyResetCSS.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/MyResetCSS.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  /* Incluye padding y borde en el cálculo del tamaño. */\r\n  box-sizing: border-box;\r\n  /* Posicion basada en el padre inmediato y permite ajustes de top/right/bottom/left. */\r\n  position: relative;\r\n  /* Previene que los elementos de grid y flex se desborden de su contenedor. */\r\n  min-width: 0;\r\n}\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  vertical-align: baseline;\r\n}\r\nbody {\r\n  min-height: 100dvh;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  text-wrap: balance;\r\n}\r\n\r\np {\r\n  text-wrap: pretty;\r\n}\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/MyResetCSS.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./restaurant-img/background.png */ \"./src/restaurant-img/background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --color1: #8fd14f;\r\n  --color2: #b4dc8d;\r\n  --color3: #d1eeb4;\r\n  --color4: #091909;\r\n  --color5: #b8e191;\r\n  --color6: #658e3b;\r\n  --color7: #fefae0;\r\n  font-size: 16px;\r\n}\r\n\r\n/* General link styles */\r\nh1,\r\nh2,\r\nh3 {\r\n  font-family: \"Fredoka\", sans-serif;\r\n  font-style: normal;\r\n}\r\n\r\nh1 {\r\n  color: var(--color3);\r\n  font-size: 3rem;\r\n  font-weight: 900;\r\n}\r\n\r\nh2 {\r\n  color: var(--color6);\r\n  font-size: 2.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\nh3 {\r\n  color: var(--color7);\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\np {\r\n  font-family: \"IBM Plex Sans\", sans-serif;\r\n}\r\ni,\r\np {\r\n  color: var(--color7);\r\n}\r\nimg {\r\n  border: 1px solid var(--color6);\r\n  box-shadow: 0 0 20px 3px #000;\r\n}\r\n.item > img {\r\n  border: 0;\r\n  box-shadow: 0 0 0 0;\r\n}\r\n/* Content styles */\r\n#content {\r\n  background-color: var(--color4);\r\n}\r\n#content > * {\r\n  padding: 1rem;\r\n}\r\n/* Header styles */\r\nheader {\r\n  position: fixed;\r\n  z-index: 10;\r\n  width: 100%;\r\n  margin-bottom: 3.5rem;\r\n}\r\n\r\n#nav-bar {\r\n  background-color: var(--color1);\r\n}\r\n\r\n#ul-bar {\r\n  display: flex;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 3.5rem;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  font-size: 1.8rem;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 400;\r\n}\r\na {\r\n  color: #000;\r\n  text-decoration: none;\r\n  transition: color .3s;\r\n}\r\n#ul-bar > li{\r\n  transition: color .3s;\r\n}\r\n#ul-bar > li:hover {\r\n  text-decoration: underline;\r\n  color: var(--color6);\r\n}\r\n#ul-bar > li:hover a {\r\n  color: #fefae0aa;\r\n}\r\nli:active{\r\n  transform: scale(.97);\r\n}\r\n/* Home section styles */\r\n#home {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 0.8rem;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center 1rem;\r\n  background-size: cover;\r\n}\r\n\r\n#home > p {\r\n  position: relative;\r\n  color: var(--color2);\r\n  font-size: 1.5rem;\r\n  font-family: \"IBM Plex Mono\", monospace;\r\n  font-weight: 400;\r\n  font-style: italic;\r\n}\r\n\r\n#restaurant-name,\r\n#slogan,\r\n#title {\r\n  position: relative;\r\n}\r\n\r\n#restaurant-name {\r\n  top: -8rem;\r\n}\r\n\r\n#slogan {\r\n  top: 13rem;\r\n}\r\n\r\n#title {\r\n  top: -8rem;\r\n}\r\n\r\n/* Menu section styles */\r\n#menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  padding: 0.8rem;\r\n  width: 100%;\r\n  height: 100vh;\r\n  text-align: center;\r\n  overflow: hidden;\r\n}\r\n\r\n#menu-box {\r\n  display: flex;\r\n  gap: 2rem;\r\n  width: fit-content;\r\n  height: 70%;\r\n}\r\n.menu-food {\r\n  border: 2px solid #b8e1911f;\r\n}\r\n.menu-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  align-items: stretch;\r\n  justify-items: center;\r\n  width: 96.6vw;\r\n  height: 100%;\r\n  max-height: 350px;\r\n  margin-top: 1rem;\r\n  padding: 0.6rem;\r\n}\r\n.arrow-buttons {\r\n  position: absolute;\r\n  top: 60vh;\r\n}\r\n.arrow-buttons:active {\r\n  transform: scale(0.8);\r\n}\r\n.fa-arrow-right {\r\n  left: 95.8vw;\r\n}\r\n.fa-arrow-left {\r\n  left: 2.5cqmax;\r\n}\r\n#right-arrow {\r\n  user-select: none;\r\n  font-size: 1.3rem;\r\n}\r\n.item {\r\n  display: grid;\r\n  justify-items: center;\r\n  align-items: center;\r\n  align-content: space-between;\r\n  padding: 0.4rem;\r\n  width: 23rem;\r\n  height: 20em;\r\n  border: 1px solid var(--color6);\r\n  box-shadow: 0 0 20px 3px #000;\r\n  transition: all .7s;\r\n}\r\n.item:hover {\r\n  background: var(--color5);\r\n  transform: scale(0.99);\r\n  border: 1px solid var(--color7);\r\n}\r\n.item:hover * {\r\n  color: var(--color4);\r\n}\r\n.item > img {\r\n  max-width: 15rem;\r\n  max-height: 10rem;\r\n}\r\n/* About section styles */\r\n#about {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n#about-title {\r\n  margin-top: 40px;\r\n}\r\n#about > h1,\r\nh2 {\r\n  text-align: center;\r\n}\r\n.about-box {\r\n  border: 2px solid #b8e1911f;\r\n  margin: 2rem 0;\r\n}\r\n#about-us-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  padding: 1.5rem;\r\n  gap: 1.6rem;\r\n}\r\n.about-text {\r\n  font-size: 1.3125rem;\r\n  width: 34.3rem;\r\n  height: fit-content;\r\n}\r\n#first-about-img-row > img {\r\n  margin: 0 7px;\r\n  width: 17.3rem;\r\n}\r\n\r\n#rest-img {\r\n  position: relative;\r\n  top: 1.25rem;\r\n}\r\n#dish-img {\r\n  position: relative;\r\n  top: -4.3rem;\r\n  width: 37.5rem;\r\n}\r\n.second-about-text {\r\n  margin-top: 0.6rem;\r\n}\r\n\r\n#about-loc-container {\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"texto texto texto texto\"\r\n    \"texto texto texto texto\"\r\n    \"contact contact map map\"\r\n    \"contact contact map map\";\r\n  padding: 1.5rem;\r\n}\r\n\r\n#about-loc-text {\r\n  grid-area: texto;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n#contact {\r\n  grid-area: contact;\r\n  margin: 4rem 2rem;\r\n}\r\n#contact > h2 {\r\n  font-size: 2rem;\r\n}\r\n#contact-list > li {\r\n  margin: 0.4rem 0;\r\n  color: var(--color7);\r\n}\r\n#contact-list > li > i {\r\n  margin: 0 1.5rem;\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n#map {\r\n  grid-area: map;\r\n  width: 46.8rem;\r\n  height: 18.75rem;\r\n  justify-self: end;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/MyResetCSS.css":
/*!****************************!*\
  !*** ./src/MyResetCSS.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MyResetCSS_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./MyResetCSS.css */ \"./node_modules/css-loader/dist/cjs.js!./src/MyResetCSS.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MyResetCSS_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_MyResetCSS_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_MyResetCSS_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_MyResetCSS_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/MyResetCSS.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/restaurant-img/background.png":
/*!*******************************************!*\
  !*** ./src/restaurant-img/background.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"330f54540de7e9b55d38.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/background.png?");

/***/ }),

/***/ "./src/restaurant-img/chips-cheesy.png":
/*!*********************************************!*\
  !*** ./src/restaurant-img/chips-cheesy.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b643a86286d70c831eda.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/chips-cheesy.png?");

/***/ }),

/***/ "./src/restaurant-img/chips-curry.png":
/*!********************************************!*\
  !*** ./src/restaurant-img/chips-curry.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"062e64fa31fcfcc45389.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/chips-curry.png?");

/***/ }),

/***/ "./src/restaurant-img/chips.png":
/*!**************************************!*\
  !*** ./src/restaurant-img/chips.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b13ad1f610cb208ac18.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/chips.png?");

/***/ }),

/***/ "./src/restaurant-img/doner-cheese.png":
/*!*********************************************!*\
  !*** ./src/restaurant-img/doner-cheese.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c74618f68ffbdb955d2e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/doner-cheese.png?");

/***/ }),

/***/ "./src/restaurant-img/doner-chips.png":
/*!********************************************!*\
  !*** ./src/restaurant-img/doner-chips.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4e8600206eee3d82fbd0.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/doner-chips.png?");

/***/ }),

/***/ "./src/restaurant-img/doner-gym.png":
/*!******************************************!*\
  !*** ./src/restaurant-img/doner-gym.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6aac3ee0020df0b308c9.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/doner-gym.png?");

/***/ }),

/***/ "./src/restaurant-img/durum.png":
/*!**************************************!*\
  !*** ./src/restaurant-img/durum.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a82cb3f1656ec528a0c7.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/durum.png?");

/***/ }),

/***/ "./src/restaurant-img/food-img.jpg":
/*!*****************************************!*\
  !*** ./src/restaurant-img/food-img.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a9cf12a38033a9a9bfc.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/food-img.jpg?");

/***/ }),

/***/ "./src/restaurant-img/kcal.png":
/*!*************************************!*\
  !*** ./src/restaurant-img/kcal.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6779fc3f6428a70c7625.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/kcal.png?");

/***/ }),

/***/ "./src/restaurant-img/nuestra-calle.jpg":
/*!**********************************************!*\
  !*** ./src/restaurant-img/nuestra-calle.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ea96c0bb60a50c9268e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/nuestra-calle.jpg?");

/***/ }),

/***/ "./src/restaurant-img/nuestro-rest.jpg":
/*!*********************************************!*\
  !*** ./src/restaurant-img/nuestro-rest.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c23a7ae00be7441783a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/nuestro-rest.jpg?");

/***/ }),

/***/ "./src/restaurant-img/pita.png":
/*!*************************************!*\
  !*** ./src/restaurant-img/pita.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e24b61588cc74bf4858.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/pita.png?");

/***/ }),

/***/ "./src/restaurant-img/redbull.png":
/*!****************************************!*\
  !*** ./src/restaurant-img/redbull.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bda0a5bcb91319f63bc5.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/redbull.png?");

/***/ }),

/***/ "./src/restaurant-img/tango.png":
/*!**************************************!*\
  !*** ./src/restaurant-img/tango.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"84f09b4fd71c0a3afc68.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/tango.png?");

/***/ }),

/***/ "./src/restaurant-img/water.png":
/*!**************************************!*\
  !*** ./src/restaurant-img/water.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"44d5b5e283401883a682.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-img/water.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _MyResetCSS_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyResetCSS.css */ \"./src/MyResetCSS.css\");\n/* harmony import */ var _restaurant_img_kcal_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant-img/kcal.png */ \"./src/restaurant-img/kcal.png\");\n/* harmony import */ var _restaurant_img_pita_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant-img/pita.png */ \"./src/restaurant-img/pita.png\");\n/* harmony import */ var _restaurant_img_durum_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restaurant-img/durum.png */ \"./src/restaurant-img/durum.png\");\n/* harmony import */ var _restaurant_img_doner_chips_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurant-img/doner-chips.png */ \"./src/restaurant-img/doner-chips.png\");\n/* harmony import */ var _restaurant_img_doner_cheese_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurant-img/doner-cheese.png */ \"./src/restaurant-img/doner-cheese.png\");\n/* harmony import */ var _restaurant_img_doner_gym_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./restaurant-img/doner-gym.png */ \"./src/restaurant-img/doner-gym.png\");\n/* harmony import */ var _restaurant_img_chips_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./restaurant-img/chips.png */ \"./src/restaurant-img/chips.png\");\n/* harmony import */ var _restaurant_img_chips_cheesy_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./restaurant-img/chips-cheesy.png */ \"./src/restaurant-img/chips-cheesy.png\");\n/* harmony import */ var _restaurant_img_chips_curry_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./restaurant-img/chips-curry.png */ \"./src/restaurant-img/chips-curry.png\");\n/* harmony import */ var _restaurant_img_tango_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./restaurant-img/tango.png */ \"./src/restaurant-img/tango.png\");\n/* harmony import */ var _restaurant_img_redbull_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./restaurant-img/redbull.png */ \"./src/restaurant-img/redbull.png\");\n/* harmony import */ var _restaurant_img_water_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./restaurant-img/water.png */ \"./src/restaurant-img/water.png\");\n/* harmony import */ var _restaurant_img_nuestra_calle_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./restaurant-img/nuestra-calle.jpg */ \"./src/restaurant-img/nuestra-calle.jpg\");\n/* harmony import */ var _restaurant_img_nuestro_rest_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./restaurant-img/nuestro-rest.jpg */ \"./src/restaurant-img/nuestro-rest.jpg\");\n/* harmony import */ var _restaurant_img_food_img_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./restaurant-img/food-img.jpg */ \"./src/restaurant-img/food-img.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Aquí puedes agregar el código JavaScript para manejar el contenido de las pestañas\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var content = document.getElementById('content');\n  function loadHome() {\n    content.innerHTML = \"\\n      <div id=\\\"home\\\">\\n        <p id=\\\"title\\\">EN LA ESQUINA DE</p>\\n        <h1 id=\\\"restaurant-name\\\">D\\xD6N EL KEBAB</h1>\\n        <p id=\\\"slogan\\\">LOS MEJORES DONER KEBABS DE D\\xD6N EL KEBAB</p>\\n      </div>\\n    \";\n  }\n  function loadMenu() {\n    content.innerHTML = \"\\n      <div id=\\\"menu\\\">\\n        <h1 class=\\\"section-title\\\">MENU</h1>\\n        <div id=\\\"menu-box\\\">\\n        <div class=\\\"menu-food mains\\\">\\n          <h2 class=\\\"menu-title\\\">MAINS</h2>\\n          <div class=\\\"menu-container\\\">\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\">KCAL KEBAB</h3>\\n              <img src=\\\"\".concat(_restaurant_img_kcal_png__WEBPACK_IMPORTED_MODULE_2__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">\\n                Todo sigue aqu\\xED, pero esta vez es m\\xE1s ligero. Tu elecci\\xF3n de carnes para doner. Lechuga fresca y tomates\\n                jugosos. Cebolla y lombarda, envueltas en nuestro pan tostado multigrano y s\\xE9samo. \\xBFEl toque final?\\n                Nuestra salsa picante de autor. Baja en calor\\xEDas, pero no en sabor.\\n              </p>\\n            </div>\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\">OG KEBAB</h3>\\n              <img src=\\\"\").concat(_restaurant_img_pita_png__WEBPACK_IMPORTED_MODULE_3__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">\\n                El kebab definitivo. Carne doner de tu elecci\\xF3n. Lechuga fresca y tomates jugosos. Cebolla y col\\n                lombarda. Servido en nuestro pan tipo waffle tostado con s\\xE9samo hecho a mano y con nuestras tres salsas\\n                exclusivas. Simplemente no puedes equivocarte.\\n              </p>\\n            </div>\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\">DONER WRAP</h3>\\n              <img src=\\\"\").concat(_restaurant_img_durum_png__WEBPACK_IMPORTED_MODULE_4__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">Envu\\xE9lvete. Lechuga fresca, tomate jugoso, cebolla y col lombarda, servidos con\\n                carnes doner de su elecci\\xF3n. Sellado en una envoltura de pan plano con nuestras tres salsas exclusivas.\\n              </p>\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\\"menu-food doner-boxes\\\">\\n          <h2 class=\\\"menu-title\\\">BOXES</h2>\\n          <div class=\\\"menu-container\\\">\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\">DONER BOX CON FRIES & SALAD</h3>\\n              <img src=\\\"\").concat(_restaurant_img_doner_chips_png__WEBPACK_IMPORTED_MODULE_5__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">\\n                Carne suculenta y patatas fritas bien hechas. Su elecci\\xF3n de carnes doner, lechuga fresca, tomate,\\n                cebolla y col lombarda, con un juego de tres salsas exclusivas.\\n              </p>\\n            </div>\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\"> DONER BOX WITH FRIES</h3>\\n              <img src=\\\"\").concat(_restaurant_img_doner_cheese_png__WEBPACK_IMPORTED_MODULE_6__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">\\n                Cubre tu cl\\xE1sico kebab con patatas fritas en una salsa cremosa de queso cubierta con deliciosos\\n                jalape\\xF1os.\\n              </p>\\n            </div>\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\">DONER BOX CON FRIES & CHEESE</h3>\\n              <img src=\\\"\").concat(_restaurant_img_doner_gym_png__WEBPACK_IMPORTED_MODULE_7__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">\\n                No puedes equivocarte. Servido con su elecci\\xF3n de carnes, papas fritas y un juego de tres salsas\\n                exclusivas.\\n              </p>\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\\"menu-food chips\\\">\\n          <h2 class=\\\"menu-title\\\">CHIPS</h2>\\n          <div class=\\\"menu-container\\\">\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\">PAPAS FRITAS</h3>\\n              <img src=\\\"\").concat(_restaurant_img_chips_png__WEBPACK_IMPORTED_MODULE_8__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">\\n                El cl\\xE1sico.\\n              </p>\\n            </div>\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\">FLAMING FRIES</h3>\\n              <img src=\\\"\").concat(_restaurant_img_chips_cheesy_png__WEBPACK_IMPORTED_MODULE_9__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">\\n                Caliente. No, m\\xE1s caliente.Cubierto con nuestro llama\\n              </p>\\n            </div>\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\">CURRY FRIES</h3>\\n              <img src=\\\"\").concat(_restaurant_img_chips_curry_png__WEBPACK_IMPORTED_MODULE_10__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">\\n                Espolvorizado con nuestro condimento al curry.\\n              </p>\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\\"menu-food drinks\\\">\\n          <h2 class=\\\"menu-title\\\">DRINKS</h2>\\n          <div class=\\\"menu-container\\\">\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\">TANGO ICE BLAST </h3>\\n              <img src=\\\"\").concat(_restaurant_img_tango_png__WEBPACK_IMPORTED_MODULE_11__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">\\n                Azul o rojo, elige tu luchador ... o ambos.\\n              </p>\\n            </div>\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\">RED BULL</h3>\\n              <img src=\\\"\").concat(_restaurant_img_redbull_png__WEBPACK_IMPORTED_MODULE_12__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">\\n                Te da alas.\\n              </p>\\n            </div>\\n            <div class=\\\"item\\\">\\n              <h3 class=\\\"itmes-title\\\">STILL SMARTWATER\\xAE</h3>\\n              <img src=\\\"\").concat(_restaurant_img_water_png__WEBPACK_IMPORTED_MODULE_13__, \"\\\" alt=\\\"\\\">\\n              <p class=\\\"items-info\\\">\\n                Agua sin gas. </p>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n      <i id=\\\"right-arrow\\\" class=\\\"fa-solid fa-arrow-right arrow-buttons\\\"></i>\\n    </div>\\n    \");\n    var menuBox = document.getElementById('menu-box');\n    var arrowRight = document.getElementById('right-arrow');\n    arrowRight.addEventListener('click', function () {\n      menuBox.appendChild(menuBox.firstElementChild);\n    });\n  }\n  function loadAbout() {\n    content.innerHTML = \"\\n      <div id=\\\"about\\\">\\n        <h1 id=\\\"about-title\\\">ABOUT</h1>\\n        <div class=\\\"about-us-box about-box\\\">\\n        <h2>SOBRE NOSOTROS</h2>\\n        <div id=\\\"about-us-container\\\">\\n          <p class=\\\"about-text first-about-text\\\">\\n            Bienvenidos a DON EL KEBAB, el lugar donde los sabores aut\\xE9nticos y la pasi\\xF3n por la cocina se fusionan para\\n            ofrecerte una experiencia culinaria inigualable en el coraz\\xF3n de Barcelona. Con nuestro eslogan \\\"LOS MEJORES\\n            DONER KEBABS de DON EL KEBAB\\\", nos comprometemos a brindarte los kebabs m\\xE1s deliciosos y aut\\xE9nticos que\\n            jam\\xE1s\\n            hayas probado.\\n          </p>\\n          <div id=\\\"first-about-img-row\\\">\\n            <img id=\\\"rest-img\\\" src=\\\"\".concat(_restaurant_img_nuestro_rest_jpg__WEBPACK_IMPORTED_MODULE_15__, \"\\\" alt=\\\"\\\">\\n            <img src=\\\"\").concat(_restaurant_img_nuestra_calle_jpg__WEBPACK_IMPORTED_MODULE_14__, \"\\\" alt=\\\"\\\">\\n          </div>\\n          <img id=\\\"dish-img\\\" src=\\\"\").concat(_restaurant_img_food_img_jpg__WEBPACK_IMPORTED_MODULE_16__, \"\\\" alt=\\\"\\\">\\n          <p class=\\\"about-text second-about-text\\\">\\n            En DON EL KEBAB, nuestra misi\\xF3n es ofrecer a nuestros clientes una experiencia culinaria excepcional en cada\\n            visita. Nos enorgullece utilizar solo los mejores ingredientes, cuidadosamente seleccionados para garantizar\\n            que cada bocado de nuestros kebabs sea una explosi\\xF3n de sabor. Creemos en la importancia de mantener la\\n            autenticidad de nuestras recetas, al mismo tiempo que innovamos para satisfacer los gustos de todos nuestros\\n            clientes.\\n          </p>\\n        </div>\\n      </div>\\n      <div class=\\\"about-loc-box about-box\\\">\\n        <h2>ENCENTRANOS</h2>\\n        <div id=\\\"about-loc-container\\\">\\n          <p id=\\\"about-loc-text\\\">\\n            Te invitamos a visitarnos en Passeig de Llu\\xEDs Companys, No 2, Ciutat Vella, 08018 Barcelona, Espa\\xF1a, donde\\n            te recibiremos con los brazos abiertos y los kebabs m\\xE1s deliciosos de Barcelona. Ya sea para una comida\\n            r\\xE1pida, una cena con amigos o una celebraci\\xF3n especial, en DON EL KEBAB estamos listos para hacer de tu\\n            visita una experiencia \\xFAnica. Gracias por elegir DON EL KEBAB. \\xA1Esperamos verte pronto y que disfrutes de\\n            LOS MEJORES DONER KEBABS de DON EL KEBAB!\\n          </p>\\n          <div id=\\\"contact\\\">\\n            <h2>CONTACTANOS</h2>\\n            <ul id=\\\"contact-list\\\">\\n              <li><i class=\\\"fa-brands fa-square-twitter\\\"></i>Twitter</li>\\n              <li><i class=\\\"fa-solid fa-phone\\\"></i>Telefono</li>\\n              <li><i class=\\\"fa-brands fa-square-instagram\\\"></i>Instagram</li>\\n              <li><i class=\\\"fa-brands fa-square-whatsapp\\\"></i>Whatsapp</li>\\n            </ul>\\n          </div>\\n          <iframe id=\\\"map\\\"\\n            src=\\\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.2901923873424!2d2.1809831754111384!3d41.38950387129959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fd4393e55f%3A0x698ead7e7c8c4123!2sTURK%20KEBAB%20HALAL%20PIZZERIA!5e0!3m2!1ses!2suk!4v1716143369592!5m2!1ses!2suk\\\"\\n            width=\\\"600\\\" height=\\\"450\\\" style=\\\"border:0;\\\" allowfullscreen=\\\"\\\" loading=\\\"lazy\\\"\\n            referrerpolicy=\\\"no-referrer-when-downgrade\\\"\\n            ></iframe>\\n        </div>\\n      </div>\\n    </div>\\n    \");\n  }\n  document.getElementById('nav-bar').addEventListener('click', function (e) {\n    if (e.target.tagName === 'A') {\n      e.preventDefault();\n      if (e.target.hash === '#home') {\n        loadHome();\n      } else if (e.target.hash === '#menu') {\n        loadMenu();\n      } else if (e.target.hash === '#about') {\n        loadAbout();\n      }\n    }\n  });\n  loadHome(); // Cargar la sección Home por defecto\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;