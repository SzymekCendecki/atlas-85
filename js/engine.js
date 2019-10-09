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


document.addEventListener("DOMContentLoaded", function () {

    $("#mainMenu").on("click", function () {
        $("#mainList").toggleClass("hide");
    });

    $("#europe").on("click", function () {
        $("#subListEurope").toggleClass("hide");
        $("#europe").toggleClass("red");
    });

    function showCountry(country) {
        $("#description").empty();
        $("#description").append(country.title, country.subtitle, country.position, country.area, country.adminDivision, country.capitol, country.biggestCities, country.population, country.naturalConditions, country.language, country.currency, country.historyPoliticalSystem, country.economy, country.map);
    }

    $("#albania").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            showCountry(data.albania[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#andorra").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            showCountry(data.andorra[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#austria").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            showCountry(data.austria[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#belgium").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            showCountry(data.belgium[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#westernBerlin").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            showCountry(data.westernBerlin[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#bulgaria").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            showCountry(data.bulgaria[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#czechoslovakia").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            showCountry(data.czechoslovakia[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#denmark").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            showCountry(data.denmark[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#irleand").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            showCountry(data.ireland[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });
});

/***/ })
/******/ ]);