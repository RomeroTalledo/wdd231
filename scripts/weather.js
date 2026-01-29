// SELECT HTML ELEMENTS IN THE DOCUMENT

const myTown = document.querySelector("#town");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#graphic");

// CREATE REQUID VARIABLES FOR THE URL

const myKey = "12c297d2bc3ff2a7c2fd4c757b4b78c2";
const myLat = "42.9106";
const myLong = "-76.802231";

// CONSTRUCT A FULL PATH USING TEMPLATE LITERALS

const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// TRY TO GRAB THE CURRENT WEATHER DATA

async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// DISPLAY THE JSON DATA ONTO MY WEB PAGE
function displayResults(data){
    console.log('hello')
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc =  `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC',iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)
}

apiFetch();
