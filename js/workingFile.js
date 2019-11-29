const path = 'https://szymekcendecki.github.io/atlas-85/json/';

let clickCountry = (country) =>{
    document.getElementById("mainContainer").innerHTML = "";
    document.getElementById("mainContainer").innerHTML = country.title + country.subtitle + country.position + country.area + country.adminDivision + country.capitol + country.biggestCities + country.population + country.naturalConditions + country.language + country.currency + country.historyPoliticalSystem + country.economy + country.map; 
}

fetch(path + 'europa.json')
.then(response => response.json())
.then(data => {         
    document.getElementById("europeDescription").addEventListener("click", ()=>{ clickCountry(data.europeDescription[0]); });     
    document.getElementById("albania").addEventListener("click", ()=>{ clickCountry(data.albania[0]); });        
    document.getElementById("andorra").addEventListener("click", ()=>{ clickCountry(data.andorra[0]); });     
    document.getElementById("austria").addEventListener("click", ()=>{ clickCountry(data.austria[0]); });   
    document.getElementById("belgium").addEventListener("click", ()=>{ clickCountry(data.belgium[0]); }); 
    document.getElementById("westernBerlin").addEventListener("click", ()=>{ clickCountry(data.westernBerlin[0]); }); 
    document.getElementById("bulgaria").addEventListener("click", ()=>{ clickCountry(data.bulgaria[0]); }); 
    document.getElementById("czechoslovakia").addEventListener("click", ()=>{ clickCountry(data.czechoslovakia[0]); });
    document.getElementById("denmark").addEventListener("click", ()=>{ clickCountry(data.denmark[0]); });
    document.getElementById("finland").addEventListener("click", ()=>{ clickCountry(data.finland[0]); }); 
    document.getElementById("france").addEventListener("click", ()=>{ clickCountry(data.france[0]); }); 
    document.getElementById("gibraltar").addEventListener("click", ()=>{ clickCountry(data.gibraltar[0]); }); 
    document.getElementById("greece").addEventListener("click", ()=>{ clickCountry(data.greece[0]); }); 
    document.getElementById("spain").addEventListener("click", ()=>{ clickCountry(data.spain[0]); }); 
    document.getElementById("holland").addEventListener("click", ()=>{ clickCountry(data.holland[0]); });  
    document.getElementById("irleand").addEventListener("click", ()=>{ clickCountry(data.irleand[0]); }); 
    document.getElementById("iceland").addEventListener("click", ()=>{ clickCountry(data.iceland[0]); }); 
    document.getElementById("yugoslavia").addEventListener("click", ()=>{ clickCountry(data.yugoslavia[0]); });
    document.getElementById("liechtenstein").addEventListener("click", ()=>{ clickCountry(data.liechtenstein[0]); }); 
    document.getElementById("luxembourg").addEventListener("click", ()=>{ clickCountry(data.luxembourg[0]); });
    document.getElementById("malta").addEventListener("click", ()=>{ clickCountry(data.malta[0]); });  
    document.getElementById("monaco").addEventListener("click", ()=>{ clickCountry(data.monaco[0]); }); 
    document.getElementById("eastGermany").addEventListener("click", ()=>{ clickCountry(data.eastGermany[0]); });
    document.getElementById("norway").addEventListener("click", ()=>{ clickCountry(data.norway[0]); });  
    document.getElementById("poland").addEventListener("click", ()=>{ clickCountry(data.poland[0]); });
    document.getElementById("portugal").addEventListener("click", ()=>{ clickCountry(data.portugal[0]); });  
    document.getElementById("westGermany").addEventListener("click", ()=>{ clickCountry(data.westGermany[0]); });
    document.getElementById("romania").addEventListener("click", ()=>{ clickCountry(data.romania[0]); }); 
    document.getElementById("sanMarino").addEventListener("click", ()=>{ clickCountry(data.sanMarino[0]); }); 
    document.getElementById("switzerland").addEventListener("click", ()=>{ clickCountry(data.switzerland[0]); });
    document.getElementById("sweden").addEventListener("click", ()=>{ clickCountry(data.sweden[0]); });
    document.getElementById("vatican").addEventListener("click", ()=>{ clickCountry(data.vatican[0]); }); 
    document.getElementById("hungary").addEventListener("click", ()=>{ clickCountry(data.hungary[0]); });
    document.getElementById("england").addEventListener("click", ()=>{ clickCountry(data.england[0]); });
    document.getElementById("italy").addEventListener("click", ()=>{ clickCountry(data.italy[0]); });
    document.getElementById("cccp").addEventListener("click", ()=>{ clickCountry(data.cccp[0]); });    
})
.catch(error => console.error(error))


fetch(path + 'northAmerica.json')
.then(response => response.json())
.then(data => {         
    document.getElementById("northAmericaDescription").addEventListener("click", ()=>{ clickCountry(data.northAmericaDescription[0]); }); 
    document.getElementById("bermudas").addEventListener("click", ()=>{ clickCountry(data.bermudas[0]); });
    document.getElementById("greenland").addEventListener("click", ()=>{ clickCountry(data.greenland[0]); }); 
    document.getElementById("canada").addEventListener("click", ()=>{ clickCountry(data.canada[0]); });
    document.getElementById("saintPierreMiquelon").addEventListener("click", ()=>{ clickCountry(data.saintPierreMiquelon[0]); });
    document.getElementById("usa").addEventListener("click", ()=>{ clickCountry(data.usa[0]); });          
})
.catch(error => console.error(error))
