import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Define category images mapping
const categoryImages = {
  "AI": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "Machine Learning": "https://images.unsplash.com/photo-1572445271210-0a8856df7f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "Deep Learning": "https://images.unsplash.com/photo-1572445271210-0a8856df7f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "Bioinformatics": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "Quantum Computing": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "Computer Vision": "https://images.unsplash.com/photo-1515879218367-8466d602c293?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "default": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};

const AddResearchForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { onAddResearch, researchType } = location.state || {};
  
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    journal: '',
    abstract: '',
    tags: '',
    // Remove image from form state since we'll set it automatically
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process tags - split by comma and trim whitespace
    const tagsArray = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
    
    // Get the first tag to determine the image
    const firstTag = tagsArray[0] || "default";
    const articleImage = categoryImages[firstTag] || categoryImages.default;
    
    // Create new article with automatic image
    const newArticle = {
      ...formData,
      tags: tagsArray,
      image: articleImage, // Set image automatically
      collaborators: [],
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
      reads: 0,
      citations: 0
    };
    
    if (onAddResearch) {
      onAddResearch(newArticle);
    }
    
    navigate('/Landing');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Add New {researchType ? researchType.charAt(0).toUpperCase() + researchType.slice(1) : 'Research'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Authors</label>
          <input
            type="text"
            name="authors"
            value={formData.authors}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Journal/Conference</label>
          <input
            type="text"
            name="journal"
            value={formData.journal}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Abstract</label>
          <textarea
            name="abstract"
            value={formData.abstract}
            onChange={handleChange}
            rows="5"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tags (comma separated)
            <span className="text-xs text-gray-500 ml-1">e.g., AI, Machine Learning, Bioinformatics</span>
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="AI, Machine Learning, Bioinformatics"
            required
          />
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/Landing')}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit Research
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddResearchForm;