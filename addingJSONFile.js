const output = document.querySelector('div');
const url = 'temp1.json'; // calling the json file 
const button = document.querySelector('#btn').addEventListener('click',()=>{
    fetch(url)
    .then(res => res.json()) // getting promise
    .then(data => {  // accessing the data of json
        addData(data) // passing data to the function
    })
});

function addData(data) {
    let html = ''; // creating html element
    data.forEach(person =>{
        html += `<p> Name : ${person.name}, Occupation : ${person.occupation}, City : ${person.city}, Employee Number : ${person.employee_number} </p>` ; // adding data into the element
    })
    output.innerHTML = html;
}