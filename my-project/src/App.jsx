import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import FlatProfile from './pages/FlatProfile';
import FlatmateProfile from './pages/FlatmateProfile';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" 
         style={{
           backgroundImage: 'url(https://images.unsplash.com/photo-1697224687433-de3d2a618872?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
         }}>
      <Navbar onProfileClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      

      {/* Page Content */}
      <FlatProfile />
      
      <Footer />
    </div>
  );
}

export default App;