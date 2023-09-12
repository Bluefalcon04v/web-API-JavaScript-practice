const friendList = ['Sam', 'John', 'Brian', 'Bob', 'peter'];
let friends = [];

friendList.forEach(function(item) {
    friends.push({"name": item})
});

console.log(friends);