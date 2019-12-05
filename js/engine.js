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

var clickCountry = function clickCountry(array, data) {
    var _loop = function _loop(i) {
        document.getElementById(array[i]).addEventListener("click", function () {
            document.getElementById("mainContainer").innerHTML = "";
            document.getElementById("mainContainer").innerHTML = data[Object.keys(data)[i]];
        });
    };

    for (var i = 0; i < Object.keys(data).length; i++) {
        _loop(i);
    }
};

var fetchJSON = function fetchJSON(continent, continent2) {
    fetch(path + continent).then(function (response) {
        return response.json();
    }).then(function (data) {
        clickCountry(continent2, data);
    }).catch(function (error) {
        return console.error(error);
    });
};

var europe = ["europe", "albania", "andorra", "austria", "belgium", "westernBerlin", "bulgaria", "czechoslovakia", "denmark", "finland", "france", "gibraltar", "greece", "spain", "holland", "irleand", "iceland", "yugoslavia", "liechtenstein", "luxembourg", "malta", "monaco", "eastGermany", "norway", "poland", "portugal", "westGermany", "romania", "sanMarino", "switzerland", "sweden", "vatican", "hungary", "england", "italy", "cccp"];

var northAmerica = ["northAmerica", "bermudas", "greenland", "canada", "saintPierreMiquelon", "usa"];

var southAmerica = ["southAmerica", "anguilla", "antiguaBarbuda", "dutchAntilles", "argentina", "bahamas", "barbados", "belize", "bolivia", "brazil", "chile", "dominica", "dominicanRepublic", "britishVirginIslands", "usaVirginIslands", "ecuador", "falklandMalvinas", "grenada", "guiana", "frenchGuiana", "guadeloupe", "guatemala", "haiti", "honduras", "jamaica", "caimans", "columbia", "costaRica", "cuba", "martinique", "mexico", "montserrat", "nicaragua", "panama", "paraguay", "peru", "puertorico", "sanChristopherNevis", "stLucia", "stVincent", "salvador", "surinam", "trynidadTobago", "turksCaicos", "uruguay", "venezuela"];

var africa = ["africa", "algieria", "angola", "benin", "bostwana", "burkinafaso", "burundi", "ceuta", "czad", "djibouti", "egypt", "ethiopia", "gabon", "gambia", "ghana", "guinea", "equatorialGuinea", "cameroon", "kenya", "comoros", "kongo", "lesotho", "livery", "libya", "madagascar", "malawi", "mali", "morocco", "mauretania", "mauritius", "melilla", "mozambique", "namibia", "niger", "nigeria", "southAfrica", "centralAfricanRepublic", "reunion", "rwanda", "westernSahara", "senegal", "seychelles", "sierraLeone", "somalia", "ndebele", "sudan", "saintHelena", "tanzania", "togo", "tunisia", "uganda", "ivoryCoast", "saintThomasPrince", "zaire", "zambia", "capeVerde", "zimbabwe"];

var asia = ["asia", "afghanistan", "saudiArabia", "bahrain", "bangladesh", "bhutan", "burma", "brunei", "china", "cyprus", "philippines", "hongkong", "india", "indonesia", "iraq", "iran", "izrael", "japan", "yemen", "southernYemen", "jordan", "kampucza", "katar", "korea", "northKorea", "southKorea", "kuwait", "laos", "lebanon", "macao", "maldives", "malaysia", "mongolia", "nepal", "oman", "pakistan", "singapore", "srilanka", "syria", "thailand", "turkey", "vietnam", "christmasIsland", "coconutIslands", "unitedArabEmirates"];

var australia = ["australia"];

var oceania = ["oceania", "fiji", "guam", "hawaii", "kiribati", "midway", "nauru", "niue", "norfolk", "newCaledonia", "newZeland", "papuaNewGuinea", "pitcairn", "polinezja", "pacificTrustIslands", "americanSamoa", "westernSamoa", "tokelau", "tonga", "tuvalu", "vanuatu", "wake", "wallisFutuna", "cookIslands", "salomonsIslands"];

var antarctica = ["antarctica"];

fetchJSON('europa.json', europe);
fetchJSON('northAmerica.json', northAmerica);
fetchJSON('southAmerica.json', southAmerica);
fetchJSON('africa.json', africa);
fetchJSON('asia.json', asia);
fetchJSON('australia.json', australia);
fetchJSON('oceania.json', oceania);
fetchJSON('antarctica.json', antarctica);

/***/ })
/******/ ]);