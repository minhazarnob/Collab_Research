
import { newsItems } from "../../utils/constants";

const NewsTicker = () => {
  return (
    <div className="bg-blue-600 text-white py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center">
          <span className="font-bold mr-4 whitespace-nowrap">Latest News:</span>
          <div className="relative overflow-hidden w-full">
            <div className="animate-marquee whitespace-nowrap">
              {newsItems.map((item, index) => (
                <span key={index} className="mx-8 inline-block">{item} •</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;