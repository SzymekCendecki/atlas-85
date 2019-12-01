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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = 'https://szymekcendecki.github.io/atlas-85/json/';

var clickCountry = function clickCountry(country) {
    document.getElementById("mainContainer").innerHTML = "";
    document.getElementById("mainContainer").innerHTML = country.title + country.subtitle + country.position + country.area + country.adminDivision + country.capitol + country.biggestCities + country.population + country.naturalConditions + country.language + country.currency + country.historyPoliticalSystem + country.economy + country.map;
};

fetch(path + 'europa.json').then(function (response) {
    return response.json();
}).then(function (data) {
    document.getElementById("europeDescription").addEventListener("click", function () {
        clickCountry(data.europeDescription[0]);
    });
    document.getElementById("albania").addEventListener("click", function () {
        clickCountry(data.albania[0]);
    });
    document.getElementById("andorra").addEventListener("click", function () {
        clickCountry(data.andorra[0]);
    });
    document.getElementById("austria").addEventListener("click", function () {
        clickCountry(data.austria[0]);
    });
    document.getElementById("belgium").addEventListener("click", function () {
        clickCountry(data.belgium[0]);
    });
    document.getElementById("westernBerlin").addEventListener("click", function () {
        clickCountry(data.westernBerlin[0]);
    });
    document.getElementById("bulgaria").addEventListener("click", function () {
        clickCountry(data.bulgaria[0]);
    });
    document.getElementById("czechoslovakia").addEventListener("click", function () {
        clickCountry(data.czechoslovakia[0]);
    });
    document.getElementById("denmark").addEventListener("click", function () {
        clickCountry(data.denmark[0]);
    });
    document.getElementById("finland").addEventListener("click", function () {
        clickCountry(data.finland[0]);
    });
    document.getElementById("france").addEventListener("click", function () {
        clickCountry(data.france[0]);
    });
    document.getElementById("gibraltar").addEventListener("click", function () {
        clickCountry(data.gibraltar[0]);
    });
    document.getElementById("greece").addEventListener("click", function () {
        clickCountry(data.greece[0]);
    });
    document.getElementById("spain").addEventListener("click", function () {
        clickCountry(data.spain[0]);
    });
    document.getElementById("holland").addEventListener("click", function () {
        clickCountry(data.holland[0]);
    });
    document.getElementById("irleand").addEventListener("click", function () {
        clickCountry(data.irleand[0]);
    });
    document.getElementById("iceland").addEventListener("click", function () {
        clickCountry(data.iceland[0]);
    });
    document.getElementById("yugoslavia").addEventListener("click", function () {
        clickCountry(data.yugoslavia[0]);
    });
    document.getElementById("liechtenstein").addEventListener("click", function () {
        clickCountry(data.liechtenstein[0]);
    });
    document.getElementById("luxembourg").addEventListener("click", function () {
        clickCountry(data.luxembourg[0]);
    });
    document.getElementById("malta").addEventListener("click", function () {
        clickCountry(data.malta[0]);
    });
    document.getElementById("monaco").addEventListener("click", function () {
        clickCountry(data.monaco[0]);
    });
    document.getElementById("eastGermany").addEventListener("click", function () {
        clickCountry(data.eastGermany[0]);
    });
    document.getElementById("norway").addEventListener("click", function () {
        clickCountry(data.norway[0]);
    });
    document.getElementById("poland").addEventListener("click", function () {
        clickCountry(data.poland[0]);
    });
    document.getElementById("portugal").addEventListener("click", function () {
        clickCountry(data.portugal[0]);
    });
    document.getElementById("westGermany").addEventListener("click", function () {
        clickCountry(data.westGermany[0]);
    });
    document.getElementById("romania").addEventListener("click", function () {
        clickCountry(data.romania[0]);
    });
    document.getElementById("sanMarino").addEventListener("click", function () {
        clickCountry(data.sanMarino[0]);
    });
    document.getElementById("switzerland").addEventListener("click", function () {
        clickCountry(data.switzerland[0]);
    });
    document.getElementById("sweden").addEventListener("click", function () {
        clickCountry(data.sweden[0]);
    });
    document.getElementById("vatican").addEventListener("click", function () {
        clickCountry(data.vatican[0]);
    });
    document.getElementById("hungary").addEventListener("click", function () {
        clickCountry(data.hungary[0]);
    });
    document.getElementById("england").addEventListener("click", function () {
        clickCountry(data.england[0]);
    });
    document.getElementById("italy").addEventListener("click", function () {
        clickCountry(data.italy[0]);
    });
    document.getElementById("cccp").addEventListener("click", function () {
        clickCountry(data.cccp[0]);
    });
}).catch(function (error) {
    return console.error(error);
});

fetch(path + 'northAmerica.json').then(function (response) {
    return response.json();
}).then(function (data) {
    document.getElementById("northAmericaDescription").addEventListener("click", function () {
        clickCountry(data.northAmericaDescription[0]);
    });
    document.getElementById("bermudas").addEventListener("click", function () {
        clickCountry(data.bermudas[0]);
    });
    document.getElementById("greenland").addEventListener("click", function () {
        clickCountry(data.greenland[0]);
    });
    document.getElementById("canada").addEventListener("click", function () {
        clickCountry(data.canada[0]);
    });
    document.getElementById("saintPierreMiquelon").addEventListener("click", function () {
        clickCountry(data.saintPierreMiquelon[0]);
    });
    document.getElementById("usa").addEventListener("click", function () {
        clickCountry(data.usa[0]);
    });
}).catch(function (error) {
    return console.error(error);
});

fetch(path + 'australia.json').then(function (response) {
    return response.json();
}).then(function (data) {

    var keys = Object.keys(data);
    var z = ["australia"];

    var _loop = function _loop(i) {
        document.getElementById(z[i]).addEventListener("click", function () {
            document.getElementById("mainContainer").innerHTML = "";
            document.getElementById("mainContainer").innerHTML = data[keys[i]];
        });
    };

    for (var i = 0; i < keys.length; i++) {
        _loop(i);
    }
}).catch(function (error) {
    return console.error(error);
});

/***/ })
/******/ ]);