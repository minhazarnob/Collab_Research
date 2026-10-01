import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { researchTools } from "../../utils/constants";

const ResearchTools = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
            Essential Research Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated collection of powerful tools used by researchers worldwide
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 auto-rows-[minmax(300px,auto)]">
          {researchTools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-blue-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 rounded-lg flex items-center justify-center bg-white">
                    <Icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                </div>

                <p className="text-gray-600 mb-4 text-lg">{tool.description}</p>

                <div className="flex items-center font-medium text-purple-600 text-lg">
                  Visit Tool
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-8">
          <Link
            to="/login"
            className="inline-flex items-center px-6 py-3 border border-transparent text-xl font-medium rounded-full shadow-sm text-white bg-orange-600 hover:from-blue-700 hover:to-indigo-700 transition-colors duration-200 hover:shadow-md"
          >
            Explore More Tools
            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchTools;