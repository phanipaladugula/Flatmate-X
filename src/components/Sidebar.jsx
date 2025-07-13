const Sidebar = ({ isOpen, onClose }) => {
  const sidebarClasses = `fixed top-0 right-0 w-64 h-full bg-[#f9f1e7] shadow-2xl border-l-4 border-[#a67c52] p-6 z-50 transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`;

  return (
    <div className={sidebarClasses}>
      <div className="flex justify-between items-center mb-6 border-b pb-2 border-[#a67c52]">
        <h3 className="text-xl font-bold text-[#5c3d2e]">Your Profile</h3>
        <button
          onClick={onClose}
          className="text-xl text-[#5c3d2e] hover:text-red-500"
        >
          ✖
        </button>
      </div>
      <ul className="space-y-5 font-medium text-[#4a3a2c]">
        <li><a href="#" className="hover:underline">View Profile</a></li>
        <li><a href="#" className="hover:underline">My Listings</a></li>
        <li><a href="#" className="hover:underline">Messages</a></li>
        <li><a href="#" className="hover:underline">Settings</a></li>
        <li><a href="#" className="hover:text-red-500">Logout</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
