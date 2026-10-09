
import { useState } from "react";

const CollaboratorCard = ({ researcher, onMessage }) => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
    console.log(isConnected ? "Disconnected from" : "Connected to", researcher.name);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={researcher.avatar}
          alt={researcher.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
        />
        <div>
          <h3 className="font-medium text-gray-900">{researcher.name}</h3>
          <p className="text-sm text-gray-500">{researcher.affiliation}</p>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-sm text-gray-600 mb-1">Recent work:</p>
        <p className="text-sm font-medium text-gray-800">{researcher.recentWork}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {researcher.expertise.map((skill) => (
          <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex space-x-2">
        <button
          onClick={onMessage}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          Message
        </button>
        <button
          onClick={handleConnect}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${
            isConnected
              ? "bg-green-500 text-white"
              : "border border-blue-600 text-blue-600 hover:bg-blue-50"
          }`}
        >
          {isConnected ? "Connected ✓" : "Connect"}
        </button>
      </div>
    </div>
  );
};

export default CollaboratorCard;