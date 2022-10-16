//get the elements
let advice = document.querySelector("#advice");
let adviceNumber = document.querySelector("#adviceNumber");
let adviceData = {};
let randomButton = document.querySelector("button");
// get the data from api
function getDataFromApi() {
    fetch("https://api.adviceslip.com/advice").then(
        (result) => {
            let data = result.json();
            console.log(data);
            return data;
        }
    ).then((data) => {
        adviceData = data.slip;
    }).then(
        () => {
            adviceNumber.innerHTML = `ADVICE #${adviceData.id}`;
            advice.innerHTML = ` ${adviceData.advice} `;
        }
    )

}
randomButton.addEventListener("click", getDataFromApi);
getDataFromApi();