
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import profileImage from "../../assets/Images/minhaz.jpg";

const initialNotifications = [
  { id: 1, text: "Dr. Smith commented on your research", time: "2h ago", read: false },
  { id: 2, text: "New collaboration request from Prof. Johnson", time: "1d ago", read: true },
  { id: 3, text: "Your paper got 5 new citations", time: "3d ago", read: true },
  { id: 4, text: "Prof. Johnson wants to connect", time: "1d ago", read: false },
];

const Navigation = ({ activeTab, setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
  <header className="bg-white shadow-sm sticky top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

      <h3 className="text-2xl font-bold text-pink-600 italic">CollabResearch</h3>

      <div className="flex items-center space-x-4">

        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search research, authors, tags..."
            className="border pl-10 pr-4 py-2 rounded-full text-md w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>

        <div className="relative">
          <button
            className="p-1 rounded-full hover:bg-gray-100 relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="w-6 h-6 text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
              <div className="px-4 py-2 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-700">Notifications</p>
              </div>

              <div className="max-h-64 overflow-y-auto">
                {notifications.length === 0 ? (
                  <p className="px-4 py-3 text-sm text-gray-500">No notifications</p>
                ) : (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                        !notification.read ? "bg-blue-50" : ""
                      }`}
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

        <Link
          to="/profile"
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500"
        >
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </Link>
      </div>
    </div>
  </header>
);
};

export default Navigation;