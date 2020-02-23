/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babylonjs/babylon.js":
/*!*******************************************!*\
  !*** ./node_modules/babylonjs/babylon.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _puzzle8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puzzle8 */ \"./src/puzzle8/index.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/puzzle8/index.js":
/*!******************************!*\
  !*** ./src/puzzle8/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ \"./node_modules/babylonjs/babylon.js\");\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_tween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/tween */ \"./src/utils/tween.js\");\n\n\n\nconst state = {\n  empty: { x: 2, y: 0 },\n  puzzleMoving: null,\n  target: null,\n  shuffling: false,\n  shufflingTime: 0,\n  easeCameraIntoPosition: false,\n};\n\nconst alpha = -Math.PI / 2;\nconst beta = Math.PI / 2;\n\nconst btnShuffle = document.querySelector(\"#btn-shuffle\");\nconst notification = document.querySelector(\"#notification\");\nconst canvas = document.querySelector(\"#c1\");\ncanvas.width = Math.min(600, window.innerWidth);\ncanvas.height = canvas.width;\nconst engine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Engine\"](canvas, true);\nconst scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"](engine);\nscene.clearColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Color3\"](0.56, 0.64, 0.68); // var(--md-blue-grey-300)\nwindow.addEventListener(\"resize\", () => engine.resize());\n\nconst camera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"ArcRotateCamera\"](\"cam\", alpha, beta, 5, new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](1, 1, 0), scene);\ncamera.attachControl(canvas, true);\n\nconst light = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"HemisphericLight\"](\"light1\", new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0.0, 0.0, -1), scene);\nlight.specular = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Color3\"](0.2, 0.2, 0.2);\n\n(function createPuzzles() {\n  for (let y = 0; y < 3; y++) {\n    for (let x = 0; x < 3; x++) {\n      if (x === 2 && y === 0) {\n        continue;\n      }\n\n      const puzzle = babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"MeshBuilder\"].CreateBox(\n        `${x},${y}`,\n        { width: 0.98, height: 0.98, depth: 0.2 },\n        scene\n      );\n      puzzle.position = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](x, y, 0);\n      puzzle.material = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"StandardMaterial\"](`woodmat${(x, y)}`, scene);\n      puzzle.material.diffuseTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"](\"assets/woodtex.jpg\", scene);\n      puzzle.material.bumpTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"](\"assets/bump_digits.png\", scene);\n      puzzle.material.bumpTexture.uScale = 0.098;\n      puzzle.material.bumpTexture.uOffset = 0.098 * ((2 - y) * 3 + x);\n      puzzle.material.invertNormalMapY = true;\n    }\n  }\n\n  scene.onPointerDown = (e, pick) => {\n    if (state.shuffling || !pick.pickedMesh) {\n      return;\n    }\n\n    movePuzzle(pick.pickedMesh);\n  };\n})();\n\nengine.runRenderLoop(() => {\n  const dt = engine.getDeltaTime();\n\n  animatePuzzle(dt);\n\n  if (state.shuffling && !state.puzzleMoving) {\n    shuffle();\n  }\n\n  if (!state.shuffling) {\n    camera.alpha = Math.max(-Math.PI + 1.0, Math.min(camera.alpha, -1.0));\n    camera.beta = Math.max(1.0, Math.min(camera.beta, Math.PI - 1.0));\n\n    if (state.easeCameraIntoPosition) {\n      camera.alpha += (alpha - camera.alpha) * Math.min(dt / 200, 1);\n      camera.beta += (beta - camera.beta) * Math.min(dt / 200, 1);\n\n      if (Math.abs(alpha - camera.alpha) < 0.01 && Math.abs(beta - camera.beta) < 0.01) {\n        camera.alpha = alpha;\n        camera.beta = beta;\n        state.easeCameraIntoPosition = false;\n      }\n    }\n  } else {\n    state.shufflingTime += dt;\n    camera.alpha = alpha + 0.5 * Math.sin(state.shufflingTime / 200);\n    camera.beta = beta + 0.5 * Math.sin(Math.max(0, state.shufflingTime / 200 - Math.PI / 2));\n  }\n\n  scene.render();\n});\n\nfunction movePuzzle(mesh) {\n  const { x, y } = mesh.position;\n\n  if (state.puzzleMoving || Math.abs(x - state.empty.x) + Math.abs(y - state.empty.y) !== 1) {\n    return false;\n  }\n\n  state.animTime = 0;\n  state.puzzleMoving = mesh;\n  state.target = { x: state.empty.x, y: state.empty.y };\n  state.empty.x = x;\n  state.empty.y = y;\n\n  return true;\n}\n\nfunction animatePuzzle(dt) {\n  if (!state.puzzleMoving) {\n    return;\n  }\n\n  const animDuration = state.shuffling ? 70 : 200;\n  state.animTime += dt;\n\n  if (state.animTime > animDuration) {\n    state.puzzleMoving.position.x = state.target.x;\n    state.puzzleMoving.position.y = state.target.y;\n    state.puzzleMoving = null;\n    checkIfOver();\n  } else {\n    state.puzzleMoving.position.x = _utils_tween__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lerp(\n      state.empty.x,\n      state.target.x,\n      _utils_tween__WEBPACK_IMPORTED_MODULE_1__[\"default\"].smoothstop(state.animTime / animDuration)\n    );\n    state.puzzleMoving.position.y = _utils_tween__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lerp(\n      state.empty.y,\n      state.target.y,\n      _utils_tween__WEBPACK_IMPORTED_MODULE_1__[\"default\"].smoothstop(state.animTime / animDuration)\n    );\n  }\n}\n\nfunction shuffle() {\n  let mesh;\n\n  do {\n    mesh = scene.getMeshByName(`${(Math.random() * 3) | 0},${(Math.random() * 3) | 0}`);\n  } while (!mesh || mesh === state.prevMesh || !movePuzzle(mesh));\n\n  state.prevMesh = mesh;\n}\n\nbtnShuffle.addEventListener(\"click\", () => {\n  state.shuffling = !state.shuffling;\n\n  if (!state.shuffling) {\n    state.shufflingTime = 0;\n    state.easeCameraIntoPosition = true;\n  }\n\n  btnShuffle.textContent = state.shuffling ? \"Stop\" : \"Shuffle\";\n  btnShuffle.className = state.shuffling ? \"shuffling\" : \"\";\n});\n\nfunction checkIfOver() {\n  if (state.shuffling) {\n    return;\n  }\n\n  for (let y = 0; y < 3; y++) {\n    for (let x = 0; x < 3; x++) {\n      const mesh = scene.getMeshByName(`${x},${y}`);\n\n      if (mesh && (mesh.position.x !== x || mesh.position.y !== y)) {\n        return;\n      }\n    }\n  }\n\n  notification.style[\"z-index\"] = 1;\n  notification.style[\"opacity\"] = 0.7;\n  setTimeout(() => {\n    notification.style[\"opacity\"] = \"\";\n    setTimeout(() => {\n      notification.style[\"z-index\"] = \"\";\n    }, 500);\n  }, 2000);\n}\n\n\n//# sourceURL=webpack:///./src/puzzle8/index.js?");

/***/ }),

/***/ "./src/utils/tween.js":
/*!****************************!*\
  !*** ./src/utils/tween.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction lerp(a, b, t) {\n  return (1 - t) * a + t * b;\n}\n\n// Interpolates between 'b' and 'c', takes into account 'a' and 'd'.\nfunction cubic(a, b, c, d, t) {\n  return (\n    b +\n    0.5 *\n      t *\n      (c - a + t * (2 * a - 5 * b + 4 * c - d + t * (3 * (b - c) + d - a)))\n  );\n}\n\nfunction smoothstart(t) {\n  return t * t;\n}\n\nfunction smoothstop(t) {\n  const ti = 1 - t;\n  return 1 - ti * ti;\n}\n\n// Google \"smoothstep\" or \"Perlin fade function\".\nfunction smoothstep1(t) {\n  return t * t * (-2 * t + 3);\n}\n\nfunction smoothstep2(t) {\n  return t * t * t * (t * (t * 6 - 15) + 10);\n}\n\n// Interpolates between 'a' and 'd', with control points 'b' and 'c'.\nfunction bezier(a, b, c, d, t) {\n  const ti = 1 - t;\n  return (\n    ti * ti * ti * a + 3 * t * ti * ti * b + 3 * t * t * ti * c + t * t * t * d\n  );\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  lerp,\n  cubic,\n  smoothstart,\n  smoothstop,\n  smoothstep1,\n  smoothstep2,\n  bezier,\n});\n\n\n//# sourceURL=webpack:///./src/utils/tween.js?");

/***/ })

/******/ });