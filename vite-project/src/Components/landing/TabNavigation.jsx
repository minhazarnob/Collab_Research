
const tabs = ["Research", "Collaborators", "Groups", "Events", "Tools", "Analytics"];

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
            const isActive = activeTab === tab.toLowerCase();
            return (
                <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                >
                {tab}
                </button>
            );
            })}
        </nav>
    </div>
  );
};

export default TabNavigation;