import { Phone, Mail, MapPin} from "lucide-react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";


const MainSection = () => {
    return (

      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl mb-6 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full text-lg px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500"
                  placeholder="Your name"
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
                  className="w-full text-lg px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full text-lg px-6 py-3 border border-gray-300 rounded-lg focus:border-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="support">Technical Support</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full text-lg px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-lg bg-orange-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                     <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-gray-800">Phone</h3>
                    <p className="text-gray-600">+880 1766 844323</p>
                    <p className="text-gray-600 text-sm mt-1">Saturday-Wednesday, 9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                     <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-gray-800">Email</h3>
                    <p className="text-gray-600">collabresearchofficial@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                   <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-gray-800">Address</h3>
                    <p className="text-gray-600">Pabna University of Science and Technology</p>
                    <p className="text-gray-600">Pabna-6600, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Connect With Us</h2>
              <div className="flex justify-center space-x-6">
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <span className="sr-only">Facebook</span>
                   <FaFacebook className="h-8 w-8" />
                </a>

                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-8 w-8" />
                </a>

                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                  <span className="sr-only">GitHub</span>
                   <FaGithub className="h-8 w-8" />
                </a>

                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-8 w-8" />
                </a>

                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
                  <span className="sr-only">YouTube</span>
                  <FaYoutube className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
            
    );
};

export default MainSection;