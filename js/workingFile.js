const path = 'https://szymekcendecki.github.io/atlas-85/json/';

const europeArrayJson = [];

const europeArray = ["europeDescription", "albania", "andorra", "austria", "belgium", "westernBerlin", "bulgaria", "czechoslovakia", "denmark", "finland", "france", "gibraltar", "greece", "spain", "holland", "irleand", "iceland", "yugoslavia", "liechtenstein", "luxembourg", "malta", "monaco", "eastGermany", "norway", "poland", "portugal", "westGermany", "romania", "sanMarino", "switzerland", "sweden", "vatican", "hungary", "england", "italy", "cccp"];

fetch(path + 'europa.json')
.then(response => response.json())
.then(data => {
   // Object.keys(data).forEach(element => console.log(element, element.length));  
   //jsonIteration(europeArrayJson, data);
    //clickCountry(europeArray, europeArrayJson);

    document.getElementById("europeDescription").addEventListener("click", ()=>{
        document.getElementById("mainContainer").innerHTML = "";
        document.getElementById("mainContainer").innerHTML = data.europeDescription[0].title +
        data.europeDescription[0].subtitle + data.europeDescription[0].position + data.europeDescription[0].area + data.europeDescription[0].adminDivision + data.europeDescription[0].capitol + data.europeDescription[0].biggestCities + data.europeDescription[0].population + data.europeDescription[0].naturalConditions + data.europeDescription[0].language + data.europeDescription[0].currency + data.europeDescription[0].historyPoliticalSystem + data.europeDescription[0].economy + data.europeDescription[0].map;
   });     

    document.getElementById("albania").addEventListener("click", ()=>{
        document.getElementById("mainContainer").innerHTML = "";
        document.getElementById("mainContainer").innerHTML = data.albania[0].title +
        data.albania[0].subtitle + data.albania[0].position + data.albania[0].area + data.albania[0].adminDivision + data.albania[0].capitol + data.albania[0].biggestCities + data.albania[0].population + data.albania[0].naturalConditions + data.albania[0].language + data.albania[0].currency + data.albania[0].historyPoliticalSystem + data.albania[0].economy + data.albania[0].map;
   });     
   
   document.getElementById("andorra").addEventListener("click", ()=>{
    document.getElementById("mainContainer").innerHTML = "";
    document.getElementById("mainContainer").innerHTML = data.andorra[0].title +
    data.andorra[0].subtitle + data.andorra[0].position + data.andorra[0].area + data.andorra[0].adminDivision + data.andorra[0].capitol + data.andorra[0].biggestCities + data.andorra[0].population + data.andorra[0].naturalConditions + data.andorra[0].language + data.andorra[0].currency + data.andorra[0].historyPoliticalSystem + data.andorra[0].economy + data.andorra[0].map;
});  
   

})
.catch(error => console.error(error))

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

const showCountry = country =>{
    document.getElementById("mainContainer").innerHTML = "";
    document.getElementById("mainContainer").innerHTML = `country.title,  country.subtitle, country.position, country.area, country.adminDivision, country.capitol, country.biggestCities, country.population, country.naturalConditions, country.language, country.currency, country.historyPoliticalSystem, country.economy, country.map`;
}