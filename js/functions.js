
export function showCountry(country){
    $("#description").empty();
    $("#description").append(country.title, country.subtitle, country.position, country.area, country.adminDivision, country.capitol, country.biggestCities, country.population, country.naturalConditions, country.language, country.currency, country.historyPoliticalSystem, country.economy, country.map);
}

export function showCountryList(continent, subList){
    $("#" + continent).on("click", ()=>{
        $("#" + subList).toggleClass("hide");
        $("#" + continent).toggleClass("red");
    });
}

export function jsonIteration(arrayJson, data){
    $.each(data, function(i, item) {
        arrayJson.push(item);            
    });
}

export function clickCountry(countryArray, countryArrayJson, subList){
    for(let i=0; i<countryArray.length; i++){
        $("#"+ countryArray[i]).on("click", ()=>{
            showCountry(countryArrayJson[i][0]);
            showHideLists("#" + subList);              
        });            
    }     
}

export function showHideLists(sublist){
    $(sublist).toggleClass("hide");
    $("#mainList").toggleClass("hide");
}

