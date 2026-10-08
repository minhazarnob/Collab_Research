
import { useState } from "react";
import { Link } from "react-router-dom";
import {profileData} from "../../utils/profiles";

const Navbar = () => {
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div>
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
            
        </div>
    );
};

export default Navbar;