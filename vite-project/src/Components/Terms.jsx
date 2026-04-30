import React, { useState } from 'react';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TermsComponent = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Terms & Conditions</h2>
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 max-h-96 overflow-y-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h3>
        <p className="text-gray-700 mb-4">
          Welcome to our platform. These terms govern your use of our services. By accessing or using our platform, you agree to be bound by these terms.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">2. User Responsibilities</h3>
        <p className="text-gray-700 mb-4">
          You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Intellectual Property</h3>
        <p className="text-gray-700 mb-4">
          All content on our platform, including text, graphics, logos, and software, is our property or licensed to us.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Privacy Policy</h3>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Termination</h3>
        <p className="text-gray-700">
          We may terminate or suspend access to our services immediately, without prior notice, for any breach of these terms.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setAccepted(!accepted)}
            className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mr-3 transition-colors ${
              accepted ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
            }`}
          >
            {accepted && <FiCheckCircle className="text-white" />}
          </button>
          <span className="text-gray-700">
            I have read and agree to the Terms & Conditions
          </span>
        </div>

        <button
          onClick={() => {
            if (accepted) {
              localStorage.setItem('termsAccepted', 'true');
              navigate('/login'); // Now this will work
            }
          }}
          disabled={!accepted}
          className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
            accepted
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default TermsComponent;