// Question from the friendlist Array make it stringify so that it can't be able to edited after that assign another array, push new names in the new array and print it on the webpage

let friendList = [
    {name: 'Sam'},
    {name: 'John'},
    {name: 'Brian'},
    {name: 'Bob'},
    {name: 'peter'},
];
friendList = JSON.stringify(friendList); 

let friendList2 = JSON.parse(friendList); //converting JSON uneditable object to editable object 
friendList2.push({name :"Bruce"});  // pushing object in array 


let html = "" ;

friendList2.forEach((value) => { 
    html += `<p> ${value.name} </p>`// updating the html content
})

document.querySelector(".container").innerHTML = html;
// console.log(friendList2[1].name);
// console.log(friendList2);