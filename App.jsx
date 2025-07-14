import React from 'react';

const ProfileForm = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1615800098746-73af8261e3df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmludGFnZSUyMHBhcGVyfGVufDB8fDB8fHww';

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          Personal Information
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Complete your profile to get started.
        </p>

        <form>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="collegeName" className="block mb-2 text-sm font-medium text-gray-700">College Name</label>
            <input
              type="text"
              id="collegeName"
              placeholder="Enter your college name"
              className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-700">Age</label>
            <input
              type="text"
              id="age"
              placeholder="Enter your age"
              className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="collegeId" className="block mb-2 text-sm font-medium text-gray-700">College ID</label>
            <input
              type="text"
              id="collegeId"
              placeholder="Enter your college ID"
              className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-700">Course</label>
            <input
              type="text"
              id="course"
              placeholder="e.g., Computer Science"
              className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              placeholder="e.g., New York, USA"
              className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone No</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">Description (AI Used)</label>
            <textarea
              id="description"
              placeholder="Describe how you use AI..."
              className="w-full p-3 border border-gray-300 rounded-md min-h-[100px] resize-y placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            ></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor="profilePhoto" className="block mb-2 text-sm font-medium text-gray-700">Profile Photo</label>
            <input
              type="file"
              id="profilePhoto"
              className="w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-[#8B4513] text-white rounded-md text-lg font-semibold cursor-pointer hover:bg-[#A0522D] transition-colors"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;