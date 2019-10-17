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


var _functions = __webpack_require__(2);

document.addEventListener("DOMContentLoaded", function () {

    var path = 'https://szymekcendecki.github.io/atlas-85/json/';

    $("#mainMenu").on("click", function () {
        $("#mainList").toggleClass("hide");
    });

    //europe
    (0, _functions.showCountryList)("europe", "subListEurope");

    var europeArrayJson = [];

    var europeArray = ["europeDescription", "albania", "andorra", "austria", "belgium", "westernBerlin", "bulgaria", "czechoslovakia", "denmark", "finland", "france", "gibraltar", "greece", "spain", "holland", "ireland", "iceland", "yugoslavia", "liechtenstein", "luxembourg", "malta", "monaco", "eastGermany", "norway", "poland", "portugal", "westGermany", "romania", "sanMarino", "switzerland", "sweden", "vatican", "hungary", "england", "italy", "cccp"];

    $.ajax({
        url: path + 'europa.json',
        type: 'GET',
        dataType: 'json'
    }).done(function (data) {
        (0, _functions.jsonIteration)(europeArrayJson, data);
        (0, _functions.clickCountry)(europeArray, europeArrayJson, "subListEurope");
    }).fail(function () {
        console.log("coś nie bangla...");
    });

    //afryka
    (0, _functions.showCountryList)("africa", "subListAfrica");

    var africaArrayJson = [];

    var africaArray = ["africaDescription", "algieria", "angola", "benin", "bostwana", "burkinafaso", "burundi", "ceuta", "czad", "djibouti", "egypt", "ethiopia", "gabon", "gambia", "ghana", "guinea", "equatorialGuinea", "cameroon", "kenya", "comoros", "kongo", "lesotho", "livery", "libya", "madagascar", "malawi", "mali", "morocco", "mauretania", "mauritius", "melilla", "mozambique", "namibia", "niger", "nigeria", "southAfrica", "centralAfricanRepublic", "reunion", "rwanda", "westernSahara", "senegal", "seychelles", "sierraLeone", "somalia", "ndebele", "sudan", "saintHelena", "tanzania", "togo", "tunisia", "uganda", "ivoryCoast", "saintThomasPrince", "zaire", "zambia", "capeVerde", "zimbabwe"];

    $.ajax({
        url: path + 'africa.json',
        type: 'GET',
        dataType: 'json'
    }).done(function (data) {
        (0, _functions.jsonIteration)(africaArrayJson, data);
        (0, _functions.clickCountry)(africaArray, africaArrayJson, "subListAfrica");
    }).fail(function () {
        console.log("coś nie bangla...");
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showCountry = showCountry;
exports.showCountryList = showCountryList;
exports.jsonIteration = jsonIteration;
exports.clickCountry = clickCountry;
exports.showHideLists = showHideLists;
function showCountry(country) {
    $("#description").empty();
    $("#description").append(country.title, country.subtitle, country.position, country.area, country.adminDivision, country.capitol, country.biggestCities, country.population, country.naturalConditions, country.language, country.currency, country.historyPoliticalSystem, country.economy, country.map);
}

function showCountryList(continent, subList) {
    $("#" + continent).on("click", function () {
        $("#" + subList).toggleClass("hide");
        $("#" + continent).toggleClass("red");
    });
}

function jsonIteration(arrayJson, data) {
    $.each(data, function (i, item) {
        arrayJson.push(item);
    });
}

function clickCountry(countryArray, countryArrayJson, subList) {
    var _loop = function _loop(i) {
        $("#" + countryArray[i]).on("click", function () {
            showCountry(countryArrayJson[i][0]);
            showHideLists("#" + subList);
        });
    };

    for (var i = 0; i < countryArray.length; i++) {
        _loop(i);
    }
}

function showHideLists(sublist) {
    $(sublist).toggleClass("hide");
    $("#mainList").toggleClass("hide");
}

/***/ })
/******/ ]);