const url = "https://www.reddit.com/r/test/top/.json?limit=5";
let output = document.querySelector(".container");
let button = document.querySelector("#btn");

button.addEventListener("click",getData);
function getData(){
    output.innerHTML = "";
    fetch(url).then(response => response.json()).then(values =>{
        updateHtml(values.data.children);
    })
}

function updateHtml(value){
    output.innerHTML = "";
    value.forEach(items => {
        let redditContainer = document.createElement("div");
        let title = document.createElement("h3");
        title.style.fontFamily = "Helvetica";

        title.innerHTML = `Title: ${items.data.title} <a href="${ items.data.url}" target=_blank> Link </a> `

        output.appendChild(redditContainer);
        redditContainer.appendChild(title)
    })
}