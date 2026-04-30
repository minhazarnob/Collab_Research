import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AIImage from '../assets/Images/AIImagenew.JPG';
import machineLearning from '../assets/Images/machinelearning.JPG';
import deeplearing from '../assets/Images/deeplearning.jpeg';
import bio from '../assets/Images/bioinfor.jpg';
import computervision from '../assets/Images/Computervision.JPG';
import quantumimage from '../assets/Images/quantum.jpg';
// Define category images mapping
const categoryImages = {
  "AI": AIImage,
  "Machine Learning": machineLearning,
  "Deep Learning": deeplearing,
  "Bioinformatics": bio,
  "Quantum Computing": quantumimage,
  "Computer Vision": computervision ,
  "default": AIImage
};


const AddPublishedResearch = () => {
  const publicationTypes = [
    "Journal Article",
    "Conference Paper",
    "Book Chapter",
    "Review Article",
    "Short Communication",
    "Editorial",
    "Letter",
    "Other"
  ];

  const [formData, setFormData] = useState({
    publicationType: "",
    title: "",
    authorName: "",
    doi: "",
    description: "", // Added description field
    tags: "",
    file: null
  });
  
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  
  // Split tags into an array (e.g., ["AI", "Bioinformatics"])
  const tagsArray = formData.tags.split(',').map(tag => tag.trim());
  
  // Get the FIRST tag (e.g., "AI") or fall back to "default"
  const firstTag = tagsArray[0] || "default";
  
  // Find a matching image (case-insensitive)
  const matchedTag = Object.keys(categoryImages).find(
    key => key.toLowerCase() === firstTag.toLowerCase()
  );
  
  // Use the matched image or fall back to "default"
  const publicationImage = matchedTag 
    ? categoryImages[matchedTag] 
    : categoryImages.default;

  // Create the new publication object
  const newPublication = {
    id: Date.now(),
    title: formData.title,
    authors: formData.authorName,
    journal: formData.publicationType, // Still include publication type (optional)
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
    reads: 0,
    citations: 0,
    image: publicationImage, // Set image based on the FIRST tag
    tags: tagsArray,         // Include all tags
    description: formData.description || "",
    fullTextLink: "#",
    collaborators: [],
    doi: formData.doi || undefined
  };

  // Save to localStorage
  const existingPublications = JSON.parse(localStorage.getItem('researchArticles')) || [];
  const updatedPublications = [newPublication, ...existingPublications];
  localStorage.setItem('researchArticles', JSON.stringify(updatedPublications));

  setShowConfirmation(true);
  setTimeout(() => navigate("/landing"), 3000);
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="" className="text-xl font-bold text-blue-600">Collab Research</Link>
          <div className="flex items-center space-x-4">
            <Link 
              to="/profile" 
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden"
            >
              <span className="text-gray-600 font-medium">
                {JSON.parse(localStorage.getItem("user"))?.firstName?.charAt(0) || 'BH'}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 relative">
        {/* Confirmation Message */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md text-center">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h2 className="text-2xl font-bold mb-2">Publication Submitted!</h2>
              <p className="text-gray-600 mb-6">Your research has been successfully published.</p>
              <p className="text-gray-500 text-sm">Redirecting to homepage...</p>
            </div>
          </div>
        )}

        <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Publication</h1>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          {/* Publication Type Dropdown */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Publication Type *</h2>
            <select
              name="publicationType"
              value={formData.publicationType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select publication type</option>
              {publicationTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Upload File (Optional)</h2>
            <label className="block border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition">
              <input 
                type="file" 
                className="hidden" 
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.ppt,.pptx"
              />
              <div className="flex flex-col items-center justify-center">
                <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="text-gray-600 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PDF, DOC, PPT (Max. 10MB)</p>
                {formData.file && (
                  <p className="mt-2 text-sm text-blue-600">{formData.file.name}</p>
                )}
              </div>
            </label>
          </div>

          {/* Title */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Title *</h2>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter the title of your publication"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Author Name */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Author Name(s) *</h2>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              placeholder="Enter author names (comma separated if multiple)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>


          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Description (Optional)</h2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Additional description or notes about your publication"
            />
          </div>

          {/* DOI */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">DOI (Optional)</h2>
            <input
              type="text"
              name="doi"
              value={formData.doi}
              onChange={handleChange}
              placeholder="Enter publication DOI (e.g., 10.1234/abc.2023)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Tags */}
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-4">Tags *</h2>
  <input
    type="text"
    name="tags"
    value={formData.tags}
    onChange={handleChange}
    placeholder="Enter comma-separated tags (e.g., AI, Machine Learning, Bioinformatics)"
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    required
  />
  <p className="text-sm text-gray-500 mt-1">These will help others discover your research</p>
</div>


          {/* Submit Button */}
          <div className="flex justify-between items-center">
            <Link 
              to="/add-research" 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Research Types
            </Link>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Submit Publication 
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddPublishedResearch;