document.addEventListener("DOMContentLoaded", () => {

    $("#mainMenu").on("click", ()=>{
        $("#mainList").toggleClass("hide");
    });

    $("#europe").on("click", ()=>{
        $("#subListEurope").toggleClass("hide");
        $("#europe").toggleClass("red");
    });


    function showCountry(country){
        $("#description").empty();
        $("#description").append(country.title, country.subtitle, country.position, country.area, country.adminDivision, country.capitol, country.biggestCities, 
        country.population, country.naturalConditions, country.language, country.currency, country.historyPoliticalSystem, country.economy, country.map);
    }

    $("#albania").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.albania[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });

    $("#andorra").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.andorra[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });

    $("#austria").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.austria[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });

    $("#belgium").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.belgium[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });

    $("#westernBerlin").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.westernBerlin[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });

    $("#bulgaria").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.bulgaria[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    

    $("#czechoslovakia").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.czechoslovakia[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    

    $("#denmark").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.denmark[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    
    
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
