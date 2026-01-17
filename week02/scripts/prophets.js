// Se declara una variable donde se almacenara el link de los datos JSON 
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

// Se esta accediendo al html por medio de esta variable que almacena el resultado de esta función
const cards = document.querySelector("#cards");

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();

    displayProphets(data.prophets);
}

function displayProphets(prophets) {
  prophets.forEach((prophet) => {

    const card = document.createElement("section");
    const name = document.createElement("h2");
    const birthdate = document.createElement("p");
    const birthplace = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    image.setAttribute("src", prophet.imageurl);
    image.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(image);

    cards.appendChild(card);
  });

}
getProphetData();