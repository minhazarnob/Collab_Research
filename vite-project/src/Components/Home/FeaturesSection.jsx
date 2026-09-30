
import { features } from "../../utils/constants";

const FeaturesSection = () => {
  return (
    <section id="features-section" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Why Researchers Choose Us
          </h3>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Comprehensive tools designed specifically for academic collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon; 
            return (
              <div
                key={index}
                className=" p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow bg-gradient-to-br from-blue-50 to-indigo-50"
              >
                <div className="bg-white w-12 h-12 flex items-center justify-center rounded-lg bg-white-800 mb-4 shadow-lg">
                  <Icon className="w-6 h-6 text-orange-600 font-bold" /> 
                </div>

                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;