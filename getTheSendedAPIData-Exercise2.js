const url = 'https://script.google.com/macros/s/AKfycbwIrTmXmMCtgC-1VVitPdm9cnqj7tLZV8m4BvR2wKDrm9cvxBw/exec';
let output = document.querySelector('.container');
let button = document.querySelector('#btn');

button.addEventListener('click', getData);

let page = 1
function getData(){
    let html = "Page " + page + "<br/>";
    output.innerHTML = html;
    fetch(url +"?pg=" +page).then(response => response.json())
    .then(data => {
        console.log(data);
        data.data.forEach(values =>{
            html += values[0] + " " + values[1] + " " + values[2] + " " + values[3] + " " + values[4] + " " + values[5] + "<br/>"; 
        })
        output.innerHTML += html;
        if(data.pgs.previous !== null){
            let btn1 = document.createElement('button')
            btn1.textContent = data.pgs.previous;
            btn1.addEventListener('click', function(e){
                page = data.pgs.previous;
                getData()
            });
            output.appendChild(btn1)
        }
        if(data.pgs.next !== null){
            let btn2 = document.createElement('button')
            btn2.textContent = data.pgs.next;
            btn2.addEventListener('click', function(e){
                page = data.pgs.next;
                getData()
            });
            output.appendChild(btn2)
        }
    });
}