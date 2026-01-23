const hamBtn = document.getElementById("ham-btn");
const navMenu = document.getElementById("nav-menu");

hamBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamBtn.classList.toggle("active");
});

// FOOTER INFO
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
  "Last Modified: " + document.lastModified;

// DIRECTORY DATA
const url = "data/members.json";
const cards = document.querySelector("#cards");

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  members.forEach((member) => {
    const card = document.createElement("section");
    card.classList.add("member-card");

    const name = document.createElement("h2");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("a");
    const level = document.createElement("p");
    const description = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = member.name;
    address.textContent = `📍 Address: ${member.address}`;
    phone.textContent = `📞 Phone: ${member.phone}`;
    level.textContent = `🏅 Membership: ${member.membershipLevel}`;
    description.textContent = member.description;

    website.textContent = "Visit website";
    website.href = member.website;
    website.target = "_blank";
    website.rel = "noopener noreferrer";

    image.src = `images/${member.image}`;
    image.alt = `${member.name} company logo`;
    image.loading = "lazy";

    card.append(name, image, description, address, phone, level, website);
    cards.appendChild(card);
  });
}

getMemberData();
