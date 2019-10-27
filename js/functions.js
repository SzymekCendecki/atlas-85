
export const subListsCheck = ["subListEurope", "subListAmericas", "subListAfrica", "subListAsia"];

export const showCountry = country =>{
    document.getElementById("description").innerHTML = "";
    $("#description").append(country.title, country.subtitle, country.position, country.area, country.adminDivision, country.capitol, country.biggestCities, country.population, country.naturalConditions, country.language, country.currency, country.historyPoliticalSystem, country.economy, country.map);
}

export const showCountryList = (continent, subList) =>{
    document.getElementById(continent).addEventListener('click', ()=>{
        document.getElementById(subList).classList.toggle("hide");
        document.getElementById(continent).classList.toggle("red");
    });
}

export let jsonIteration = (arrayJson, data) =>{
    $.each(data, function(i, item) {
        arrayJson.push(item);            
    });
}

export let checkHideShow = subLists =>{
    for(let i=0; i<subLists.length; i++){
        let x = document.getElementById(subLists[i]).getAttribute("class");

       if (x === "show"){
           x.toggleClass("hide");
       }
    }
}

export let clickCountry = (countryArray, countryArrayJson, subList) =>{
    for(let i=0; i<countryArray.length; i++){
        document.getElementById(countryArray[i]).addEventListener("click", ()=>{
            showCountry(countryArrayJson[i][0]);
            showHideLists(subList);               
        });            
    }
   
    checkHideShow(subListsCheck);
}

export let clickCountryAmericas = (countryArray, countryArrayJson, subList) =>{
    for(let i=0; i<countryArray.length; i++){
        document.getElementById(countryArray[i]).addEventListener("click", ()=>{
            showCountry(countryArrayJson[i][0]);
            showHideLists(subList);      
        });            
    }     
}

export const showHideLists = sublist =>{
    document.getElementById(sublist).classList.toggle("hide");
    document.getElementById("mainList").classList.toggle("hide");
}
