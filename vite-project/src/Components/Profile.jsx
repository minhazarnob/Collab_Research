import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatarImage from '../assets/Images/Team1.jpg';
import coverImage from '../assets/Images/Cover.jpg';
const Profile = () => {
  const [activeTab, setActiveTab] = useState("publications");
  const [showCollaborationModal, setShowCollaborationModal] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [researchInterests] = useState([
    "Bioinformatics", "Machine Learning", "Health Informatics", 
    "Computational Biology", "AI in Healthcare", "Data Mining"
  ]);
  const profileImageRef = useRef(null);
  const coverImageRef = useRef(null);
  const navigate = useNavigate();

  // Sample data
  const [profileData, setProfileData] = useState({
    name: "Badol Hossen",
    title: "Student",
    institution: "Pabna University of Science and Technology",
    department: "Computer Science & Engineering",
    email: "badol.hossen@pust.ac.bd",
    verified: true,
    avatar: avatarImage,
    coverPhoto: coverImage,
    stats: {
      publications: 27,
      citations: 842,
      hIndex: 12,
      collaborations: 34
    },
    recentCollaborators: [
      { name: "Rezoan Khan", avatar: "https://randomuser.me/api/portraits/men/44.jpg", institution: "DU" },
      { name: "Tuhin Hossen", avatar: "https://randomuser.me/api/portraits/men/22.jpg", institution: "BUET" },
      { name: "Fatima Begum", avatar: "https://randomuser.me/api/portraits/women/63.jpg", institution: "RU" },
      { name: "Emon Khan", avatar: "https://randomuser.me/api/portraits/men/41.jpg", institution: "DU" },
      { name: "Nayem Hossen", avatar: "https://randomuser.me/api/portraits/men/20.jpg", institution: "BUET" },
      { name: "Keya Khatun", avatar: "https://randomuser.me/api/portraits/women/61.jpg", institution: "RU" }
    ],
    publications: [
      {
        id: 1,
        title: "Deep Learning Approaches for Genomic Sequence Analysis",
        journal: "Nature Computational Science",
        year: 2023,
        citations: 42,
        doi: "10.1038/s43588-023-00428-z"
      },
      {
        id: 2,
        title: "Machine Learning in Healthcare: A Systematic Review",
        journal: "IEEE Access",
        year: 2022,
        citations: 78,
        doi: "10.1109/ACCESS.2022.3145678"
      },
      {
        id: 3,
        title: "Bioinformatics Tools for Cancer Genomics",
        journal: "Bioinformatics",
        year: 2021,
        citations: 56,
        doi: "10.1093/bioinformatics/btaa1012"
      },
       {
        id: 4,
        title: "Deep Learning Approaches for Genomic Sequence Analysis",
        journal: "Nature Computational Science",
        year: 2023,
        citations: 42,
        doi: "10.1038/s43588-023-00428-z"
      },
      {
        id: 5,
        title: "Machine Learning in Healthcare: A Systematic Review",
        journal: "IEEE Access",
        year: 2022,
        citations: 78,
        doi: "10.1109/ACCESS.2022.3145678"
      },
      {
        id: 6,
        title: "Bioinformatics Tools for Cancer Genomics",
        journal: "Bioinformatics",
        year: 2021,
        citations: 56,
        doi: "10.1093/bioinformatics/btaa1012"
      },
       {
        id: 7,
        title: "Deep Learning Approaches for Genomic Sequence Analysis",
        journal: "Nature Computational Science",
        year: 2023,
        citations: 42,
        doi: "10.1038/s43588-023-00428-z"
      },
      {
        id: 8,
        title: "Machine Learning in Healthcare: A Systematic Review",
        journal: "IEEE Access",
        year: 2022,
        citations: 78,
        doi: "10.1109/ACCESS.2022.3145678"
      },
      {
        id: 9,
        title: "Bioinformatics Tools for Cancer Genomics",
        journal: "Bioinformatics",
        year: 2021,
        citations: 56,
        doi: "10.1093/bioinformatics/btaa1012"
      },
       {
        id: 10,
        title: "Deep Learning Approaches for Genomic Sequence Analysis",
        journal: "Nature Computational Science",
        year: 2023,
        citations: 42,
        doi: "10.1038/s43588-023-00428-z"
      },
      {
        id: 11,
        title: "Machine Learning in Healthcare: A Systematic Review",
        journal: "IEEE Access",
        year: 2022,
        citations: 78,
        doi: "10.1109/ACCESS.2022.3145678"
      },
      {
        id: 12,
        title: "Bioinformatics Tools for Cancer Genomics",
        journal: "Bioinformatics",
        year: 2021,
        citations: 56,
        doi: "10.1093/bioinformatics/btaa1012"
      }
    ],
    projects: [
      {
        id: 1,
        title: "AI-Based Diagnostic System for Rare Diseases",
        status: "Ongoing",
        startDate: "2024",
        endDate: "2026",
        funding: "PUST Research Grant"
      },
      {
        id: 2,
        title: "Genomic Data Analysis Platform Development",
        status: "Completed",
        startDate: "2023",
        endDate: "2024",
        funding: "Ministry of Science"
      },
      {
        id: 3,
        title: "Genomic Data Analysis Platform Development",
        status: "Completed",
        startDate: "2022",
        endDate: "2023",
        funding: "Ministry of Science"
      },
      {
        id: 4,
        title: "Genomic Data Analysis Platform Development",
        status: "Completed",
        startDate: "2021",
        endDate: "2024",
        funding: "Ministry of Science"
      },
      {
        id: 5,
        title: "Genomic Data Analysis Platform Development",
        status: "Completed",
        startDate: "2021",
        endDate: "2023",
        funding: "Ministry of Science"
      },
      {
        id: 6,
        title: "Genomic Data Analysis Platform Development",
        status: "Completed",
        startDate: "2021",
        endDate: "2024",
        funding: "Ministry of Science"
      }
    ],
    activities: [
      {
        id: 1,
        type: "Conference",
        title: "Keynote Speaker at International AI Conference",
        date: "2023-05-15",
        location: "Dhaka, Bangladesh"
      },
      {
        id: 2,
        type: "Workshop",
        title: "Machine Learning in Bioinformatics Workshop",
        date: "2023-03-10",
        location: "Online"
      },
      {
        id: 3,
        type: "Conference",
        title: "Keynote Speaker at International AI Conference",
        date: "2023-05-15",
        location: "Dhaka, Bangladesh"
      },
      {
        id: 4,
        type: "Workshop",
        title: "Machine Learning in Bioinformatics Workshop",
        date: "2023-03-10",
        location: "Online"
      },
      {
        id: 5,
        type: "Conference",
        title: "Keynote Speaker at International AI Conference",
        date: "2023-05-15",
        location: "Dhaka, Bangladesh"
      },
      {
        id: 6,
        type: "Workshop",
        title: "Machine Learning in Bioinformatics Workshop",
        date: "2023-03-10",
        location: "Online"
      }
    ]
  });

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'avatar') {
          setProfileData({...profileData, avatar: reader.result});
        } else {
          setProfileData({...profileData, coverPhoto: reader.result});
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="" className="text-xl font-bold text-blue-600">CollabResearch</Link>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search researchers..."
              className="border px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative">
              <button 
                onClick={() => setShowLogoutConfirm(!showLogoutConfirm)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500"
              >
                <img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover" />
              </button>
              {showLogoutConfirm && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Cover Photo with Upload Option */}
          <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
            <img 
              src={profileData.coverPhoto} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
            <button 
              onClick={() => coverImageRef.current.click()}
              className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center hover:bg-opacity-100 transition"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Change Cover
            </button>
            <input 
              type="file" 
              ref={coverImageRef}
              onChange={(e) => handleImageUpload(e, 'cover')}
              className="hidden" 
              accept="image/*"
            />
            
            {/* Profile Picture with Upload Option */}
            <div className="absolute -bottom-16 left-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
                  <img src={profileData.avatar} alt={profileData.name} className="w-full h-full object-cover" />
                </div>
                <button
                  onClick={() => profileImageRef.current.click()}
                  className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <input 
                  type="file" 
                  ref={profileImageRef}
                  onChange={(e) => handleImageUpload(e, 'avatar')}
                  className="hidden" 
                  accept="image/*"
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 px-6 pb-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
                  {profileData.verified && (
                    <svg className="w-5 h-5 ml-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <p className="text-gray-600 mt-1">{profileData.title}, {profileData.department}</p>
                <p className="text-gray-500 text-sm">{profileData.institution}</p>
                
                {/* Research Interests - Enhanced */}
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500">Research Interests</h3>
                  <div className="flex flex-wrap gap-3 mt-3"> {/* Increased gap */}
                    {researchInterests.map((interest, index) => (
                      // Larger padding
                        <span
                        key={index}
                        className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                        >

                        {interest}
                      </span>
                    ))}
                    
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowCollaborationModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Collaborate
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Message
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">{profileData.stats.publications}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Publications</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">{profileData.stats.citations}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Citations</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">{profileData.stats.hIndex}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">h-Index</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">{profileData.stats.collaborations}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Collaborations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("publications")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "publications" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Publications
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "projects" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Research Projects
              </button>
              <button
                onClick={() => setActiveTab("collaborators")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "collaborators" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Collaborators
              </button>
              <button
                onClick={() => setActiveTab("activity")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "activity" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Activity
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "publications" && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Journal</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Citations</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOI</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {profileData.publications.map((pub) => (
                        <tr key={pub.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-normal max-w-xs text-sm font-medium text-gray-900">
                            {pub.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pub.journal}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pub.year}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pub.citations}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">
                            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                              View
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-200 text-right">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View All Publications →
                  </button>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profileData.projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Start Date</p>
                        <p className="text-sm font-medium">{project.startDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">End Date</p>
                        <p className="text-sm font-medium">{project.endDate}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">Funding</p>
                        <p className="text-sm font-medium">{project.funding}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-3">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Details
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                        Team Members
                      </button>
                    </div>
                  </div>
                ))}
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-blue-300 transition-colors">
                  <button className="text-blue-600 hover:text-blue-800 flex flex-col items-center">
                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Add New Project</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === "collaborators" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {profileData.recentCollaborators.map((collaborator, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex items-center space-x-4 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <img className="w-16 h-16 rounded-full object-cover border-2 border-blue-100" src={collaborator.avatar} alt={collaborator.name} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{collaborator.name}</h3>
                      <p className="text-sm text-gray-500">{collaborator.institution}</p>
                      <div className="mt-2 flex space-x-3">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Profile
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-blue-300 transition-colors">
                  <button 
                    onClick={() => setShowCollaborationModal(true)}
                    className="text-blue-600 hover:text-blue-800 flex flex-col items-center"
                  >
                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Add Collaborator</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === "activity" && (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {profileData.activities.map((activity) => (
                    <li key={activity.id} className="p-6 hover:bg-gray-50">
                      <div className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {activity.type === 'Conference' ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              )}
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            {activity.type} • {activity.location} • {new Date(activity.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="px-6 py-4 border-t border-gray-200 text-right">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View All Activity →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Collaboration Modal */}
      {showCollaborationModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">New Collaboration Request</h3>
                <button 
                  onClick={() => setShowCollaborationModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Collaborator's Email</label>
                  <input
                    type="email"
                    placeholder="researcher@university.edu"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project/Research Topic</label>
                  <input
                    type="text"
                    placeholder="e.g. Machine Learning in Bioinformatics"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe the collaboration opportunity..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
              <button
                onClick={() => setShowCollaborationModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowCollaborationModal(false)}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;