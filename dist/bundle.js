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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var width = Math.min(window.innerWidth, window.innerHeight);
var height = width;
var texLoader = new THREE.TextureLoader();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });
var alternative = getParameterByName('alternative');

renderer.setSize(width, height);
document.querySelector('#container').appendChild(renderer.domElement);
camera.position.z = 3;

var geometry = new THREE.BoxGeometry(2, 2, 2);
var materials = [1, 6, 2, 5, 3, 4].map((x) => new THREE.MeshPhongMaterial({
    map: texLoader.load(window.images['d' + (alternative ? 'a' : '') + x]),
    bumpMap: texLoader.load(window.images.bump),
    bumpScale: 0.005,
    shininess: alternative ? 0 : 30,
    color: alternative ? 0xcccccc : 0xffffff,
}));
var cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

var light = new THREE.PointLight(0xFFFFFF);
light.position.set(0, 0, 10);
scene.add(light);

var ambient = new THREE.AmbientLight(0xFFFFFF, 0.1);
scene.add(ambient);

var keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
};

document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

var rotUnit = Math.PI / 2;
var rots = [ null,
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 2 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
];

document.querySelector('#container').addEventListener('mouseup', (event) => {
    var number = Math.floor(Math.random() * 6) + 1;
    console.log(number);
    
    var periodX = (Math.floor(Math.random() * 2) + 2) * Math.sign(Math.random() - 0.5);
    var periodY = (Math.floor(Math.random() * 2) + 2) * Math.sign(Math.random() - 0.5);

    var rot = { x: 0, y: 0 };
    var tween = new TWEEN.Tween(rot)
        .to({
            x: rotUnit * (rots[number].x + 4 * periodX),
            y: rotUnit * (rots[number].y + 4 * periodY),
        }, 5000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
            cube.rotation.x = rot.x;
            cube.rotation.y = rot.y;
        })
        .start();
    
    document.querySelector('#title').className = 'hidden';
});

(function () {
    // var material = new THREE.MeshStandardMaterial({ vertexColors: THREE.FaceColors });

    // //create a triangular geometry
    // var geometry = new THREE.Geometry();
    // geometry.vertices.push(new THREE.Vector3(-2, -2, -1));
    // geometry.vertices.push(new THREE.Vector3(2, -2, -1));
    // geometry.vertices.push(new THREE.Vector3(2, 2, -1));
    // geometry.vertices.push(new THREE.Vector3(-2, 2, -1));

    // //create a new face using vertices 0, 1, 2
    // var normal = new THREE.Vector3(0, 1, 0); //optional
    // var color = new THREE.Color(0xffaa00); //optional
    // var materialIndex = 0; //optional
    // var face = new THREE.Face3(0, 1, 2, normal, color, materialIndex);

    // //add the face to the geometry's faces array
    // geometry.faces.push(face);
    // geometry.faces.push(new THREE.Face3(0, 2, 3, normal, new THREE.Color(0x0000ff), materialIndex));

    // //the face normals and vertex normals can be calculated automatically if not supplied above
    // geometry.computeFaceNormals();
    // geometry.computeVertexNormals();

    // scene.add(new THREE.Mesh(geometry, material));
})();

var animate = function (t) {
    requestAnimationFrame(animate);

    // cube.rotation.x += keys.ArrowDown * 0.01;
    // cube.rotation.x -= keys.ArrowUp * 0.01;
    // cube.rotation.y += keys.ArrowRight * 0.01;
    // cube.rotation.y -= keys.ArrowLeft * 0.01;

    TWEEN.update(t);
    renderer.render(scene, camera);
};

requestAnimationFrame(animate);

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


/***/ })
/******/ ]);
