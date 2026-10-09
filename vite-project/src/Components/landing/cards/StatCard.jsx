
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

const trendColor = {
  up: "text-green-600",
  down: "text-red-600",
  steady: "text-yellow-600",
};

const trendIcon = {
  up: <ArrowUp className="w-4 h-4" />,
  down: <ArrowDown className="w-4 h-4" />,
  steady: <Minus className="w-4 h-4" />,
};

const StatCard = ({ title, value, icon, trend, percentage }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">{icon}</div>
      </div>

      {trend && (
        <div className={`flex items-center mt-3 text-sm ${trendColor[trend]}`}>
          {trendIcon[trend]}
          {percentage && <span className="ml-1">{percentage}</span>}
          <span className="ml-1">vs last year</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;