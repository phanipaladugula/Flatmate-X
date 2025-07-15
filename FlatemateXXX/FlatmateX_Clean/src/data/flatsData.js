// src/data/flatsData.js

export const cityNames = [
  "Ahmedabad", "Bengaluru", "Chandigarh", "Chennai", "Delhi", "Hyderabad",
  "Indore", "Jaipur", "Kolkata", "Lucknow", "Mumbai", "Noida", "Pune", "Surat",
].sort((a, b) => a.localeCompare(b));

export const flatListingsData = [
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
        tags: ['Non-Smoker']
      },
      {
        title: 'Ananya Joshi',
        habits: ['Non-Smoker'],
        desc: '25 • Female • BA Psychology\nLoves pets, especially cats.',
        loc: 'Indiranagar, Bengaluru',
        img: 'https://randomuser.me/api/portraits/women/30.jpg',
        tags: ['Pet-Friendly']
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
    desc: 'Spacious 2BHK with modern amenities.',
    loc: 'South Delhi, Delhi',
    tags: ['Furnished', 'Balcony', 'Gym Nearby'],
    mates: [
      {
        title: 'Sneha Iyer',
        habits: ['Non-Smoker'],
        desc: '22 • Female • B.Tech CSE\nLooking for someone who enjoys art and music.',
        loc: 'South Delhi, Delhi',
        img: 'https://randomuser.me/api/portraits/women/18.jpg',
        tags: ['Vegetarian']
      },
      {
        title: 'Ishaan Rao',
        habits: ['Non-Smoker'],
        desc: '22 • Male • B.Arch\nPrefers non-smoking flatmates.',
        loc: 'South Delhi, Delhi',
        img: 'https://randomuser.me/api/portraits/men/55.jpg',
        tags: ['Early Bird']
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
    desc: 'Cozy 1BHK in a prime location with easy metro access.',
    loc: 'MG Road, Bengaluru',
    tags: ['Near Metro', 'Furnished', 'Quiet Area'],
    mates: [
      {
        title: 'Kabir Malhotra',
        habits: ['Non-Smoker'],
        desc: '25 • Male • B.Des Fashion\nLoves pets, especially cats.',
        loc: 'MG Road, Bengaluru',
        img: 'https://randomuser.me/api/portraits/men/22.jpg',
        tags: ['Night Owl']
      },
      {
        title: 'Meher Kapoor',
        habits: ['Non-Smoker'],
        desc: '22 • Female • MBA\nVegetarian and into yoga.',
        loc: 'MG Road, Bengaluru',
        img: 'https://randomuser.me/api/portraits/women/52.jpg',
        tags: ['Vegetarian', 'Yoga Enthusiast']
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
    desc: 'Large 3BHK suitable for a family or group of friends.',
    loc: 'Vasant Kunj, Delhi',
    tags: ['Family Friendly', 'Parking', 'Garden'],
    mates: [
      {
        title: 'Riya Shah',
        habits: ['Non-Smoker'],
        desc: '25 • Female • LLB\nNeeds a quiet place for remote work.',
        loc: 'Vasant Kunj, Delhi',
        img: 'https://randomuser.me/api/portraits/women/26.jpg',
        tags: ['Works Remotely']
      }
    ]
  },
  {
    type: 'flat',
    title: 'Modern Apartment in Bandra',
    price: 30000,
    images: [
      'https://i.pinimg.com/736x/ab/92/b4/ab92b450c2d3a3c1a3c7a2e0a2e0c1f2.jpg',
      'https://i.pinimg.com/736x/21/57/8b/21578b9e6e8e8e7c1f2f3f4c7f0f0f0f.jpg',
      'https://i.pinimg.com/736x/9f/8e/3b/9f8e3b3c3c3c3c3c3c3c3c3c3c3c3c3c.jpg'
    ],
    desc: 'Stylish apartment with great views, perfect for professionals.',
    loc: 'Bandra, Mumbai',
    tags: ['Sea View', 'Gym', 'Security'],
    mates: [
      {
        title: 'Vikram Singh',
        habits: ['Non-Smoker'],
        desc: '28 • Male • Software Engineer\nEnjoys quiet evenings and cooking.',
        loc: 'Bandra, Mumbai',
        img: 'https://randomuser.me/api/portraits/men/33.jpg',
        tags: ['Cooks', 'Introvert']
      },
      {
        title: 'Priya Sharma',
        habits: ['Non-Smoker'],
        desc: '26 • Female • Marketing Manager\nLoves exploring new cafes and reading.',
        loc: 'Bandra, Mumbai',
        img: 'https://randomuser.me/api/portraits/women/40.jpg',
        tags: ['Coffee Lover']
      }
    ]
  },
  {
    type: 'flat',
    title: 'Cozy Studio in Hitech City',
    price: 18000,
    images: [
      'https://i.pinimg.com/736x/1a/1b/1c/1a1b1c1c1c1c1c1c1c1c1c1c1c1c1c1c.jpg',
      'https://i.pinimg.com/736x/2b/2c/2d/2b2c2d2d2d2d2d2d2d2d2d2d2d2d2d2d.jpg'
    ],
    desc: 'Compact and efficient studio, ideal for singles, close to IT hubs.',
    loc: 'Hitech City, Hyderabad',
    tags: ['Near IT Hub', 'Furnished', 'Good Connectivity'],
    mates: [
      {
        title: 'Rahul Reddy',
        habits: ['Non-Smoker'],
        desc: '24 • Male • Data Analyst\nPrefers a clean and organized living space.',
        loc: 'Hitech City, Hyderabad',
        img: 'https://randomuser.me/api/portraits/men/60.jpg',
        tags: ['Organized', 'Clean']
      }
    ]
  }
];

export const flatData = [
  {
    id: 1,
    location: 'GHAZIABAD,\nUTTAR PRADESH\nINDIA',
    image: 'https://images.unsplash.com/photo-1723470917452-b0df666328c0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGFwYXJ0bWVudCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 2,
    location: 'MUMBAI,\nMAHARASHTRA\nINDIA',
    image: 'https://images.unsplash.com/photo-1675608691851-6493dbbc111e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxhcGFydbWVudCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 3,
    location: 'CHENNAI,\nTAMIL NADU\nINDIA',
    image: 'https://images.unsplash.com/photo-1736721117764-9e818d4557c9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxhcGFydbWVudCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 4,
    location: 'BENGALURU,\nKARNATAKA\nINDIA',
    image: 'https://plus.unsplash.com/premium_photo-1733248818744-17b6c632684f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50JTIwaW1hZ2VzfGVufDB8fDB8fHww'
  },
  {
    id: 5,
    location: 'HYDERABAD,\nTELANGANA\nINDIA',
    image: 'https://plus.unsplash.com/premium_photo-1661877360520-f70603f7c0d8?q=80&w=2167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    location: 'LAJPAT NAGAR,\nNEW DELHI\nDELHI',
    image: 'https://images.unsplash.com/photo-1610123172763-1f587473048f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwYXJ0bWVudCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 7,
    location: 'HINJAWADI,\nPUNE\nMAHARASHTRA',
    image: 'https://images.unsplash.com/photo-1706200234277-3586cd003ba3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFwYXJ0bWVudCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
  },
];

export const profileData = [
  {
    id: 1,
    name: 'NIHARIKĀ SINGH',
    image: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww',
    traits: ['EXTROVERT', 'NON SMOKER', 'MUSICIAN', 'LOVEEEE CATS <3'],
    wants: ['NON SMOKER', 'INTROVERT', 'BTECH STUDENT']
  },
  {
    id: 2,
    name: 'ROHAN SHARMA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww',
    traits: ['Early Bird', 'Fitness Enthusiast', 'Tech Savvy', 'Dog Person'],
    wants: ['Clean', 'Respectful', 'Shared Hobbies', 'Quiet Evenings']
  },
  {
    id: 3,
    name: 'AISHA KHAN',
    image: 'https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww',
    traits: ['Artist', 'Night Owl', 'Vegan', 'Loves Cooking'],
    wants: ['Creative', 'Open-minded', 'Non-Smoker', 'Shares Meals']
  },
  {
    id: 4,
    name: 'DAVID LEE',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww',
    traits: ['Minimalist', 'Organized', 'Loves Reading', 'Non-Smoker'],
    wants: ['Tidy', 'Quiet', 'Respectful', 'Professional']
  },
  {
    id: 5,
    name: 'SARAH CHEN',
    image: 'https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHpwcm9maWxlJTIwZpZtYWdlfGVufDB8fDB8fHww',
    traits: ['Traveler', 'Adventurous', 'Social', 'Loves Music'],
    wants: ['Likes Outdoors', 'Easygoing', 'Party Friendly', 'Open to Pets']
  },
  {
    id: 6,
    name: 'AARAV JOSHI',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=986&auto=format&fit=crop',
    traits: ['Gym Regular', 'Always Chill', 'Board Game Fan', 'Non-smoker', 'Open to Pets'],
    wants: ['Active', 'Easygoing', 'Clean', 'Pet Friendly', 'Social']
  },
  {
    id: 7,
    name: 'MEERA SHARMA',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop',
    traits: ['Minimalist', 'Foodie', 'Loves Bollywood', 'Keeps a Diary', 'Dog Mom'],
    wants: ['Tidy', 'Shares Food', 'Dog Friendly', 'Respectful', 'Calm']
  },
  {
    id: 8,
    name: 'SANTOSH',
    image: 'https://images.unsplash.com/photo-1644904105846-095e45fca990?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBodG98ZW58MHx8MHx8fDA%3D',
    traits: ['TECH ENTHUSIAST', 'EARLY RISER', 'FITNESS CONSCIOUS', 'ORGANIZED', 'QUIET'],
    wants: ['TIDY', 'RESPECTFUL', 'SHARES CHORES', 'PROFESSIONAL', 'NON-SMOKER']
  }
];