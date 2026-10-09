
const HorizontalBarChart = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.citations));

  return (
    <div className="space-y-3 mt-4">
      {data.map((item, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between">
            <span className="text-sm font-medium">{item.field}</span>
            <span className="text-sm text-gray-600">{item.citations}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${(item.citations / maxValue) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalBarChart;