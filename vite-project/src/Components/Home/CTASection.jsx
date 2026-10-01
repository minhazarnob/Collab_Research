
import { Link } from "react-router-dom";

const CtaSection = () => {
    return (
        <section className="py-20 px-4 bg-gray-200 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">Ready to Enhance Your Research?</h3>
          <p className="text-xl mb-8 opacity-90 text-gray-900">
            Join our growing community of researchers and academics
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 ">
            <Link
              to="/register"
              className="bg-orange-600 text-black hover:bg-gray-100 font-medium py-3 px-8 rounded-full text-lg"
            >
              Create Free Account
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-black bg-white hover:bg-orange-700 font-medium py-3 px-8 rounded-full text-lg"
            >
              Existing User Login
            </Link>
          </div>
        </div>
      </section>
    );
};

export default CtaSection;