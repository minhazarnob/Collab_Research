
const LineChart = ({ data }) => {
  const maxValue = Math.max(...data);

  return (
    <div className="h-48 flex items-end space-x-1 pt-6">
      {data.map((value, index) => (
        <div
          key={index}
          className="flex-1 bg-blue-500 hover:bg-blue-600 transition-colors relative"
          style={{ height: `${(value / maxValue) * 100}%` }}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs">
            {value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LineChart;