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

    fetch(path + 'europa.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        (0, _functions.jsonIteration)(europeArrayJson, data);
        (0, _functions.clickCountry)(europeArray, europeArrayJson, "subListEurope");
    }).catch(function (error) {
        return console.error(error);
    });

    //america
    (0, _functions.showCountryList)("america", "subListAmericas");
    (0, _functions.showCountryList)("americaNorth", "subListNorthAmerica");
    (0, _functions.showCountryList)("americaSouth", "subListSouthAmerica");

    var northAmericaJson = [];
    var northAmerica = ["northAmericaDescription", "bermudas", "greenland", "canada", "saintPierreMiquelon", "usa"];

    fetch(path + 'northAmerica.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        (0, _functions.jsonIteration)(northAmericaJson, data);
        (0, _functions.clickCountryAmericas)(northAmerica, northAmericaJson, "subListAmericas", "subListNorthAmerica");
    }).catch(function (error) {
        return console.error(error);
    });

    var southAmericaJson = [];
    var southAmerica = ["southAmericaDescription", "anguilla", "antiguaBarbuda", "dutchAntilles", "argentina", "bahamas", "barbados", "belize", "bolivia", "brazil", "chile", "dominica", "dominicanRepublic", "britishVirginIslands", "usaVirginIslands", "ecuador", "falklandsMalvinas", "grenada", "guiana", "frenchGuiana", "guadeloupe", "guatemala", "haiti", "honduras", "jamaica", "caimas", "columbia", "costaRica", "cuba", "martinique", "mexico", "monserrat", "nicaragua", "panama", "paraguay", "peru", "puertorico", "sanChristopherNevis", "stLucia", "stVincent", "salvador", "suriname", "trynidadTobago", "turksCaicos", "uruguay", "venezuela"];

    fetch(path + 'southAmerica.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        (0, _functions.jsonIteration)(southAmericaJson, data);
        (0, _functions.clickCountryAmericas)(southAmerica, southAmericaJson, "subListAmericas", "subListSouthAmerica");
    }).catch(function (error) {
        return console.error(error);
    });

    //africa
    (0, _functions.showCountryList)("africa", "subListAfrica");

    var africaArrayJson = [];

    var africaArray = ["africaDescription", "algieria", "angola", "benin", "bostwana", "burkinafaso", "burundi", "ceuta", "czad", "djibouti", "egypt", "ethiopia", "gabon", "gambia", "ghana", "guinea", "equatorialGuinea", "cameroon", "kenya", "comoros", "kongo", "lesotho", "livery", "libya", "madagascar", "malawi", "mali", "morocco", "mauretania", "mauritius", "melilla", "mozambique", "namibia", "niger", "nigeria", "southAfrica", "centralAfricanRepublic", "reunion", "rwanda", "westernSahara", "senegal", "seychelles", "sierraLeone", "somalia", "ndebele", "sudan", "saintHelena", "tanzania", "togo", "tunisia", "uganda", "ivoryCoast", "saintThomasPrince", "zaire", "zambia", "capeVerde", "zimbabwe"];

    fetch(path + 'africa.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        (0, _functions.jsonIteration)(africaArrayJson, data);
        (0, _functions.clickCountry)(africaArray, africaArrayJson, "subListAfrica");
    }).catch(function (error) {
        return console.error(error);
    });

    //asia
    (0, _functions.showCountryList)("asia", "subListAsia");

    var asiaArrayJson = [];

    var asiaArray = ["asiaDescription", "afghanistan", "saudiArabia", "bahrain", "bangladesh", "bhutan", "burma", "brunei", "china", "cyprus", "philippines", "hongkong", "india", "indonesia", "iraq", "iran", "izrael", "japan", "yemen", "southernYemen"];

    fetch(path + 'asia.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        (0, _functions.jsonIteration)(asiaArrayJson, data);
        (0, _functions.clickCountry)(asiaArray, asiaArrayJson, "subListAsia");
    }).catch(function (error) {
        return console.error(error);
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
exports.jsonIteration = jsonIteration;
exports.clickCountry = clickCountry;
exports.clickCountryAmericas = clickCountryAmericas;
function showCountry(country) {
    $("#description").empty();
    $("#description").append(country.title, country.subtitle, country.position, country.area, country.adminDivision, country.capitol, country.biggestCities, country.population, country.naturalConditions, country.language, country.currency, country.historyPoliticalSystem, country.economy, country.map);
}

var showCountryList = exports.showCountryList = function showCountryList(continent, subList) {
    document.getElementById(continent).addEventListener('click', function () {
        document.getElementById(subList).classList.toggle("hide");
        document.getElementById(continent).classList.toggle("red");
    });
};

function jsonIteration(arrayJson, data) {
    $.each(data, function (i, item) {
        arrayJson.push(item);
    });
}

function clickCountry(countryArray, countryArrayJson, subList) {
    var _loop = function _loop(i) {
        document.getElementById(countryArray[i]).addEventListener("click", function () {
            showCountry(countryArrayJson[i][0]);
            showHideLists(subList);
        });
    };

    for (var i = 0; i < countryArray.length; i++) {
        _loop(i);
    }
}

function clickCountryAmericas(countryArray, countryArrayJson, subList, subListII) {
    var _loop2 = function _loop2(i) {
        document.getElementById(countryArray[i]).addEventListener("click", function () {
            showCountry(countryArrayJson[i][0]);
            showHideLists(subList);
            showHideListsAmericas(subListII);
        });
    };

    for (var i = 0; i < countryArray.length; i++) {
        _loop2(i);
    }
}

var showHideLists = exports.showHideLists = function showHideLists(sublist) {
    document.getElementById(sublist).classList.toggle("hide");
    document.getElementById("mainList").classList.toggle("hide");
};

var showHideListsAmericas = exports.showHideListsAmericas = function showHideListsAmericas(sublist) {
    document.getElementById(sublist).classList.toggle("hide");
};

/***/ })
/******/ ]);