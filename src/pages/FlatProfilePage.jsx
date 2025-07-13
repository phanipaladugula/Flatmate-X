import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ImageSlider from "../components/ImageSlider";
import { useState } from "react";

const FlatProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const flatInfo = {
    Location: "Green Park, Delhi",
    Rent: "₹12,000 / month",
    Size: "2 BHK, 800 sqft",
    Furnishing: "Semi-furnished",
    Floor: "2nd floor",
    AC: "Yes",
    "Pet Friendly": "No",
    "Available From": "Immediately"
  };

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1697224687433-de3d2a618872')] bg-cover bg-fixed min-h-screen text-gray-800">
      <Navbar onProfileClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="max-w-5xl mx-auto bg-white my-10 p-10 rounded-xl shadow-lg">
        <div className="flex flex-wrap gap-6 mb-6">
          <ImageSlider />
          <div className="flex-1 min-w-[300px] bg-[#ead0b2] border-l-8 border-[#7E6752] rounded-lg p-10 space-y-3">
            {Object.entries(flatInfo).map(([label, value]) => (
              <div className="flex justify-between" key={label}>
                <span className="font-bold w-40">{label}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#bcaa8c] border-l-8 border-[#9E7E44] p-5 rounded-lg text-base leading-relaxed mb-6">
          <strong>Description</strong><br />
          This spacious 2 BHK apartment in Green Park is perfect for working professionals or students...
        </div>
        <div className="bg-[#dcd7b2] border-l-8 border-[#d3ca6e] p-5 rounded-lg mb-6">
          <strong>Why you'll love this flat:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Walking distance to Green Park metro</li>
            <li>Natural light in all rooms</li>
            <li>Peaceful residential area</li>
            <li>Near AIIMS and Hauz Khas market</li>
          </ul>
        </div>
        <div className="bg-[#dcd7b2] border-l-8 border-[#d3ca6e] p-5 rounded-lg text-center">
          <p className="mb-4">To message Owner and Conform this Flat.</p>
          <button className="bg-[#d29e4a] text-white font-semibold px-6 py-2 rounded-full mr-4">Message</button>
          <button className="bg-[#d29e4a] text-white font-semibold px-6 py-2 rounded-full">Conform</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FlatProfilePage;
