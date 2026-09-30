
import { FileEdit, Zap, Layers } from "lucide-react";
import ResearchReview from "../../assets/Images/Research-review.jpg"

const PublicationTools = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
                            Advanced Publication Tools
                        </h2>

                        <ul className="space-y-8">

                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                                    <FileEdit className="w-6 h-6 text-orange-600" />
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Real-time Co-authoring</h3>
                                    <p className="text-gray-600 text-lg">Multiple researchers can work simultaneously with version control and change tracking.</p>
                                </div>
                            </li>

                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                                    <Zap className="w-6 h-6 text-orange-600" />
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Citation Wizard</h3>
                                    <p className="text-gray-600 text-lg">Automatically format references in any style (APA, MLA, Chicago, etc.) with one click.</p>
                                </div>
                            </li>

                            <li className="flex items-start group">
                                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                                    <Layers className="w-6 h-6 text-orange-600" />
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="font-semibold text-xl mb-2 text-gray-800">Journal Matching</h3>
                                    <p className="text-gray-600 text-lg">Our algorithm suggests the best journals for your research based on content and impact factor.</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                    
                    <div className="lg:w-1/2" data-aos="fade-left">
                        <div className="relative">
                        <img
                            src={ResearchReview}
                            className="rounded-xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-2/3">
                            <h4 className="font-bold text-purple-600 mb-1 text-lg">Accepted by Top Journals</h4>
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