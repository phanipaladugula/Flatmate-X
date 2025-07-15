// src/pages/QuestionnairePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const QuestionnairePage = () => {
  const navigate = useNavigate();
  const { clearLastClickedProfile, lastClickedProfileId } = useAuth();
  const [formData, setFormData] = useState({
    city: '',
    budget: '',
    roommateType: '',
    preferences: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        preferences: checked
          ? [...prev.preferences, value]
          : prev.preferences.filter(pref => pref !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Questionnaire Submitted:', formData);
    alert('Thank you for completing the questionnaire!');

    // After completion, redirect to the stored profile or default to main listings
    const redirectTo = lastClickedProfileId ? `/profile-view/${lastClickedProfileId}` : '/main-listings';
    clearLastClickedProfile(); // Clear the stored ID after using it

    navigate(redirectTo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-inter">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full opacity-95">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Tell Us About Yourself</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="city" className="block text-gray-700 text-sm font-semibold mb-2">Preferred City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g., Bengaluru"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-gray-700 text-sm font-semibold mb-2">Max Monthly Budget (INR)</label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g., 15000"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Roommate Type</label>
            <select
              id="roommateType"
              name="roommateType"
              value={formData.roommateType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select...</option>
              <option value="student">Student</option>
              <option value="professional">Working Professional</option>
              <option value="any">Doesn't Matter</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Preferences</label>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <label className="flex items-center">
                <input type="checkbox" name="preferences" value="non-smoker" onChange={handleChange} className="mr-2" /> Non-Smoker
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="preferences" value="pet-friendly" onChange={handleChange} className="mr-2" /> Pet-Friendly
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="preferences" value="quiet" onChange={handleChange} className="mr-2" /> Quiet Environment
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="preferences" value="clean" onChange={handleChange} className="mr-2" /> Values Cleanliness
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionnairePage;