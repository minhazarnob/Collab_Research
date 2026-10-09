
const colors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

const DonutChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.count, 0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  let accumulated = 0;

  return (
    <div className="flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-48 h-48 -rotate-90">
        {/* ব্যাকগ্রাউন্ড রিং */}
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="16" />

        {data.map((item, index) => {
          const length = (item.count / total) * circumference;
          const offset = -accumulated;
          accumulated += length;

          return (
            <circle
              key={index}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={colors[index % colors.length]}
              strokeWidth="16"
              strokeDasharray={`${length} ${circumference - length}`}
              strokeDashoffset={offset}
            />
          );
        })}
      </svg>

      <div className="ml-6 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: colors[index % colors.length] }}
            />
            <span className="text-sm">
              {item.type}: {((item.count / total) * 100).toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;