
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const VerifyEmail = () => {

  
  const [pin, setPin] = useState(['','','','','','']);
  const [error, setError] = useState('');

  const handleChange = (index,value) => {
    if (!/^\d*$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Auto focus to next input
    if(value && index < 5){
      const nextIndex = index + 1;
      const nextId = `pin-${nextIndex}`;
      const nextInput = document.getElementById(nextId);
      nextInput.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !pin[index] && index > 0) {
      document.getElementById(`pin-${index - 1}`).focus();
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fullPin = pin.join('');
    
    if (fullPin.length !== 6) {
      setError('Please enter a 6-digit verification code');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Replace with actual verification logic
      if (fullPin === '123456') { // Demo success case
        setIsVerified(true);
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError('Invalid verification code. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const resendCode = () => {
    // Add resend logic here
    alert('A new verification code has been sent to your email');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-2">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="bg-gradient-to-r from-orange-600 to-pink-600 py-6 px-8 text-center">
          <h3 className="text-3xl font-bold text-white">Verify your email</h3>
          <p className="text-blue-100 mt-2 text-lg font-normal">
            {isVerified ? "Verification successful!" : "Enter the 6-digit code sent to your email"}
          </p>
        </div>

        <div className="p-8">
          {isVerified ? (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block mb-6"
              >
                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-3xl font-semibold text-gray-700 mb-2">Email Verified Successfully!</h3>
              <p className="text-gray-600 mb-6 text-lg font-normal">You're being redirected to your dashboard...</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div 
                  className="bg-green-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2 }}
                />
              </div>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit}>
                <div className="flex justify-center space-x-3 mb-8">
                  {pin.map((digit, index) => (
                    <input
                      key={index}
                      id={`pin-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-2xl text-center border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:ring-2 focus:ring-red-600 outline-none transition"
                      autoFocus={index === 0}
                    />
                  ))}
                </div>

                {error && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6 p-3 bg-red-50 text-red-600 rounded-lg flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {error}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-lg bg-gradient-to-r from-orange-600 to-pink-600font-medium text-white text-xl transition ${isLoading ? 'bg-orange-600' : 'bg-pink-600 hover:bg-pink-700'}`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    'Verify Email'
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600 text-lg font-normal">
                  Didn't receive a code?{' '}
                  <button 
                    onClick={resendCode}
                    className="text-orange-600 hover:text-pink-800 font-medium focus:outline-none cursor-pointer"
                  >
                    Resend Code
                  </button>
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-lg font-normal">
                  Need help?{' '}
                  <Link to="/contact" className="text-orange-600 hover:text-pink-800 font-medium">
                    Contact Support
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;