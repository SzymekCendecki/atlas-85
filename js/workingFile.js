const path = 'https://szymekcendecki.github.io/atlas-85/json/';

let clickCountry = (array, data) =>{
    for(let i = 0; i<Object.keys(data).length; i++){
        document.getElementById(array[i]).addEventListener("click", ()=>{ 
            document.getElementById("mainContainer").innerHTML = "";
            document.getElementById("mainContainer").innerHTML = data[Object.keys(data)[i]]; 
        });
    } 
}

let fetchJSON = (continent, continent2) =>{
    fetch(path + continent).then(response => response.json()).then(data => { 
        clickCountry(continent2, data);
     }).catch(error => console.error(error))
}

const europe = ["europeDescription", "albania", "andorra", "austria", "belgium", "westernBerlin", "bulgaria", "czechoslovakia", "denmark", "finland", "france", "gibraltar", "greece", "spain", "holland", "irleand", "iceland", "yugoslavia", "liechtenstein", "luxembourg", "malta", "monaco", "eastGermany", "norway", "poland", "portugal", "westGermany", "romania", "sanMarino", "switzerland", "sweden", "vatican", "hungary", "england", "italy", "cccp"];

const northAmerica = ["northAmericaDescription", "bermudas", "greenland", "canada", "saintPierreMiquelon", "usa"];

const southAmerica = ["southAmericaDescription", "anguilla", "antiguaBarbuda", "dutchAntilles", "argentina", "bahamas", "barbados", "belize", "bolivia", "brazil", "chile", "dominica", "dominicanRepublic", "britishVirginIslands", "usaVirginIslands", "ecuador", "falklandMalvinas", "grenada", "guiana", "frenchGuiana", "guadeloupe", "guatemala", "haiti", "honduras", "jamaica", "caimans", "columbia", "costaRica", "cuba", "martinique", "mexico", "montserrat", "nicaragua", "panama", "paraguay", "peru", "puertorico", "sanChristopherNevis", "stLucia", "stVincent", "salvador", "surinam", "trynidadTobago", "turksCaicos", "uruguay", "venezuela"];

const africa = ["africaDescription", "algieria", "angola", "benin", "bostwana", "burkinafaso", "burundi", "ceuta", "czad", "djibouti", "egypt", "ethiopia", "gabon", "gambia", "ghana", "guinea", "equatorialGuinea", "cameroon", "kenya", "comoros", "kongo", "lesotho", "livery", "libya", "madagascar", "malawi", "mali", "morocco", "mauretania", "mauritius", "melilla", "mozambique", "namibia", "niger", "nigeria", "southAfrica", "centralAfricanRepublic", "reunion", "rwanda", "westernSahara", "senegal", "seychelles", "sierraLeone", "somalia", "ndebele", "sudan", "saintHelena", "tanzania", "togo", "tunisia", "uganda", "ivoryCoast", "saintThomasPrince", "zaire", "zambia", "capeVerde", "zimbabwe"];

const asia = ["asiaDescription", "afghanistan", "saudiArabia", "bahrain", "bangladesh", "bhutan", "burma", "brunei", "china", "cyprus", "philippines", "hongkong", "india", "indonesia", "iraq", "iran", "izrael", "japan", "yemen", "southernYemen"];

const australia = ["australia"];

const oceania = [];

const antarctica = [];

fetchJSON('europa.json', europe);
fetchJSON('northAmerica.json', northAmerica);
fetchJSON('southAmerica.json', southAmerica);
fetchJSON('africa.json', africa);
fetchJSON('asia.json', asia);
fetchJSON('australia.json', australia);
