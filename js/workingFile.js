import {showCountry} from './functions.js';

document.addEventListener("DOMContentLoaded", () => {

    $("#mainMenu").on("click", ()=>{
        $("#mainList").toggleClass("hide");
    });

    $("#europe").on("click", ()=>{
        $("#subListEurope").toggleClass("hide");
        $("#europe").toggleClass("red");
    });

    let x = document.querySelectorAll("#subListEurope > li");
    console.log(x);

    const europeArray = [];

    for(let i=0; i<x.length; i++){
        let y = $(x[i]).attr("id");     
        console.log(y);        
    }


      $.ajax({
        url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
        type: 'GET',
        dataType: 'json'
    }).done((data) => {  
        $.each(data, function(i, item) {
            europeArray.push(item);            
        });
        console.log(europeArray);
    }).fail(()=>{ 
        console.log("coś nie bangla..."); 
    }); 

        
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
    
    $("#finland").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.finland[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    

    $("#france").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.france[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    

    $("#gibraltar").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.gibraltar[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    

    $("#greece").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.greece[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    

    $("#spain").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.spain[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    

    $("#holland").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.holland[0]);
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

    $("#iceland").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.iceland[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    

    $("#yugoslavia").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.yugoslavia[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    

    $("#liechtenstein").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.liechtenstein[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    

    $("#luxembourg").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.luxembourg[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   
    
    $("#malta").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.malta[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });    

    $("#monaco").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.monaco[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });  
    
    $("#eastGermany").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.eastGermany[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    }); 
    
    $("#norway").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.norway[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   

    $("#poland").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.poland[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   
 
    $("#portugal").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.portugal[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   

    $("#westGermany").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.westGermany[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   

    $("#romania").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.romania[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   

    $("#sanMarino").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.sanMarino[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   

    $("#switzerland").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.switzerland[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    }); 
    
    $("#sweden").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.sweden[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   

    $("#vatican").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.vatican[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   

    $("#hungary").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.hungary[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   

    $("#england").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.england[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   

    $("#italy").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.italy[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });  
    
    $("#cccp").on("click", ()=>{
        $.ajax({
            url: 'https://szymekcendecki.github.io/atlas-85/json/europa.json',
            type: 'GET',
            dataType: 'json'
        }).done((data) => {  
             showCountry(data.cccp[0]);
             $("#subListEurope").toggleClass("hide");
             $("#mainList").toggleClass("hide");
        }).fail(()=>{ 
            console.log("coś nie bangla..."); 
        });  
    });   
});
