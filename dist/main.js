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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactHtml: () => (/* binding */ contactHtml)\n/* harmony export */ });\nconst contactHtml = () => {\n    const content = document.getElementById('content');\n    const newElement = (element, parentToAppend) => {\n        const create = document.createElement(element);\n        parentToAppend.append(create);\n        return create;\n    }\n    const title = newElement('h1',content);\n    title.textContent = 'Contact Us';\n    \n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pizza1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza1.png */ \"./src/pizza1.png\");\n\n;\n const homeHtml = () => {\n    const content = document.getElementById('content');\n    const newElement = (element, parentToAppend) => {\n        const create = document.createElement(element);\n        parentToAppend.append(create);\n        return create;\n    }\n    // Hero container\n    const titleContainer = newElement('div',content);\n        const title = newElement('h2',titleContainer);\n            title.textContent = 'Home';\n        // Body container\n    const bodyContainer = newElement('div', content);\n        const aboutUs = newElement('p', bodyContainer);\n            aboutUs.textContent = `A classy but relaxed sports bar and pizza restaurant\n                awaits when you visit Jordan's Pizza. We feature a diverse menu,\n                and a large selection of beers at our sports bar in San Diego, CA,\n                where you can feel at home while visiting with friends and watching the game\n                on one of our many TVs screens, all while enjoying some fine foods made fresh\n                each day in our kitchen.`;\n        const homeImg = new Image();\n        homeImg.setAttribute('id','home-img')\n        homeImg.src = _pizza1_png__WEBPACK_IMPORTED_MODULE_0__\n        homeImg.style = ('height: 50vh;')\n        bodyContainer.append(homeImg)\n        // const ghLogo = newElement('');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeHtml);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst mainHtml = (() => {\n    const body = document.querySelector('body');\n    const content = document.getElementById('content');\n    \n\n    const newElement = (element, parentToAppend) => {\n        const create = document.createElement(element);\n        parentToAppend.append(create);\n        return create;\n    }\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    const header = newElement('div', body)\n        body.insertBefore(header, body.firstChild);\n    const homeBtn = newElement('button',header)\n        homeBtn.textContent = 'Home'\n        homeBtn.addEventListener('click',() => {\n            content.textContent = \"\";\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    });\n        \n    const menuBtn = newElement('button',header)\n        menuBtn.addEventListener('click',  ()=> {\n            content.textContent = \"\";\n           return (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuHtml)()\n        });\n        menuBtn.textContent = 'Menu'\n    const contactBtn = newElement('button',header)\n        contactBtn.addEventListener('click',()=> {\n            content.textContent = \"\";\n            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactHtml)()\n        });\n        contactBtn.textContent = 'Contact'\n})()\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuHtml: () => (/* binding */ menuHtml)\n/* harmony export */ });\nconst menuHtml = () => {\n    const content = document.getElementById('content');\n    const newElement = (element, parentToAppend) => {\n        const create = document.createElement(element);\n        parentToAppend.append(create);\n        return create;\n    }\n    const title = newElement('h1',content);\n    title.textContent = 'Menu';\n\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pizza1.png":
/*!************************!*\
  !*** ./src/pizza1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"644d464ac45a195f5593.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pizza1.png?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;