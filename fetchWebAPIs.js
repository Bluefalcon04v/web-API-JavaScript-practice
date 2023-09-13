
const url = "https://www.discoveryvip.com/shared/json.php?f=peopledata1"; //URL to be fetched
let output = document.querySelector(".container")  // getting the container of web page

fetch(url).then(function(res){ // fetched data will be promised based 
    return res.json() // returning JSON data
}).then(function(value){
    let i = 0;
    value.data.forEach(function(names){ // forEach loop to go through the JSON data 
        i +=1 
        output.innerHTML += `${i}) first Name: ${names.firstName} last Name: ${names.lastName}  <br/>` // updating the html of webpage
    })
}).catch(function(err){  // error handling
    console.log(err);
})