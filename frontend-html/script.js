const cityNames = [
  "Ahmedabad", "Bengaluru", "Chandigarh", "Chennai", "Delhi", "Hyderabad", "Indore", "Jaipur", "Kolkata", "Lucknow", "Mumbai", "Noida", "Pune", "Surat", 
].sort((a, b) => a.localeCompare(b));

const data = [
  {
    type: 'flat',
    title: 'Studio Flat near Indiranagar',
    price: 18000,
    desc: 'Well-lit studio with Wi-Fi, AC, and washing machine.',
    loc: 'Indiranagar, Bengaluru',
    img: 'https://i.pinimg.com/736x/97/90/82/9790826f8359cf7d65f4cd6fd4d710cc.jpg'
  },
  {
    type: 'mate',
    title: 'Divya Kapoor',
    price: 8500,
    desc: '21 • Female • B.Sc. Interior Design\nLoves interiors, needs pet-friendly space.',
    loc: 'Saket, Delhi',
    img: 'https://randomuser.me/api/portraits/women/42.jpg'
  },
  {
    type: 'mate',
    title: 'Nikhil Sharma',
    price: 8200,
    desc: '20 • Male • B.Tech Computer Science\nPrefers early mornings, vegetarian kitchen.',
    loc: 'Powai, Mumbai',
    img: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    type: 'mate',
    title: 'Pooja Nair',
    price: 9300,
    desc: '22 • Female • BA Mass Communication\nSocial, clean, loves chai.',
    loc: 'JP Nagar, Bengaluru',
    img: 'https://randomuser.me/api/portraits/women/21.jpg'
  },
  {
    type: 'mate',
    title: 'Mohit Sinha',
    price: 7700,
    desc: '19 • Male • BBA\nFriendly, tidy, gamer.',
    loc: 'Wakad, Pune',
    img: 'https://randomuser.me/api/portraits/men/33.jpg'
  },
  {
    type: 'flat',
    title: '2BHK in South Delhi',
    price: 16000,
    desc: 'Spacious 2BHK in a gated society, near metro, with balcony.',
    loc: 'South Delhi, Delhi',
    img: 'https://i.pinimg.com/736x/eb/17/bc/eb17bc4631713975a1e20e3d10ca0402.jpg'
  },
  {
    type: 'mate',
    title: 'Aakash Jain',
    price: 8500,
    desc: '23 • Male • MBA\nWorks long hours, needs peaceful space.',
    loc: 'Koramangala, Bengaluru',
    img: 'https://randomuser.me/api/portraits/men/39.jpg'
  },
  {
    type: 'mate',
    title: 'Ankita Roy',
    price: 8900,
    desc: '21 • Female • B.Des Product Design\nInto minimalism, clean vibe.',
    loc: 'Salt Lake, Kolkata',
    img: 'https://randomuser.me/api/portraits/women/60.jpg'
  },
  {
    type: 'mate',
    title: 'Tarun Khanna',
    price: 8800,
    desc: '24 • Male • LLB\nEarly to bed, respectful and responsible.',
    loc: 'Civil Lines, Delhi',
    img: 'https://randomuser.me/api/portraits/men/23.jpg'
  },
  {
    type: 'mate',
    title: 'Mehak Bansal',
    price: 9400,
    desc: '22 • Female • MA English Literature\nFlexible and neat, prefers balcony access.',
    loc: 'Vashi, Navi Mumbai',
    img: 'https://randomuser.me/api/portraits/women/30.jpg'
  }
];

// --- City Dropdown Logic ---

const searchInput = document.getElementById('searchInput');
const cityDropdown = document.getElementById('cityDropdown');

function renderCityDropdown() {
  cityDropdown.innerHTML = "";
  cityNames.forEach(city => {
    const btn = document.createElement('button');
    btn.type = "button";
    btn.className = "city-option";
    btn.textContent = city;
    btn.onclick = () => {
      searchInput.value = city;
      cityDropdown.classList.remove('active');
      filterData();
    };
    cityDropdown.appendChild(btn);
  });
}

searchInput.addEventListener('focus', showCityDropdown);
searchInput.addEventListener('click', showCityDropdown);

function showCityDropdown() {
  renderCityDropdown();
  cityDropdown.classList.add('active');
}

document.addEventListener('mousedown', function(e) {
  if (!cityDropdown.contains(e.target) && e.target !== searchInput) {
    cityDropdown.classList.remove('active');
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    cityDropdown.classList.remove('active');
    searchInput.blur();
  }
});

// --- Card List Logic ---

function renderCards(dataArray) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (!dataArray.length) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  dataArray.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card', item.type === 'flat' ? 'flat-card' : 'mate-card');

    if (item.type === 'flat') {
      card.innerHTML = `
        <img src="${item.img}" alt="Flat image">
        <div class="card-content">
          <div class="card-header">
            <h2>${item.title}</h2>
            <span class="price">₹${item.price}/mo</span>
          </div>
          <p>${item.desc}</p>
          <p class="location"><span style="font-size:1.2em;">📍</span> ${item.loc}</p>
        </div>
      `;
    } else {
      card.innerHTML = `
        <img class="profile-img" src="${item.img}" alt="Profile image">
        <div class="card-content">
          <div class="card-header">
            <h2>${item.title}</h2>
            <span class="price"></span>
          </div>
          <p>${item.desc.replace(/\n/g, '<br>')}</p>
          <p class="location"><span style="font-size:1.2em;">📍</span> ${item.loc}</p>
        </div>
      `;
    }
    resultsContainer.appendChild(card);
  });
}

renderCards(data);

document.getElementById('searchInput').addEventListener('input', filterData);
document.getElementById('filterSelect').addEventListener('change', filterData);

function filterData() {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  const filter = document.getElementById('filterSelect').value;

  const filtered = data.filter(item => {
    const matchKeyword =
      item.title.toLowerCase().includes(keyword) ||
      item.desc.toLowerCase().includes(keyword) ||
      item.loc.toLowerCase().includes(keyword);

    const matchType =
      filter === 'all' ||
      item.type === filter ||
      (filter === 'delhi' && item.loc.toLowerCase().includes('delhi'));

    return matchKeyword && matchType;
  });

  renderCards(filtered);
}
