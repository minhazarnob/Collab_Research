
const TimelineChart = ({ data }) => {
  return (
    <div className="mt-6">
      <ol className="relative border-l-2 border-gray-200 ml-3">
        {data.map((item, index) => (
          <li key={index} className="mb-8 ml-8 last:mb-0">
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white text-xs font-medium">
              {item.count}
            </span>
            <p className="text-sm font-medium">{item.year}</p>
            <p className="text-sm text-gray-500">{item.count} publications</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimelineChart;