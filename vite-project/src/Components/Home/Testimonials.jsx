
import { testimonials } from "../../utils/constants";
import { Quote } from "lucide-react";

const Testimonials = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">Trusted by Academic Community</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <Quote
                  className="w-10 h-10 text-orange-500 mb-4 -scale-x-100 italic"
                  style={{ transform: "skewX(-10deg) scaleX(-1)" }}
                  strokeWidth={1.5}
                />
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