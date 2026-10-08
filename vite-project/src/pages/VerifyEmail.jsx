
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle} from "lucide-react";
import { Loader2 } from "lucide-react";

<Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />

const VerifyEmail = () => {

  
  const [pin, setPin] = useState(['','','','','','']);

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

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const fullPin = pin.join('');

    if (fullPin.length !== 6){
      setError("Please enter a 6-digit varification code");
      return;
    }
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      if(fullPin === "123456"){
        setIsVerified(true);
        setTimeout(()=>navigate("/login"),2000);
      }
      else{
        setError("Invalid verification code. Please try again");
      }
    }
    catch(error){
      setError('An error occurred. Please try again later.');
    }
    finally{
      setIsLoading(false);
    }
  };

  const resendCode = () => {
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
                transition={{ type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500" />
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
                      onChange={(event) => handleChange(index, event.target.value)}
                      onKeyDown={(event) => handleKeyDown(index, event)}
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
                    <AlertCircle className="w-5 h-5 mr-2" />
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
                      <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
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