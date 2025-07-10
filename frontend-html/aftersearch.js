const cityNames = [
  "Ahmedabad", "Bengaluru", "Chandigarh", "Chennai", "Delhi", "Hyderabad",
  "Indore", "Jaipur", "Kolkata", "Lucknow", "Mumbai", "Noida", "Pune", "Surat",
].sort((a, b) => a.localeCompare(b));

const data = [
  {
    type: 'flat',
    title: 'Studio Flat near Indiranagar',
    price: 14000,
    images: [
      'https://i.pinimg.com/736x/5c/64/80/5c648081ffac417b33c713b606f6722a.jpg',
      'https://i.pinimg.com/736x/07/76/81/07768185a8902b65dcca15c507eadcae.jpg',
      'https://i.pinimg.com/736x/94/21/c7/9421c702fcfa71059fa8e56cb79a3b63.jpg'
    ],
    desc: 'Well-lit studio with Wi-Fi, AC, and washing machine.',
    loc: 'Indiranagar, Bengaluru',
    tags: ['AC', 'Wi-Fi', 'Washing Machine'],
    mates: [
      {
        title: 'Arjun Mehta',
        habits: ['Non-Smoker'],
        desc: '22 • Male • M.Des Interior\nInto gaming and late-night conversations.',
        loc: 'Indiranagar, Bengaluru',
        img: 'https://randomuser.me/api/portraits/men/47.jpg',
        tags: ['Smoker']
      },
      {
        title: 'Ananya Joshi',
        habits: ['Non-Smoker'],
        desc: '25 • Female • BA Psychology\nLoves pets, especially cats.',
        loc: 'Indiranagar, Bengaluru',
        img: 'https://randomuser.me/api/portraits/women/30.jpg',
        tags: ['Smoker']
      }
    ]
  },
  {
    type: 'flat',
    title: '2BHK in South Delhi',
    price: 16000,
    images: [
      'https://i.pinimg.com/736x/7e/20/89/7e2089c22501f26a6b6287bc232dc432.jpg',
     'https://i.pinimg.com/736x/34/56/88/345688551e19c77b627b69ffbf595050.jpg',
      'https://i.pinimg.com/736x/05/43/1f/05431fb0a6cec64af7cc512d2b146612.jpg'
    ],
    desc: 'Well-lit studio with Wi-Fi, AC, and washing machine.',
    loc: 'South Delhi, Delhi',
    tags: ['AC', 'Wi-Fi', 'Washing Machine'],
    mates: [
      {
        title: 'Sneha Iyer',
        habits: ['Non-Smoker'],
        desc: '22 • Female • B.Tech CSE\nLooking for someone who enjoys art and music.',
        loc: 'South Delhi, Delhi',
        img: 'https://randomuser.me/api/portraits/women/18.jpg',
        tags: ['Smoker']
      },
      {
        title: 'Ishaan Rao',
        habits: ['Non-Smoker'],
        desc: '22 • Male • B.Arch\nPrefers non-smoking flatmates.',
        loc: 'South Delhi, Delhi',
        img: 'https://randomuser.me/api/portraits/men/55.jpg',
        tags: ['Smoker']
      }
    ]
  },
  {
    type: 'flat',
    title: '1BHK near MG Road',
    price: 25000,
    images: [
      'https://i.pinimg.com/736x/83/33/7b/83337b99857a1dfe0a475e9d7194c5a1.jpg',
      'https://i.pinimg.com/736x/2d/dd/04/2ddd04d8364c0a8c178201a9c1e292bf.jpg',
      'https://i.pinimg.com/736x/7b/e2/18/7be218b32e91ff3923692c32ab6f0e2b.jpg'
    ],
    desc: 'Well-lit studio with Wi-Fi, AC, and washing machine.',
    loc: 'MG Road, Bengaluru',
    tags: ['AC', 'Wi-Fi', 'Washing Machine'],
    mates: [
      {
        title: 'Kabir Malhotra',
        habits: ['Non-Smoker'],
        desc: '25 • Male • B.Des Fashion\nLoves pets, especially cats.',
        loc: 'MG Road, Bengaluru',
        img: 'https://randomuser.me/api/portraits/men/22.jpg',
        tags: ['Smoker']
      },
      {
        title: 'Meher Kapoor',
        habits: ['Non-Smoker'],
        desc: '22 • Female • MBA\nVegetarian and into yoga.',
        loc: 'MG Road, Bengaluru',
        img: 'https://randomuser.me/api/portraits/women/52.jpg',
        tags: ['Smoker']
      }
    ]
  },
  {
    type: 'flat',
    title: '3BHK near Vasant Kunj',
    price: 25000,
    images: [
      'https://i.pinimg.com/736x/c9/72/91/c972911a7d71ffb71b0fb42584dfff08.jpg',
      'https://i.pinimg.com/736x/ef/1f/d2/ef1fd2ad309153a395c809a97a0e4d25.jpg'
    ],
    desc: 'Well-lit studio with Wi-Fi, AC, and washing machine.',
    loc: 'Vasant Kunj, Delhi',
    tags: ['AC', 'Wi-Fi', 'Washing Machine'],
    mates: [
      {
        title: 'Riya Shah',
        habits: ['Non-Smoker'],
        desc: '25 • Female • LLB\nNeeds a quiet place for remote work.',
        loc: 'Vasant Kunj, Delhi',
        img: 'https://randomuser.me/api/portraits/women/26.jpg',
        tags: ['Smoker']
      }
    ]
  }
];


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

function renderCards(dataArray) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (!dataArray.length) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  dataArray.forEach(flat => {
    const flatCard = document.createElement('div');
    flatCard.classList.add('card', 'flat-card');

    flatCard.innerHTML = `
      <div class="flat-images">
        ${flat.images.map(img => `<img src="${img}" alt="Flat image">`).join('')}
      </div>
      <div class="card-content">
        <div class="card-header">
          <h2>${flat.title}</h2>
          <span class="price">₹${flat.price}/mo</span>
        </div>
        <div class="tags-row">
          ${flat.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <p>${flat.desc}</p>
        <p class="location"><span style="font-size:1.2em;">📍</span> ${flat.loc}</p>
      </div>
    `;

    resultsContainer.appendChild(flatCard);

    if (flat.mates && flat.mates.length) {
      const matesList = document.createElement('div');
      matesList.className = 'flatmates-list';

      flat.mates.forEach(mate => {
        const mateCard = document.createElement('div');
        mateCard.classList.add('mate-card');
        mateCard.innerHTML = `
          <img src="${mate.img}" alt="Profile image">
          <div class="mate-content">
            <div class="mate-header">${mate.title}</div>
            <div class="mate-tags-row">
              ${mate.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div style="margin:0.2em 0 0.1em 0;">${mate.desc.replace(/\n/g, '<br>')}</div>
            <div class="location"><span style="font-size:1.1em;">📍</span> ${mate.loc}</div>
          </div>
        `;
        matesList.appendChild(mateCard);
      });

      resultsContainer.appendChild(matesList);
    }
  });
}

function filterData() {
  const keyword = searchInput.value.toLowerCase();
  const filtered = data.filter(flat => {
    const flatMatch = flat.title.toLowerCase().includes(keyword) ||
      flat.desc.toLowerCase().includes(keyword) ||
      flat.loc.toLowerCase().includes(keyword) ||
      flat.tags.join(' ').toLowerCase().includes(keyword);
    const matesMatch = flat.mates && flat.mates.some(mate =>
      mate.title.toLowerCase().includes(keyword) ||
      mate.desc.toLowerCase().includes(keyword) ||
      mate.loc.toLowerCase().includes(keyword) ||
      mate.tags.join(' ').toLowerCase().includes(keyword)
    );
    return flatMatch || matesMatch;
  });

  renderCards(filtered);
}



searchInput.addEventListener('input', filterData);
renderCards(data);
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
  searchInput.value = '';
  renderCards(data);
  cityDropdown.classList.remove('active');
});
