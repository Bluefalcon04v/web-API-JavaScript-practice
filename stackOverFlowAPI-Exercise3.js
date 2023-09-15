const url = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=javascript&site=stackoverflow';
let output = document.querySelector(".container");
let button = document.querySelector("#btn");

button.addEventListener("click", getData);
function getData() {
  output.innerHTML = "";
  fetch(url)
    .then((response) => response.json())
    .then((value) => {
      callingData(value.items);
    });
}

function callingData(value) {
    output.innerHTML = "";
    
    value.forEach(item =>{
        let stackoverflowContainer = document.createElement("div");
        stackoverflowContainer.style.padding = "10px";
        
        let questionsContainer = document.createElement("p");
        questionsContainer.style.display = "flex";
        questionsContainer.style.alignItems = "center";
        questionsContainer.style.backgroundColor = "#010162";
        questionsContainer.style.color = "white";
        questionsContainer.style.padding = "10px";

        questionsContainer.innerHTML = `<img src="${item.owner.profile_image}" width="50px"></img> <br/> Name: ${item.owner.display_name} <br/> Title: ${item.title} <br/> <a href="${item.link}" target=_blank>${item.link} </a>`;

        output.appendChild(stackoverflowContainer);
        stackoverflowContainer.appendChild(questionsContainer);
    });


}