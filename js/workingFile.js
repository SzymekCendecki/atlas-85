document.addEventListener("DOMContentLoaded", () => {

    function showCountry(country){
        $("#mainContainer").append(country.title, country.subtitle, country.position, country.area, country.adminDivision, country.capitol, country.biggestCities, 
        country.population, country.naturalConditions, country.language, country.currency, country.historyPoliticalSystem, country.economy, country.map);
    }
    
    $.ajax({
        url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
        type: 'GET',
        dataType: 'json'
    }).done((data) => {  
         showCountry(data.austria[0]);
    }).fail(()=>{ 
        console.log("coś nie bangla..."); 
    });  
});
