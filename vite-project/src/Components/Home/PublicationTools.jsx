import React from 'react';

const PublicationTools = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            Advanced Publication Tools
                        </h2>

                        <ul className="space-y-8">
                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Real-time Co-authoring</h3>
                                    <p className="text-gray-600">Multiple researchers can work simultaneously with version control and change tracking.</p>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Citation Wizard</h3>
                                    <p className="text-gray-600">Automatically format references in any style (APA, MLA, Chicago, etc.) with one click.</p>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Journal Matching</h3>
                                    <p className="text-gray-600">Our algorithm suggests the best journals for your research based on content and impact factor.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="lg:w-1/2" data-aos="fade-left">
                        <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Publication tools interface"
                            className="rounded-xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-2/3">
                            <h4 className="font-bold text-purple-600 mb-1">Accepted by Top Journals</h4>
                            <p className="text-sm text-gray-600">Increase your publication success rate</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PublicationTools;