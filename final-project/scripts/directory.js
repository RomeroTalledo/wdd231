const gallery = document.querySelector('#members-gallery');

fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    data.members.forEach(member => {
      const card = document.createElement('article');
      card.classList.add('member-card');

      card.innerHTML = `
        <div class="image-box">
          <img src="images/${member.image}" alt="${member.name}" loading="lazy">
        </div>
        <h2>${member.name}</h2>
        <p class="level">${member.membershipLevel} Member</p>
        <p>${member.description}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

      gallery.appendChild(card);
    });
  })
  .catch(error => {
    gallery.innerHTML = '<p>Error loading members.</p>';
    console.error(error);
  });
