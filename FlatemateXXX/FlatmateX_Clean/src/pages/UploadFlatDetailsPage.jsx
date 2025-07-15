// src/pages/UploadFlatDetailsPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import InputGroup from '../components/LoginPage/InputGroup';
import TextAreaGroup from '../components/LoginPage/TextAreaGroup';
import FileInputGroup from '../components/LoginPage/FileInputGroup';

const UploadFlatDetailsPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  // If not logged in, PrivateRoute should redirect. This is a fallback.
  if (!isLoggedIn) { navigate('/auth'); return null; }

  const [formData, setFormData] = useState({
    address: '', rent: '', bedrooms: '', bathrooms: '', description: '', pictures: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Flat details submitted:', formData);
    alert('Flat details submitted successfully!');
    setFormData({
      address: '', rent: '', bedrooms: '', bathrooms: '', description: '', pictures: null,
    });
    e.target.reset();
    navigate('/my-flat'); // Navigate to MyFlatPage after successful submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-inter"
         style={{ backgroundImage: "url('https://i.pinimg.com/736x/63/eb/ad/63ebad35b5207c38dd8ba136246184ea.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundColor: '#e2e8f0' }}>
      <div className="bg-white p-8 rounded-auth-card shadow-lg max-w-2xl w-full opacity-90">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Upload Your Flat Details
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <InputGroup label="Flat Address" id="address" name="address" placeholder="e.g., 123 Main St, Apartment 4B" value={formData.address} onChange={handleChange} required />
          <InputGroup label="Monthly Rent (in INR)" id="rent" name="rent" type="number" placeholder="e.g., 15000" value={formData.rent} onChange={handleChange} min="0" required />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup label="Number of Bedrooms" id="bedrooms" name="bedrooms" type="number" placeholder="e.g., 2" value={formData.bedrooms} onChange={handleChange} min="0" required />
            <InputGroup label="Number of Bathrooms" id="bathrooms" name="bathrooms" type="number" placeholder="e.g., 1" value={formData.bathrooms} onChange={handleChange} min="0" step="0.5" required />
          </div>

          <TextAreaGroup label="Description" id="description" name="description" rows="4" placeholder="Describe your flat, amenities, and what you're looking for in a roommate." value={formData.description} onChange={handleChange} required />
          <FileInputGroup label="Flat Pictures" id="pictures" name="pictures" accept="image/*" multiple onChange={handleChange} helperText="Upload up to 5 images (JPG, PNG, GIF)." />

          <div className="text-center">
            <button type="submit" className="inline-block bg-auth-primary text-white py-3 rounded-full shadow-md hover:bg-auth-primary-dark transition duration-300 ease-in-out transform hover:scale-105">Submit Flat Details</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadFlatDetailsPage;