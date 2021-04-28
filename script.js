const api = {
    key: "4167a064a57a9cc9286c6ca692d66971",
    base: "https://api.openweathermap.org/data/2.5/"
    
}

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", getInput);

function getInput (event) {
    event.preventDefault();
    if (event.type == "click") {
        getData(search.value);
        console.log(search.value);
        //-- Prevents site from reloading when refreshed.
    }
}

function getData () {
    fetch(`${api.base}weather?q=${search.value}&units=standard$appid=${api.key}`)
        .then(response => {
            return response.json();
        }).then(displayData);

}

function displayData (response) {
    console.log(response)

}

function displayData (response) {
        //  console.log(response);
        if (response.cod === "404") {
            const error = document.querySelector(".error");
            error.textContent = "Please enter a valid City";
            search.value ="";
        } else {
            const city = document.querySelector(".city");
            city.innerText = `${response.name}, ${response.sys.country}`;
        
            const today = new Date();
            const date = document.querySelector(".date");
            date.innerText = dateFunction (today);
    
            const temp = document.querySelector(".temp");
            temp.innerHTML = `Temp: ${Math.round(response.main, temp)}<span>°F</span>`;
        }
    }