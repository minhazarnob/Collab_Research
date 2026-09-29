import React from 'react';

const ResearchTools = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Essential Research Tools
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Curated collection of powerful tools used by researchers worldwide
      </p>
    </div>

    {/* Tools Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 auto-rows-[minmax(300px,auto)]">
      {/* Google Scholar - Blue */}
      <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" 
         className="bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-blue-100">
        <div className="flex items-center mb-4">
          <img src="../src/assets/Images/Google schooler.jpg" alt="Google Scholar" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Google Scholar</h3>
        </div>
        <p className="text-gray-600 mb-4">A free, comprehensive academic search engine for scholarly articles, theses, and books.</p>
        <div className="flex items-center text-blue-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* NetworkAnalyst - Purple */}
      <a href="https://www.networkanalyst.ca" target="_blank" rel="noopener noreferrer" 
         className="bg-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-purple-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\Network.png" alt="NetworkAnalyst" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">NetworkAnalyst</h3>
        </div>
        <p className="text-gray-600 mb-4">A powerful web tool for analyzing and visualizing gene expression and biological networks.</p>
        <div className="flex items-center text-purple-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* ResearchRabbit - Pink */}
      <a href="https://www.researchrabbit.ai" target="_blank" rel="noopener noreferrer" 
         className="bg-pink-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-pink-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\ResearchRabbit.png" alt="ResearchRabbit" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">ResearchRabbit</h3>
        </div>
        <p className="text-gray-600 mb-4">Visualizes research paper and author connections to help you explore related literature.</p>
        <div className="flex items-center text-pink-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* Zotero - Green */}
      <a href="https://www.zotero.org" target="_blank" rel="noopener noreferrer" 
         className="bg-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-green-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\Zotero.png" alt="Zotero" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Zotero</h3>
        </div>
        <p className="text-gray-600 mb-4">A reference manager that helps you collect, organize, and cite research sources easily.</p>
        <div className="flex items-center text-green-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* Mendeley - Indigo */}
      <a href="https://www.mendeley.com" target="_blank" rel="noopener noreferrer" 
         className="bg-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-indigo-100">
        <div className="flex items-center mb-4">
          <img src="../src/assets/Images/Mendeley.png" alt="Mendeley" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Mendeley</h3>
        </div>
        <p className="text-gray-600 mb-4">An academic reference manager for organizing papers and collaborating with other researchers.

</p>
        <div className="flex items-center text-indigo-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* Grammarly - Teal */}
      <a href="https://www.grammarly.com" target="_blank" rel="noopener noreferrer" 
         className="bg-teal-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-teal-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\grammarly.JPG" alt="Grammarly" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Grammarly</h3>
        </div>
        <p className="text-gray-600 mb-4">An AI-powered writing assistant for improving grammar, clarity, and tone in research writing.</p>
        <div className="flex items-center text-teal-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* QuillBot - Amber */}
      <a href="https://www.quillbot.com" target="_blank" rel="noopener noreferrer" 
         className="bg-amber-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-amber-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\quillbot.png" alt="QuillBot" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">QuillBot</h3>
        </div>
        <p className="text-gray-600 mb-4">An AI paraphrasing tool that helps rewrite and refine your academic writing effectively.</p>
        <div className="flex items-center text-amber-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* STRING - Red */}
      <a href="https://string-db.org" target="_blank" rel="noopener noreferrer" 
         className="bg-red-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-red-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\String.png" alt="STRING" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">STRING</h3>
        </div>
        <p className="text-gray-600 mb-4">A database that reveals known and predicted protein-protein interactions.</p>
        <div className="flex items-center text-red-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* Cytoscape - Cyan */}
      <a href="https://cytoscape.org" target="_blank" rel="noopener noreferrer" 
         className="bg-cyan-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-cyan-100">
        <div className="flex items-center mb-4">
          <img src="../src/assets/Images/cytoscape.png" alt="Cytoscape" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Cytoscape</h3>
        </div>
        <p className="text-gray-600 mb-4">A desktop software for visualizing and analyzing complex biological networks.</p>
        <div className="flex items-center text-cyan-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* Enrichr - Lime */}
      <a href="https://maayanlab.cloud/Enrichr" target="_blank" rel="noopener noreferrer" 
         className="bg-lime-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-lime-100 min-h-[200px]">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\enrichr.png" alt="Enrichr" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Enrichr</h3>
        </div>
        <p className="text-gray-600 mb-4">A fast and user-friendly tool for gene list enrichment and pathway analysis.

</p>
        <div className="flex items-center text-lime-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>
    </div>

    {/* Explore More Button - Now a Link to Registration */}
<div className="text-center mt-8">
  <Link
    to="/login"
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors duration-200 hover:shadow-md"
  >
    Explore More Tools
    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </Link>
</div>
  </div>
</section>

    );
};

export default ResearchTools;