let friendList = [
    {name: 'Sam'},
    {name: 'John'},
    {name: 'Brian'},
    {name: 'Bob'},
    {name: 'peter'},
];

for (let i in friendList) { // looping into the object "i" = index 
    friendList[i].lastname="Smith", friendList[i].city="San Francisco";
}

console.log(friendList);
console.log(friendList[3].name);