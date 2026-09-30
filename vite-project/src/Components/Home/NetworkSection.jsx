
import { Users, Phone, ShieldCheck } from "lucide-react";
import Researcher from "../../assets/Images/Researcher.jpg"
const NetworkSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
            <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-800">
              Build Your Research Network
            </h3>

            <ul className="space-y-8">

              <li className="flex items-start group">
                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">Smart Matching</h3>
                  <p className="text-gray-600 text-lg">You can connects with ideal collaborators based on research interests, expertise, and publication history.</p>
                </div>
              </li>

              <li className="flex items-start group">
                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">Direct Communication</h3>
                  <p className="text-gray-600 text-lg">Integrated messaging and video call features to easily connect with potential collaborators worldwide.</p>
                </div>
              </li>

              <li className="flex items-start group">
                <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                  <ShieldCheck className="w-6 h-6 text-orange-600" />
                </div>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">Verified Credentials</h3>
                  <p className="text-gray-600 text-lg">Academic verification helps confirm that you're working with real researchers and trusted institutions.</p>
                </div>
              </li>
            </ul>

        </div>

        <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative">
              <img
                src={Researcher}
                alt="Researchers networking"
                className="rounded-xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-2/3">
                <h4 className="font-bold text-purple-600 mb-1 text-lg">Join 5,000+ Researchers</h4>
                <p className="text-md text-gray-600">Expand your academic network today</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NetworkSection;