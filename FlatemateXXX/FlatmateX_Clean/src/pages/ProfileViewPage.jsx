
import React, { useState } from 'react';
import MainFooter from '../components/MainPage/Footer';

const profileImg = "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=700&auto=format&fit=crop&q=60";

const ProfileViewPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1697224687433-de3d2a618872?q=80&w=1062')" }}>
      <div className="flex justify-between items-center px-8 py-4 bg-[#B19470] text-white">
        <h1 className="text-2xl font-bold">FlatmateX</h1>
        <div onClick={toggleSidebar} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="32" viewBox="0 0 24 24" width="32">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12c2.67 0 8 1.34 8 4v2h-16v-2c0-2.66 5.33-4 8-4zm0-2c-1.66 
              0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-10 mb-20 bg-white p-8 rounded-xl shadow-lg">
        <div className="flex gap-6 items-center mb-8 bg-[#fef9e7] p-6 rounded-lg border-l-8 border-[#C58940]">
          <img src={profileImg} alt="Profile" className="w-36 h-36 rounded-full border-4 border-dashed border-[#C58940] object-cover" />
          <div>
            <h2 className="text-2xl font-semibold">Riya Kumari</h2>
            <p>Age: 21</p>
            <p>Gender: Female</p>
            <p>Occupation: Student</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-[#ead0b2] p-6 rounded-lg border-l-4 border-[#7E6752]">
            {[ ["Looking in", "Pari Chok, DELHI"], ["Budget", "₹5,100 per month"], ["Furnished", "Fully Furnished"], ["Smoking", "Non-smoker"], ["Accommodation for", "For myself"], ["AC", "Yes"], ["Ready to move", "July 31"] ].map(([label, value]) => (
              <div key={label} className="flex justify-between mb-2">
                <span className="font-semibold">{label}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className="flex-1 bg-[#ead0b2] p-6 rounded-lg border-l-4 border-[#7E6752]">
            {[ ["Emotional", 80], ["Anger Issues", 20], ["Cleanliness", 95], ["Sociability", 70], ["Night Owl", 50] ].map(([label, percent]) => (
              <div key={label} className="mb-4">
                <div className="flex justify-between">
                  <span className="font-semibold">{label}</span>
                  <span>{percent}%</span>
                </div>
                <div className="w-full h-2 bg-gray-300 rounded-full mt-1">
                  <div className="h-full bg-[#473d11] rounded-full" style={{ width: `${percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-[#bcaa8c] border-l-8 border-[#9E7E44] p-6 rounded-lg text-base leading-relaxed">
          <strong>Description:</strong><br />
          Hi, I'm Riya! 😊 I'm a friendly and easy-going person currently pursuing my MCA (Master of Computer Applications). I'm clean, respectful of others' space, and always up for a good chat or a movie night — but I also enjoy my quiet time, especially during study hours.
        </div>

        <div className="mt-8 flex items-center gap-4 bg-[#d7cda8] border-l-8 border-[#b5b45c] p-4 rounded-lg">
          <img src={profileImg} alt="Online" className="w-20 h-20 rounded-full border-2 border-[#C58940] object-cover" />
          <span className="text-lg">
            <span className="text-green-600 font-bold">●</span> Online today
          </span>
        </div>

        <div className="mt-8 bg-[#dcd7b2] border-l-8 border-[#d3ca6e] p-6 rounded-lg text-center">
          <p className="mb-4">To message Riya and Confirm her as your Flatmate</p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-[#d29e4a] text-white rounded-full font-semibold">Message</button>
            <button className="px-6 py-2 bg-[#d29e4a] text-white rounded-full font-semibold">Confirm</button>
          </div>
        </div>

        <div className="mt-6 bg-[#d7cda8] border-l-8 border-[#b5b45c] p-4 rounded-lg text-sm">
          It is free to message and reply to any other user on FlatmateX – <a href="#" className="underline">learn more</a>
        </div>
      </div>

      <div className={`fixed top-0 right-0 h-full w-64 bg-[#fff9e6] shadow-lg transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Your Profile</h3>
          <button onClick={toggleSidebar} className="text-xl">&times;</button>
        </div>
        <ul className="p-4 space-y-4 font-medium">
          <li><a href="#">View Profile</a></li>
          <li><a href="#">Edit Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>

      <MainFooter />
    </div>
  );
};

export default ProfileViewPage;
