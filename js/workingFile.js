document.addEventListener("DOMContentLoaded", () => {

    $("#mainMenu").on("click", ()=>{
        $("#mainList").toggleClass("hide");
    });

    $("#europe").on("click", ()=>{
        $("#subListEurope").toggleClass("hide");
        $("#europe").toggleClass("red");
    });


    function showCountry(country){
        $("#description").append(country.title, country.subtitle, country.position, country.area, country.adminDivision, country.capitol, country.biggestCities, 
        country.population, country.naturalConditions, country.language, country.currency, country.historyPoliticalSystem, country.economy, country.map);
    }
    
    $("#irleand").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.ireland[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });
 
});
