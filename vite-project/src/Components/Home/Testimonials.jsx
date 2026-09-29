import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Academic Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    );
};

export default Testimonials;