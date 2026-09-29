
const ProjectSection = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="lg:w-1/2 space-y-8" data-aos="fade-left">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                            Streamlined Project Management
                        </h2>

                        <ul className="space-y-8">
                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Task Automation</h3>
                                    <p className="text-gray-600">Automate repetitive tasks like literature reviews and data collection with our smart tools.</p>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Milestone Tracking</h3>
                                    <p className="text-gray-600">Visual timelines keep your project on schedule with automated deadline reminders.</p>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Analytics Dashboard</h3>
                                    <p className="text-gray-600">Real-time insights into project progress, team contributions, and research impact.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Project management dashboard"
                                className="rounded-xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-2/3">
                                <h4 className="font-bold text-indigo-600 mb-1">Increase Productivity by 40%</h4>
                                <p className="text-sm text-gray-600">Our users report significant efficiency gains</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;