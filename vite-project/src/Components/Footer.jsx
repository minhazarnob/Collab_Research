const Footer = () => {
    return (
      <footer className="mt-12 py-4 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500 flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <span className="w-full mt-2 text-gray-400 text-xs">
            © {new Date().getFullYear()} CollabResearch
          </span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  