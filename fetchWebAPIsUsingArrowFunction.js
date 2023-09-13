const url = "https://www.discoveryvip.com/shared/json.php?f=peopledata1"; 
let output = document.querySelector(".container");

fetch(url).then(res => res.json()).then(value => {
    let i = 1;
    value.data.forEach(names => {
        output.innerHTML += `${i}) firstName: ${names.firstName} lastName: ${names.lastName} <br/>`
        i += 1;
    })
})
