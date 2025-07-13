import "../styles/sidebar.css"; // Ensure this path is correct

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-title">Your Profile</h3>
        <button onClick={onClose} className="sidebar-close">✖</button>
      </div>
      <ul>
        <li><a href="#" className="sidebar-link">View Profile</a></li>
        <li><a href="#" className="sidebar-link">My Listings</a></li>
        <li><a href="#" className="sidebar-link">Messages</a></li>
        <li><a href="#" className="sidebar-link">Settings</a></li>
        <li><a href="#" className="sidebar-link logout">Logout</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
