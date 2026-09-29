import React from 'react';

const CtaSection = () => {
    return (
        <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Research?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our growing community of researchers and academics
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full"
            >
              Create Free Account
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white hover:bg-blue-700 font-medium py-3 px-8 rounded-full"
            >
              Existing User Login
            </Link>
          </div>
        </div>
      </section>

    );
};

export default CtaSection;