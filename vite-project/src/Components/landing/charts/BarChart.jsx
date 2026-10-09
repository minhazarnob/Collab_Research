
const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.count));

  return (
    <div className="h-48 mt-6 flex items-end space-x-2">
      {data.map((item, index) => (
        <div key={index} className="flex-1 h-full flex flex-col items-center justify-end">
          <div
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors rounded-t"
            style={{ height: `${(item.count / maxValue) * 75}%` }}
          />
          <span className="text-xs mt-1 text-gray-600">{item.count}</span>
          <span className="text-xs text-gray-500">{item.country}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;