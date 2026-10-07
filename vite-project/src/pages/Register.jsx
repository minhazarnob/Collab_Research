
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle } from "lucide-react";
import { Loader2 } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    researcherType: 'Student'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const researcherTypes = [
    'Student',
    'Teacher/Professor',
    'Industry Professional',
    'Independent Researcher',
    'Government Researcher',
    'Non-profit Researcher'
  ];

  const handleChange = (event) => {
    setFormData({...formData,[event.target.name]: event.target.value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    // Validate password strength (optional)
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      setIsSubmitting(false);
      return;
    }
    //When work backend, delete from here to 
    setTimeout(() => {
    navigate('/verify-email', {
      state: {
        email: formData.email,
        name: formData.name,
      },
    });
    setIsSubmitting(false);
  }, 1000); // 1 second fake delay
  //this portion should be remoed
  /*
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        let message = 'Registration failed';

        try {
          const errorData = await response.json();
          message = errorData.message || message;
        } catch (jsonError) {
          // response is not valid JSON
        }

        throw new Error(message);
      }

      // ✅ Successful registration
      navigate('/verify-email', {
        state: {
          email: formData.email,
          name: formData.name
        }
      });

    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">

        <div className="bg-gradient-to-r from-orange-600 to-pink-700 p-6 text-center">
          <h3 className="text-2xl font-bold text-white">Create CollabResearch Account</h3>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all"
                placeholder="your@gmail.com"
                required
              />
            </div>

            <div>
              <label htmlFor="researcherType" className="block text-lg font-medium text-gray-700 mb-1">
                I am a...
              </label>
              <select
                id="researcherType"
                name="researcherType"
                value={formData.researcherType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all appearance-none bg-white"
                required
              >
                {researcherTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all"
                placeholder="••••••••"
                minLength="8"
                required
              />
              <p className="text-sm text-gray-700 mt-1">Minimum 8 characters</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-orange-700 hover:to-pink-800 transition-all shadow-md hover:shadow-lg ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center text-lg">
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Creating Account...
              </span>
            ) : (
              'Register Now'
            )}
          </button>

          <div className="text-center text-lg text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-orange-600 hover:text-pink-600 font-bold">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
