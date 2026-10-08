
import { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import {profileData} from "../../utils/profiles";

const ProfileHeader = ({ setShowCollaborationModal }) => {

    const profileImageRef = useRef(null);
    const coverImageRef = useRef(null);
    const navigate = useNavigate();

    const [researchInterests] = useState([
    "Bioinformatics", "Machine Learning", "Health Informatics", 
    "Computational Biology", "AI in Healthcare", "Data Mining"
    ]);
  
    
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


    return (
        <div>
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
        </div>
    );
};

export default ProfileHeader;