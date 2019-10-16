import {showCountry} from './functions.js';
import {showHideLists} from './functions.js';

document.addEventListener("DOMContentLoaded", () => {

    $("#mainMenu").on("click", ()=>{
        $("#mainList").toggleClass("hide");
    });

    $("#europe").on("click", ()=>{
        $("#subListEurope").toggleClass("hide");
        $("#europe").toggleClass("red");
    });

    const europeArrayJson = [];

    const europeArray = ["europeDescription", "albania", "andorra", "austria", "belgium", "westernBerlin", "bulgaria", "czechoslovakia", "denmark", "finland", "france", "gibraltar", "greece", "spain", "holland", "ireland", "iceland", "yugoslavia", "liechtenstein", "luxembourg", "malta", "monaco", "eastGermany", "norway", "poland", "portugal", "westGermany", "romania", "sanMarino", "switzerland", "sweden", "vatican", "hungary", "england", "italy", "cccp"];

    $.ajax({
        url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
        type: 'GET',
        dataType: 'json'
    }).done((data) => {  
        $.each(data, function(i, item) {
            europeArrayJson.push(item);            
        });
       
        for(let i=0; i<europeArray.length; i++){
            $("#"+ europeArray[i]).on("click", ()=>{
                showCountry(europeArrayJson[i][0]);
                showHideLists("#subListEurope");              
            });            
        }        
    }).fail(()=>{ 
        console.log("coś nie bangla..."); 
    }); 

});
