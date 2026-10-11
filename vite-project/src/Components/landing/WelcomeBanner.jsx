
const WelcomeBanner = ({ name, unreadCount, updatesCount }) => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl p-6 mb-8 text-white relative overflow-hidden">
      <div className="relative">
        <h3 className="text-3xl font-bold mb-2 italic">Welcome back, {name}!</h3>
        <p className="opacity-90 text-lg font-normal">
          You have {unreadCount} new notifications and {updatesCount} research updates
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;