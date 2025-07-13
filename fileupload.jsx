import React, { useState } from 'react';
import './UploadFlatDetails.css'; // Assuming you'll move your CSS here

const UploadFlatDetails = () => {
    const [formData, setFormData] = useState({
        address: '',
        rent: '',
        bedrooms: '',
        bathrooms: '',
        description: '',
        pictures: null, // For handling file input
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
        // Here you would typically send formData to your backend
        console.log('Flat details submitted:', formData);
        alert('Flat details submitted successfully!');
        // You might want to reset the form after submission
        setFormData({
            address: '',
            rent: '',
            bedrooms: '',
            bathrooms: '',
            description: '',
            pictures: null,
        });
        // Clear the file input visually
        e.target.reset();
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full opacity-90">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                    Upload Your Flat Details
                </h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Flat Address */}
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Flat Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="e.g., 123 Main St, Apartment 4B"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Rent */}
                    <div>
                        <label htmlFor="rent" className="block text-sm font-medium text-gray-700 mb-1">
                            Monthly Rent (in INR)
                        </label>
                        <input
                            type="number"
                            id="rent"
                            name="rent"
                            placeholder="e.g., 15000"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                            min="0"
                            value={formData.rent}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Bedrooms and Bathrooms */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                                Number of Bedrooms
                            </label>
                            <input
                                type="number"
                                id="bedrooms"
                                name="bedrooms"
                                placeholder="e.g., 2"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                                min="0"
                                value={formData.bedrooms}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">
                                Number of Bathrooms
                            </label>
                            <input
                                type="number"
                                id="bathrooms"
                                name="bathrooms"
                                placeholder="e.g., 1"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                                min="0"
                                step="0.5"
                                value={formData.bathrooms}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            placeholder="Describe your flat, amenities, and what you're looking for in a roommate."
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {/* Flat Pictures */}
                    <div>
                        <label htmlFor="pictures" className="block text-sm font-medium text-gray-700 mb-1">
                            Flat Pictures
                        </label>
                        <input
                            type="file"
                            id="pictures"
                            name="pictures"
                            accept="image/*"
                            multiple
                            className="mt-1 block w-full text-sm text-gray-500
                                       file:mr-4 file:py-2 file:px-4
                                       file:rounded-full file:border-0
                                       file:text-sm file:font-semibold
                                       file:bg-yellow-600 file:text-white
                                       hover:file:bg-primary-dark cursor-pointer"
                            onChange={handleChange}
                        />
                        <p className="mt-1 text-xs text-gray-500">Upload up to 5 images (JPG, PNG, GIF).</p>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Submit Flat Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadFlatDetails;