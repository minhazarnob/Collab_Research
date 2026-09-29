
import {courses} from "../../utils/constants";
import { Link } from "react-router-dom";

const CoursesSection = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Research Courses</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Enhance your research skills with our expert-led courses
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover"/>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold">{course.title}</h3>
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{course.rating} ★</span>
                                </div>
                                <p className="text-gray-600 mb-4">By {course.instructor}</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                                        <span className="text-gray-500 text-sm ml-1">/{course.duration}</span>
                                    </div>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                    to="/login"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                        View All Courses
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;