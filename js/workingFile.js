document.addEventListener("DOMContentLoaded", () => {
    $.ajax({
        url: 'https://szymekcendecki.github.io/atlas-86/json/europa.json',
        type: 'GET',
        dataType: 'json'
    }).done((data) => {  
        console.log(data);

        $("#mainContainer").append(data.europaDescription[0].position, data.europaDescription[0].area, data.europaDescription[0].adminDivision, data.europaDescription[0].biggestCities, data.europaDescription[0].population, data.europaDescription[0].naturalConditions, data.europaDescription[0].historyPoliticalOutline, data.europaDescription[0].Economy)
    }).fail(()=>{ 
        console.log("coś nie bangla..."); 
    });  
});
