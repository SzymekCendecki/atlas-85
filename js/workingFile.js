document.addEventListener("DOMContentLoaded", () => {
    $.ajax({
        url: 'https://szymekcendecki.github.io/atlas-86/json/europa.json',
        type: 'GET',
        dataType: 'json'
        }).done((data) => {  
          console.log(data);
        }).fail(()=>{ console.log("coś nie bangla..."); });  
});
