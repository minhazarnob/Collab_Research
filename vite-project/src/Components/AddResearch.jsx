// src/components/AddResearch.jsx
import React from "react";
import { Link } from "react-router-dom";

const AddResearch = () => {
  const researchTypes = [
    {
      id: "published",
      title: "Published Research",
      description: "Articles, books etc.",
      icon: "📄",
      route: "/add-research/published"
    },
    {
      id: "preprint",
      title: "Preprint",
      description: "Draft or paper before peer review",
      icon: "📝",
      route: "/add-research/preprint"
    },
    {
      id: "conference",
      title: "Conference Paper",
      description: "Add a conference paper",
      icon: "🎤",
      route: "/add-research/conference"
    },
    {
      id: "presentation",
      title: "Presentation",
      description: "Add a presentation",
      icon: "📊",
      route: "/add-research/presentation"
    },
    {
      id: "others",
      title: "Others",
      description: "Proposal, Method, Code etc",
      icon: "➕",
      route: "/add-research/others"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/landing" className="text-xl font-bold text-blue-600">Collab Research</Link>
          <div className="flex items-center space-x-4">
            <Link 
              to="/profile" 
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden"
            >
              <span className="text-gray-600 font-medium">
                {JSON.parse(localStorage.getItem("user"))?.firstName?.charAt(0) || 'U'}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Add your research</h1>
          <p className="text-gray-600">Select the type of research you want to add</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchTypes.map((type) => (
            <Link
              key={type.id}
              to={{
                pathname: type.route,
                state: { researchType: type.id }
              }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-100 group"
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-4 group-hover:text-blue-600 transition-colors">
                  {type.icon}
                </span>
                <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {type.title}
                </h2>
                <p className="text-gray-500 text-sm">{type.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            to="/landing" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AddResearch;