
import {ClipboardList, Calendar, FileBarChart} from "lucide-react";
import Data_Analytics from "../../assets/Images/Data_Analytics.jpg"

const ProjectSection = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="lg:w-1/2 space-y-8" data-aos="fade-left">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                            Streamlined Project Management
                        </h2>

                        <ul className="space-y-8">

                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                                    <ClipboardList className="w-6 h-6 text-orange-600" />
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Task Automation</h3>
                                    <p className="text-gray-600 text-lg">Automate repetitive tasks like literature reviews and data collection with our smart tools.</p>
                                </div>
                            </li>

                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                                     <Calendar className="w-6 h-6 text-orange-600" />
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Milestone Tracking</h3>
                                    <p className="text-gray-600 text-lg">Visual timelines keep your project on schedule with automated deadline reminders.</p>
                                </div>
                            </li>

                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                                     <FileBarChart className="w-6 h-6 text-orange-600" />
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Analytics Dashboard</h3>
                                    <p className="text-gray-600 text-lg">Real-time insights into project progress, team contributions, and research impact.</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                    
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <div className="relative">
                            <img
                                src={Data_Analytics}
                                alt="Project management dashboard"
                                className="rounded-xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-2/3">
                                <h4 className="font-bold text-purple-600 mb-1 text-lg">Increase Productivity by 40%</h4>
                                <p className="text-md text-gray-600">Our users report significant efficiency gains</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;