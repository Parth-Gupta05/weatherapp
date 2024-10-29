import countryname from "./countries.js";

const inputfield=document.querySelector(".input");

const searchCountry=(string)=>{
    
    let list=document.querySelector(".list");
    list.innerHTML=""

    countryname
    .filter(name => name.city.toLowerCase().includes(string.toLowerCase()))
    .forEach(name => {
        let p=document.createElement("p");
        p.classList.add("options");
        p.textContent=` ${name.country}, ${name.city} `;
        list.appendChild(p);
        }
    ); 
    


}

const list = document.querySelector(".list");
let inputField=document.querySelector(".input")
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("options")) {
        let text = e.target.textContent;
        console.log(text);
        inputField.value = text; // Assuming inputField is defined in your scope
    }
    else{
        let p=document.createElement("p");
        p.classList.add("options");
        p.textContent=`Please enter full name of place and search`;
        list.appendChild(p);
    }
})

inputfield.addEventListener("input",(e)=>{
    
const inputField = document.querySelector(".input");
let timeoutId;

// Debounced input event listener
inputField.addEventListener("input", (e) => {
    // Clear the previous timeout to reset the timer
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
        searchCountry(inputField.value);
    }, 300); // Adjust the delay as needed (e.g., 300 ms)
});
    
})

let search=document.querySelector(".btn");
search.addEventListener("click", ()=>{
let text=inputfield.value;
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=7a56b88be6bc421ba5d115806241010&q=${text}&aqi=no`; // Replace with your API URL

// Use the fetch function to make a GET request
fetch(apiUrl)
    .then(response => {
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => {
        console.log(data); // Log the fetched data to the console
        // You can also update the DOM or handle the data as needed
        let place=document.querySelector(".place")
        console.log(place)
        place.innerHTML=`${data.location.name}`

        let date=document.querySelector(".date")
        console.log(date)
        date.innerHTML=`${data.location.localtime}`
        
        let tempread=document.querySelector(".readingtemp")
        tempread.innerHTML=`${data.current.temp_c}`

        let condition=document.querySelector(".condition")
        condition.innerHTML=data.current.condition.text

        let span=document.querySelector(".icon")
        span.innerHTML=`<img src="${data.current.condition.icon}" alt="icon" >`

        let pressure=document.querySelector(".pressure")
        pressure.innerHTML=`Pressure: ${data.current.pressure_mb}mb`

        let humidity=document.querySelector(".humidity")
        humidity.innerHTML=`Humidity: ${data.current.humidity}%`

        let wind=document.querySelector(".wind")
        wind.innerHTML=`Wind: ${data.current.wind_kph}kmph ${data.current.wind_dir}`
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error); // Handle any errors
    });
})


    document.addEventListener("DOMContentLoaded", () => {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=7a56b88be6bc421ba5d115806241010&q=india&aqi=no`;
    fetch(apiUrl)
    .then(response => {
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => {
        // console.log(data); // Log the fetched data to the console
        // You can also update the DOM or handle the data as needed
        let place=document.querySelector(".place")
        console.log(place)
        place.innerHTML=`${data.location.name}`

        let date=document.querySelector(".date")
        console.log(date)
        date.innerHTML=`${data.location.localtime}`
        
        let tempread=document.querySelector(".readingtemp")
        tempread.innerHTML=`${data.current.temp_c}`

        let condition=document.querySelector(".condition")
        condition.innerHTML=data.current.condition.text

        let span=document.querySelector(".icon")
        span.innerHTML=`<img src="${data.current.condition.icon}" alt="icon" >`

        let pressure=document.querySelector(".pressure")
        pressure.innerHTML=`Pressure: ${data.current.pressure_mb}mb`

        let humidity=document.querySelector(".humidity")
        humidity.innerHTML=`Humidity: ${data.current.humidity}%`

        let wind=document.querySelector(".wind")
        wind.innerHTML=`Wind: ${data.current.wind_kph}kmph ${data.current.wind_dir}`
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error); // Handle any errors
    });
    });
    
