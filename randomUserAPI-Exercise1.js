const url = 'https://randomuser.me/api/?results=10';
let output = document.querySelector(".container");
let button = document.querySelector("#btn");

button.addEventListener("click",getData); // adding click event to the button to fetch API

function getData(){
    output.innerHTML = "";
    fetch(url).then(response => response.json()).then(values => {
        values.results.forEach(details =>{
            // creating an person Container 
            let personContainer = document.createElement("div");
            personContainer.style.backgroundColor = "#e7f1f4";
            personContainer.style.display = "flex"
            personContainer.style.margin = "10px"
            personContainer.style.alignItems = "center";
            // appending image to personContainer
            let image = document.createElement("img");
            image.setAttribute("src", details.picture.medium);
            image.style.padding = "10px"
            // appending name to personContainer
            let name = document.createElement("h3");
            name.innerHTML = `Name: ${details.name.title} ${details.name.first} ${details.name.last}`
            name.style.display = "flex";
            name.style.margin = "10px"
            // appending email to personContainer
            let email = document.createElement("p");
            email.innerHTML = `Email: ${details.email}`;
            // appending the content to html
            output.appendChild(personContainer)
            personContainer.appendChild(image);
            personContainer.appendChild(name);
            personContainer.appendChild(email);
        })
    });
};

