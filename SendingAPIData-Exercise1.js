const url = 'https://script.google.com/macros/s/AKfycbwIrTmXmMCtgC-1VVitPdm9cnqj7tLZV8m4BvR2wKDrm9cvxBw/exec';

let button = document.querySelector('#btn');
button.addEventListener('click', sendData);

function sendData(){
    let val1=
    document.querySelector('input[name="name"]').value || "Unknown";
    
    let val2=
    document.querySelector('input[name="message"]').value || "Hello, Mom";

    let array = [val1, val2];
    let formData = new FormData();
    formData.append('data', JSON.stringify(array));

    fetch(url,{
        method: 'POST',
        body: formData
    }).then(response =>{
        return response.json()
    })
    .then(result => {
        console.log(result);
    });

}