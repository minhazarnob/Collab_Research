
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-12 px-4">
            <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                <h3 className="text-white text-xl font-bold mb-2">CollabResearch</h3>
                <p>© {new Date().getFullYear()} All rights reserved</p>
                </div>
                <div className="flex space-x-6">
                <Link to="/about" className="hover:text-white">About</Link>
                <Link to="/contact" className="hover:text-white">Contact</Link>
                <Link to="/privacy" className="hover:text-white">Privacy</Link>
                <Link to="/terms" className="hover:text-white">Terms</Link>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;