let title = document.querySelector(".title");
title.innerHTML ="<h1> News App </h1>";

let main = document.querySelector(".main");
let allContent = "";

function handleSuccess () { 
    const data = JSON.parse( this.responseText ); 
    // console.log( data.results[0].title );
    // console.log( data.results[0].abstract );
    // console.log( data.results[0].url );
    // console.log( data.results[0].byline );
    // console.log( data.results[0].created_date );
    // console.log( data.results[0].multimedia[0].url );
    for (let i = 0; i < data.results.length; i++) {
        allContent += `<div class="content">
        <img src="${data.results[i].multimedia[0].url}" alt="${data.results[i].title}">
        <h2>${data.results[i].title}</h2>
        <p> ${data.results[i].byline}</p>
        <p> ${data.results[i].abstract}</p>
        <p>${data.results[i].created_date}</p>
        <a href="${data.results[i].url}" target="_blank"> Read Article</a>
        </div>
        `;        
    }

    main.innerHTML = allContent;

}
  
function handleError () { 
    console.log( 'An error occurred \uD83D\uDE1E' );
}
  

const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET', "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ADD-YOUR-API-KEY");
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();