const url =
  "https://api.github.com/search/repositories?q=tetris&sort=stars&order=desc";
let output = document.querySelector(".container");
let button = document.querySelector("#btn");

button.addEventListener("click", getData);
function getData() {
  output.innerHTML = "";
  fetch(url)
    .then((response) => response.json())
    .then((value) => {
      htmlUpdate(value.items);
    });
}

function htmlUpdate(data) {
  output.innerHTML = "";
  data.forEach((item) => {
    let gitHubContainer = document.createElement("div");
    let gitHubRepo = document.createElement("h3");
    gitHubRepo.xurl = item.url;

    gitHubRepo.innerHTML = `${item.name} ${item.description}`;

    output.appendChild(gitHubContainer);
    gitHubContainer.appendChild(gitHubRepo);

    gitHubRepo.addEventListener("click", (e) => {
      fetch(item.url)
        .then((response) => response.json())
        .then((value) => {
          let webLink = document.createElement("span");
          webLink.innerHTML = `<br/> <a href= "${value.homepage}" target=_blank> ${value.name}</a>`
          webLink.style.color = "orange"

          gitHubRepo.appendChild(webLink);
        });
    },{once:true});  //makeing so the the function will be invoke only once
  });
}
