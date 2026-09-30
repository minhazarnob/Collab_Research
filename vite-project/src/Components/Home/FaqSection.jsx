
import {faqs} from "../../utils/faqData.jsx";
import { useState } from "react";
import {Link} from "react-router-dom"

const FaqSection = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    
    const toggleAccordion =(index)=>{
        setActiveAccordion(activeAccordion === index ? null:index);
    };

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about CollabResearch
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                        >
                            <button
                            className={`w-full px-6 py-4 text-left flex justify-between items-center ${activeAccordion === index ? 'bg-blue-50' : 'bg-white'}`}
                            onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                                <svg
                                    className={`w-5 h-5 text-blue-600 transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {activeAccordion === index && (
                            <div className="px-6 pb-4 text-gray-600 animate-fade-in">
                                {faq.answer}
                            </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                        >
                        Contact Our Support
                    </Link>
                </div>
            </div>
      </section>
    );
};

export default FaqSection;