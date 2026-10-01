
const GrouthResults = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Growth & Results</h2>
          
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-5xl font-bold text-blue-600 mb-3">250+</div>
            <h3 className="text-xl font-semibold mb-2">Research Teams</h3>
            <p className="text-gray-600">Formed through our platform</p>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-5xl font-bold text-green-600 mb-3">40+</div>
            <h3 className="text-xl font-semibold mb-2">Institutions</h3>
            <p className="text-gray-600">Using CollabResearch</p>
          </div>

          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="text-5xl font-bold text-purple-600 mb-3">100+</div>
            <h3 className="text-xl font-semibold mb-2">Publications</h3>
            <p className="text-gray-600">Resulting from collaborations</p>
          </div>

        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">The Future</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>

              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                Short-Term Goals
              </h4>

              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Expand to all major Bangladeshi universities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Mobile app development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  AI-powered collaboration matching
                </li>
              </ul>

            </div>

            <div>

              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                Long-Term Vision
              </h4>

              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  International research network
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Integrated funding platform
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Virtual research environments
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GrouthResults;