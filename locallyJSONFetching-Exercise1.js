const url = 'locallyJSONFetching-Exercise1.json';
const button = document.querySelector('#btn');
const output = document.querySelector('.container');

button.addEventListener('click', getData);

function getData() {
    output.innerHTML = ""
    fetch(url).then(response => response.json())
    .then(value => {
        value.forEach(data =>{
            console.log(data);
            let nameContainer = document.createElement('p');
            nameContainer.innerHTML = `Name: ${data.firstName} <br/> LastName: ${data.lastName}`
            nameContainer.style.backgroundColor = "lightgreen"
            output.appendChild(nameContainer);
        })
    });
}