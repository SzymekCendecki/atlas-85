import {showCountryList, jsonIteration, clickCountry, clickCountryAmericas} from './functions.js';

document.addEventListener("DOMContentLoaded", () => {

    const path = 'https://szymekcendecki.github.io/atlas-85/json/';

    document.getElementById("mainMenu").addEventListener('click', ()=>{
        document.getElementById("mainList").classList.toggle("hide");
    });

    //europe
    showCountryList("europe", "subListEurope");

    const europeArrayJson = [];

    const europeArray = ["europeDescription", "albania", "andorra", "austria", "belgium", "westernBerlin", "bulgaria", "czechoslovakia", "denmark", "finland", "france", "gibraltar", "greece", "spain", "holland", "ireland", "iceland", "yugoslavia", "liechtenstein", "luxembourg", "malta", "monaco", "eastGermany", "norway", "poland", "portugal", "westGermany", "romania", "sanMarino", "switzerland", "sweden", "vatican", "hungary", "england", "italy", "cccp"];
   
    fetch(path + 'europa.json')
    .then(response => response.json())
    .then(data => {
        jsonIteration(europeArrayJson, data);
        clickCountry(europeArray, europeArrayJson, "subListEurope");
    })
    .catch(error => console.error(error))

    //america
    showCountryList("america", "subListAmericas");
    showCountryList("northAmerica", "subListNorthAmerica");
    showCountryList("southAmerica", "subListSouthAmerica");

    const northAmericaJson = [];
    const northAmerica = ["northAmericaDescription", "bermudas", "greenland", "canada", "saintPierreMiquelon", "usa"];

    fetch(path + 'northAmerica.json')
    .then(response => response.json())
    .then(data => {
        jsonIteration(northAmericaJson, data);
        clickCountryAmericas(northAmerica, northAmericaJson, "subListAmericas");
    })
    .catch(error => console.error(error))

    const southAmericaJson = [];
    const southAmerica = ["southAmericaDescription", "anguilla", "antiguaBarbuda", "dutchAntilles", "argentina", "bahamas", "barbados", "belize", "bolivia", "brazil", "chile", "dominica", "dominicanRepublic", "britishVirginIslands", "usaVirginIslands", "ecuador", "falklandsMalvinas", "grenada", "guiana", "frenchGuiana", "guadeloupe", "guatemala", "haiti", "honduras", "jamaica", "caimas", "columbia", "costaRica", "cuba", "martinique", "mexico", "monserrat", "nicaragua", "panama", "paraguay", "peru", "puertorico", "sanChristopherNevis", "stLucia", "stVincent", "salvador", "suriname", "trynidadTobago", "turksCaicos", "uruguay", "venezuela"];

    fetch(path + 'southAmerica.json')
    .then(response => response.json())
    .then(data => {
        jsonIteration(southAmericaJson, data);
        clickCountryAmericas(southAmerica, southAmericaJson, "subListAmericas");
    })
    .catch(error => console.error(error))

    //africa
    showCountryList("africa", "subListAfrica");

    const africaArrayJson = [];

    const africaArray = ["africaDescription", "algieria", "angola", "benin", "bostwana", "burkinafaso", "burundi", "ceuta", "czad", "djibouti", "egypt", "ethiopia", "gabon", "gambia", "ghana", "guinea", "equatorialGuinea", "cameroon", "kenya", "comoros", "kongo", "lesotho", "livery", "libya", "madagascar", "malawi", "mali", "morocco", "mauretania", "mauritius", "melilla", "mozambique", "namibia", "niger", "nigeria", "southAfrica", "centralAfricanRepublic", "reunion", "rwanda", "westernSahara", "senegal", "seychelles", "sierraLeone", "somalia", "ndebele", "sudan", "saintHelena", "tanzania", "togo", "tunisia", "uganda", "ivoryCoast", "saintThomasPrince", "zaire", "zambia", "capeVerde", "zimbabwe"];

    fetch(path + 'africa.json')
    .then(response => response.json())
    .then(data => {
        jsonIteration(africaArrayJson, data);
        clickCountry(africaArray, africaArrayJson, "subListAfrica");
    })
    .catch(error => console.error(error))
    
    //asia
    showCountryList("asia", "subListAsia");

    const asiaArrayJson = [];

    const asiaArray = ["asiaDescription", "afghanistan", "saudiArabia", "bahrain", "bangladesh", "bhutan", "burma", "brunei", "china", "cyprus", "philippines", "hongkong", "india", "indonesia", "iraq", "iran", "izrael", "japan", "yemen", "southernYemen"];

    fetch(path + 'asia.json')
    .then(response => response.json())
    .then(data => {
        jsonIteration(asiaArrayJson, data);
        clickCountry(asiaArray, asiaArrayJson, "subListAsia");
    })
    .catch(error => console.error(error))
});
