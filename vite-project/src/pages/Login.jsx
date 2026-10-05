
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail,Lock,Loader2  } from "lucide-react";
import { FcGoogle } from "react-icons/fc";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem("userEmail", email);
      setIsLoading(false);
      navigate("/landing");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <div className="bg-gradient-to-r from-orange-600 to-pink-600 py-6 px-8 text-center">
            <h3 className="text-3xl font-bold text-white">Welcome to CollabResearch</h3>
            <p className="text-blue-100 font-medium text-lg mt-2">Sign in to continue your research journey</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="p-8 space-y-6">

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                  placeholder="youremail@gmail.com"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="••••••••"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-lg text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-lg">
                <Link to="/forgot-password" className="font-medium text-pink-600 hover:text-pink-800">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center text-lg py-3 px-4 border border-transparent rounded-lg 
                  shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-pink-500 transition ${isLoading ? 'bg-pink-500' : 'bg-gradient-to-r from-orange-600 to-pink-600 hover:bg-pink-700 hover:cursor-pointer'}`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>

          {/* Social Login */}
          <div className="px-8 pb-6">

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-lg">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <button className="inline-flex justify-center items-center py-2 px-4 border border-orange-500 rounded-lg shadow-sm bg-white text-lg font-medium text-orange-700 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200">
                <FcGoogle className="w-5 h-5" />
                <span className="ml-2">Google</span>
              </button>
            </div>

          </div>
        </div>

        {/* Registration Prompt */}
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-orange-600 hover:text-pink-500 hover:cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;