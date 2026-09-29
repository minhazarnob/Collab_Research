import React from 'react';

const NetworkSection = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-8" data-aos="fade-right">

                        <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Build Your Research Network
                        </h2>

                        <ul className="space-y-8">
                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Smart Matching</h3>
                                    <p className="text-gray-600">You can connects with ideal collaborators based on research interests, expertise, and publication history.</p>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Direct Communication</h3>
                                    <p className="text-gray-600">Integrated messaging and video call features to easily connect with potential collaborators worldwide.</p>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Verified Credentials</h3>
                                    <p className="text-gray-600">Academic verification helps confirm that you're working with real researchers and trusted institutions.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="lg:w-1/2" data-aos="fade-left">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Researchers networking"
                                className="rounded-xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-2/3">
                                <h4 className="font-bold text-blue-600 mb-1">Join 5,000+ Researchers</h4>
                                <p className="text-sm text-gray-600">Expand your academic network today</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NetworkSection;