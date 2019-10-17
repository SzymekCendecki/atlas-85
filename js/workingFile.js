import {showCountryList, jsonIteration, clickCountry} from './functions.js';

document.addEventListener("DOMContentLoaded", () => {

    const path = 'https://szymekcendecki.github.io/atlas-85/json/';

    $("#mainMenu").on("click", ()=>{
        $("#mainList").toggleClass("hide");
    });

    //europe
    showCountryList("europe", "subListEurope");

    const europeArrayJson = [];

    const europeArray = ["europeDescription", "albania", "andorra", "austria", "belgium", "westernBerlin", "bulgaria", "czechoslovakia", "denmark", "finland", "france", "gibraltar", "greece", "spain", "holland", "ireland", "iceland", "yugoslavia", "liechtenstein", "luxembourg", "malta", "monaco", "eastGermany", "norway", "poland", "portugal", "westGermany", "romania", "sanMarino", "switzerland", "sweden", "vatican", "hungary", "england", "italy", "cccp"];

    $.ajax({
        url: path + 'europa.json',
        type: 'GET',
        dataType: 'json'
    }).done((data) => {  
        jsonIteration(europeArrayJson, data);
        clickCountry(europeArray, europeArrayJson, "subListEurope");
    }).fail(()=>{ 
        console.log("coś nie bangla..."); 
    }); 

    //afryka
    showCountryList("africa", "subListAfrica");

    const africaArrayJson = [];

    const africaArray = ["africaDescription", "algieria", "angola", "benin", "bostwana", "burkinafaso", "burundi", "ceuta", "czad", "djibouti", "egypt", "ethiopia", "gabon", "gambia", "ghana", "guinea", "equatorialGuinea", "cameroon", "kenya", "comoros", "kongo", "lesotho", "livery", "libya", "madagascar", "malawi", "mali", "morocco", "mauretania", "mauritius", "melilla", "mozambique", "namibia", "niger", "nigeria", "southAfrica", "centralAfricanRepublic", "reunion", "rwanda", "westernSahara", "senegal", "seychelles", "sierraLeone", "somalia", "ndebele", "sudan", "saintHelena", "tanzania", "togo", "tunisia", "uganda", "ivoryCoast", "saintThomasPrince", "zaire", "zambia", "capeVerde", "zimbabwe"];

    $.ajax({
        url: path + 'africa.json',
        type: 'GET',
        dataType: 'json'
    }).done((data) => {  
        jsonIteration(africaArrayJson, data);
        clickCountry(africaArray, africaArrayJson, "subListAfrica");
    }).fail(()=>{ 
        console.log("coś nie bangla..."); 
    }); 

});
