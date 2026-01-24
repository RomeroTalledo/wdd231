document.addEventListener("DOMContentLoaded", () => {
  const hamBtn = document.getElementById("ham-btn");
  const navMenu = document.getElementById("nav-menu");
  const cards = document.getElementById("cards");
  const gridBtn = document.getElementById("gridBtn");
  const listBtn = document.getElementById("listBtn");

  hamBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamBtn.classList.toggle("active");
  });

  document.querySelector("#currentyear").textContent = new Date().getFullYear();
  document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;

  const url = "data/members.json";

  async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
    cards.classList.remove("loading");
  }

  function displayMembers(members) {
    cards.innerHTML = "";
    members.forEach((member) => {
      const card = document.createElement("section");
      card.classList.add("member-card");

      const name = document.createElement("h2");
      const image = document.createElement("img");
      const description = document.createElement("p");
      const address = document.createElement("p");
      const phone = document.createElement("p");
      const level = document.createElement("p");
      const website = document.createElement("a");

      name.textContent = member.name;
      description.textContent = member.description;
      address.textContent = `📍 ${member.address}`;
      phone.textContent = `📞 ${member.phone}`;
      level.textContent = `🏅 ${member.membershipLevel}`;
      website.href = member.website;
      website.textContent = "Visit Website";
      website.target = "_blank";

      image.src = `images/${member.image}`;
      image.alt = `${member.name} logo`;
      image.loading = "lazy";

      card.append(name, image, description, address, phone, level, website);
      cards.appendChild(card);
    });
  }

  gridBtn.addEventListener("click", () => {
    cards.classList.add("grid-view");
    cards.classList.remove("list-view");
  });

  listBtn.addEventListener("click", () => {
    cards.classList.add("list-view");
    cards.classList.remove("grid-view");
  });

  getMemberData();
});
