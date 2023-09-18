const button = document.querySelector('#btn');
const output = document.querySelector('.container');
output.style.display = 'flex';
let url = "https://randomuser.me/api?results=5";

button.addEventListener('click', getData);

function getData(){
    fetch(url).then(val => val.json())
    .then(response => {
        response.results.forEach(value => {

            let boxContainer = document.createElement('div');
            boxContainer.style.border = "1px solid black"
            boxContainer.style.width = "280px"
            boxContainer.style.margin = "20px"

            let image = document.createElement('img');
            image.style.width = "inherit";
            let mainText = document.createElement('h3');
            let subText = document.createElement('p');


            image.src = value.picture.large;
            mainText.innerHTML = `${value.name.title} ${value.name.first} ${value.name.last}`
            subText.innerHTML = `Mail: ${value.email} <br/> ${value.location.city} ${value.location.state} ${value.location.country}`
            output.appendChild(boxContainer)
            boxContainer.appendChild(image);
            boxContainer.appendChild(mainText);
            boxContainer.appendChild(subText);
        })
    })
}