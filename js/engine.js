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

    $("#mainMenu").on("click", function () {
        $("#mainList").toggleClass("hide");
    });

    $("#europe").on("click", function () {
        $("#subListEurope").toggleClass("hide");
        $("#europe").toggleClass("red");
    });

    var x = document.querySelectorAll("#subListEurope > li");
    console.log(x);

    for (var i = 0; i < x.length; i++) {
        var y = $(x[i]).attr("id");
        console.log(y);
    }

    $("#albania").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.albania[0]);
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
            (0, _functions.showCountry)(data.andorra[0]);
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
            (0, _functions.showCountry)(data.austria[0]);
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
            (0, _functions.showCountry)(data.belgium[0]);
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
            (0, _functions.showCountry)(data.westernBerlin[0]);
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
            (0, _functions.showCountry)(data.bulgaria[0]);
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
            (0, _functions.showCountry)(data.czechoslovakia[0]);
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
            (0, _functions.showCountry)(data.denmark[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#finland").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.finland[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#france").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.france[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#gibraltar").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.gibraltar[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#greece").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.greece[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#spain").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.spain[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#holland").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.holland[0]);
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
            (0, _functions.showCountry)(data.ireland[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#iceland").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.iceland[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#yugoslavia").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.yugoslavia[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#liechtenstein").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.liechtenstein[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#luxembourg").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.luxembourg[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#malta").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.malta[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#monaco").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.monaco[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#eastGermany").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.eastGermany[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#norway").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.norway[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#poland").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.poland[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#portugal").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.portugal[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#westGermany").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.westGermany[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#romania").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.romania[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#sanMarino").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.sanMarino[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#switzerland").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.switzerland[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#sweden").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.sweden[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#vatican").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.vatican[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#hungary").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.hungary[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#england").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.england[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#italy").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.italy[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $("#cccp").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            (0, _functions.showCountry)(data.cccp[0]);
            $("#subListEurope").toggleClass("hide");
            $("#mainList").toggleClass("hide");
        }).fail(function () {
            console.log("coś nie bangla...");
        });
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
function showCountry(country) {
    $("#description").empty();
    $("#description").append(country.title, country.subtitle, country.position, country.area, country.adminDivision, country.capitol, country.biggestCities, country.population, country.naturalConditions, country.language, country.currency, country.historyPoliticalSystem, country.economy, country.map);
}

/***/ })
/******/ ]);