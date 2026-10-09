import React from 'react';

const Navigation = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-8">
                <h1 className="text-xl font-bold text-blue-600">CollabResearch</h1>
            
                <div className="hidden md:flex space-x-6">
                    {['Research', 'Collaborators', 'Groups', 'Events', 'Tools', 'Analytics'].map((tab) => (
                        <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`font-medium ${
                            activeTab === tab.toLowerCase() 
                            ? 'text-blue-600' 
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                        >
                        {tab}
                        </button>
                    ))}
                </div> 
            </div>
          
            <div className="flex items-center space-x-4">
                <div className="relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Search research, authors, tags..."
                        className="border pl-10 pr-4 py-2 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            
                <div className="relative">
                    <button 
                        className="p-1 rounded-full hover:bg-gray-100 relative"
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                        {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                        )}
                    </button>
                    
                    {/* Notifications Dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
                        <div className="px-4 py-2 border-b border-gray-200">
                            <p className="text-sm font-medium text-gray-700">Notifications</p>
                        </div>
                        <div className="max-h-64 overflow-y-auto">
                            {notifications.length === 0 ? (
                            <p className="px-4 py-3 text-sm text-gray-500">No notifications</p>
                            ) : (
                            notifications.map(notification => (
                                <div 
                                key={notification.id} 
                                className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                                onClick={() => markAsRead(notification.id)}
                                >
                                <p className="text-sm text-gray-800">{notification.text}</p>
                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                </div>
                            ))
                            )}
                        </div>
                        <div className="px-4 py-2 border-t border-gray-200 text-center">
                            <Link 
                            to="/notifications" 
                            className="text-xs text-blue-600 hover:text-blue-800"
                            onClick={() => setShowNotifications(false)}
                            >
                            View all notifications
                            </Link>
                        </div>
                        </div>
                    )}
                </div>
            
            <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
    );
};

export default Navigation;