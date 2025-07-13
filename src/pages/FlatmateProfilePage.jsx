import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useState } from "react";

const FlatmateProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const preferences = {
    "Looking in": "Pari Chok, DELHI",
    Budget: "₹5,100 per month",
    Furnished: "Fully Furnished",
    Smoking: "Non-smoker",
    "Accommodation for": "For myself",
    AC: "Yes",
    "Ready to move": "July 31"
  };

  const stats = [
    { label: "Emotional", value: 80 },
    { label: "Anger Issues", value: 20 },
    { label: "Cleanliness", value: 95 },
    { label: "Sociability", value: 70 },
    { label: "Night Owl", value: 50 }
  ];

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1697224687433-de3d2a618872')] bg-cover bg-fixed min-h-screen text-gray-800">
      <Navbar onProfileClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="max-w-4xl mx-auto bg-white my-10 p-10 rounded-xl shadow-lg">
        <div className="flex gap-6 items-center mb-6 p-6 bg-[#fef9e7] border-l-8 border-[#C58940] rounded-xl">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" className="w-36 h-36 rounded-full border-4 border-dashed border-[#C58940] object-cover" />
          <div className="text-lg">
            <h2 className="text-2xl font-semibold">Riya Kumari</h2>
            <p>Age: 21</p>
            <p>Gender: Female</p>
            <p>Occupation: Student</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="bg-[#ead0b2] border-l-6 border-[#7E6752] rounded-xl p-5 space-y-2">
            {Object.entries(preferences).map(([label, value]) => (
              <div className="flex justify-start gap-4" key={label}>
                <span className="w-48 font-semibold">{label}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#ead0b2] border-l-6 border-[#7E6752] rounded-xl p-5 space-y-4">
            {stats.map(({ label, value }) => (
              <div key={label}>
                <div className="flex justify-between text-base font-medium">
                  <span>{label}</span>
                  <span>{value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#473d11] h-2 rounded-full" style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#bcaa8c] border-l-8 border-[#9E7E44] p-5 rounded-lg text-base leading-relaxed mb-6">
          <strong>Description</strong><br />
          Hi, I'm Riya! 😊 I'm a friendly and easy-going person currently pursuing my MCA...
        </div>

        <div className="flex items-center gap-6 bg-[#d7cda8] border-l-8 border-[#b5b45c] rounded-xl p-5 mb-6">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-20 h-20 rounded-full border-4 border-[#C58940] object-cover" />
          <p className="text-lg"><span className="text-green-600 font-bold">●</span> Online today</p>
        </div>

        <div className="bg-[#dcd7b2] border-l-8 border-[#d3ca6e] p-5 rounded-lg text-center mb-6">
          <p className="mb-4">To message Riya and Confirm her as your Flatmate.</p>
          <button className="bg-[#d29e4a] text-white font-semibold px-6 py-2 rounded-full mr-4">Message</button>
          <button className="bg-[#d29e4a] text-white font-semibold px-6 py-2 rounded-full">Confirm</button>
        </div>

        <div className="bg-[#d7cda8] border-l-8 border-[#b5b45c] p-5 rounded-lg mb-6 text-sm">
          It is free to message and reply to any other user on FlatmateX – <a href="#" className="text-blue-600 underline">learn more</a>
        </div>

        <h3 className="text-center text-xl font-semibold mb-2">Find Compatible Flatmate</h3>
        <div className="text-center text-gray-700">Looking in: Pari Chok, DELHI</div>
      </div>
      <Footer />
    </div>
  );
};

export default FlatmateProfilePage;
