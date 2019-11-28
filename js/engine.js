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

var europeArrayJson = [];

var europeArray = ["europeDescription", "albania", "andorra", "austria", "belgium", "westernBerlin", "bulgaria", "czechoslovakia", "denmark", "finland", "france", "gibraltar", "greece", "spain", "holland", "irleand", "iceland", "yugoslavia", "liechtenstein", "luxembourg", "malta", "monaco", "eastGermany", "norway", "poland", "portugal", "westGermany", "romania", "sanMarino", "switzerland", "sweden", "vatican", "hungary", "england", "italy", "cccp"];

fetch(path + 'europa.json').then(function (response) {
    return response.json();
}).then(function (data) {
    // Object.keys(data).forEach(element => console.log(element, element.length));  
    //jsonIteration(europeArrayJson, data);
    //clickCountry(europeArray, europeArrayJson);

    document.getElementById("europeDescription").addEventListener("click", function () {
        document.getElementById("mainContainer").innerHTML = "";
        document.getElementById("mainContainer").innerHTML = data.europeDescription[0].title + data.europeDescription[0].subtitle + data.europeDescription[0].position + data.europeDescription[0].area + data.europeDescription[0].adminDivision + data.europeDescription[0].capitol + data.europeDescription[0].biggestCities + data.europeDescription[0].population + data.europeDescription[0].naturalConditions + data.europeDescription[0].language + data.europeDescription[0].currency + data.europeDescription[0].historyPoliticalSystem + data.europeDescription[0].economy + data.europeDescription[0].map;
    });

    document.getElementById("albania").addEventListener("click", function () {
        document.getElementById("mainContainer").innerHTML = "";
        document.getElementById("mainContainer").innerHTML = data.albania[0].title + data.albania[0].subtitle + data.albania[0].position + data.albania[0].area + data.albania[0].adminDivision + data.albania[0].capitol + data.albania[0].biggestCities + data.albania[0].population + data.albania[0].naturalConditions + data.albania[0].language + data.albania[0].currency + data.albania[0].historyPoliticalSystem + data.albania[0].economy + data.albania[0].map;
    });

    document.getElementById("andorra").addEventListener("click", function () {
        document.getElementById("mainContainer").innerHTML = "";
        document.getElementById("mainContainer").innerHTML = data.andorra[0].title + data.andorra[0].subtitle + data.andorra[0].position + data.andorra[0].area + data.andorra[0].adminDivision + data.andorra[0].capitol + data.andorra[0].biggestCities + data.andorra[0].population + data.andorra[0].naturalConditions + data.andorra[0].language + data.andorra[0].currency + data.andorra[0].historyPoliticalSystem + data.andorra[0].economy + data.andorra[0].map;
    });
}).catch(function (error) {
    return console.error(error);
});

//let jsonIteration = (arrayJson, data) =>{
//   Object.keys(data).forEach(element => arrayJson.push(element));  
//}

//let clickCountry = (countryArray, countryArrayJson) =>{
// for(let i=0; i<countryArray.length; i++){
//     document.getElementById(countryArray[i]).addEventListener("click", ()=>{
//         showCountry(countryArrayJson[i][0]);
//     });            
// }     
//}

var showCountry = function showCountry(country) {
    document.getElementById("mainContainer").innerHTML = "";
    document.getElementById("mainContainer").innerHTML = "country.title,  country.subtitle, country.position, country.area, country.adminDivision, country.capitol, country.biggestCities, country.population, country.naturalConditions, country.language, country.currency, country.historyPoliticalSystem, country.economy, country.map";
};

/***/ })
/******/ ]);