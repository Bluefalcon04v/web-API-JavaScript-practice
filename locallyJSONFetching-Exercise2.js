const url = "locallyJSONFetching-Exercise2.json"
const button = document.querySelector("#btn");
const container = document.querySelector(".container");

button.addEventListener("click", getJSON);

function getJSON() {
    container.innerHTML = "";
    fetch(url).then((response) => response.json())
    .then((value) => {
        value.forEach((navigator) =>{
            let listItems = document.createElement("li");
            listItems.style.fontFamily = "Helvetica"
            listItems.style.margin = "5px"

            listItems.innerHTML = `Name: ${navigator.firstName}, Occupation: ${navigator.occupation}, City: ${navigator.city}`;
            container.appendChild(listItems)
        })
    })
}
