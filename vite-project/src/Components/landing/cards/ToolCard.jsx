
import { ExternalLink } from "lucide-react";

const colorMap = {
  "Literature Search": "bg-blue-50 border-blue-100 text-blue-800",
  "Reference Management": "bg-purple-50 border-purple-100 text-purple-800",
  Writing: "bg-green-50 border-green-100 text-green-800",
  Bioinformatics: "bg-orange-50 border-orange-100 text-orange-800",
};

const defaultColor = "bg-gray-50 border-gray-200 text-gray-800";

const ToolCard = ({ tool }) => {
  return (
    <a
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border ${
        colorMap[tool.category] || defaultColor
      }`}
    >
      <div className="flex items-start">
        <div className="text-2xl mr-4">{tool.icon}</div>
        <div>
          <h4 className="text-lg font-bold mb-1">{tool.name}</h4>
          <p className="text-sm mb-3">{tool.description}</p>
          <span className="inline-flex items-center text-xs font-medium">
            Visit Tool
            <ExternalLink className="w-3 h-3 ml-1" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ToolCard;