
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-gray-700 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-2xl font-bold mb-2">CollabResearch</h3>
              <p className="text-white font-medium text-lg">Pabna University of Science and Technology</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/about" className="hover:text-white text-lg font-medium">About</Link>
              <Link to="/contact" className="hover:text-white text-lg font-medium">Contact</Link>
              <Link to="/privacy" className="hover:text-white text-lg font-medium">Privacy</Link>
              <Link to="/terms" className="hover:text-white text-lg font-medium">Terms</Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-lg text-white">
            <p>© 2026 CollabResearch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;