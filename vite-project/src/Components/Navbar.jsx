
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
     { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/login", label: "Login" },
    { to: "/register", label: "Sign Up" },
  ];

  const linkClass = ({ isActive }) =>
    `px-4 py-2 border rounded-lg transition-colors duration-200 hover:text-orange-600 hover:border-orange-600 hover:bg-orange-50 ${
      isActive
        ? "text-orange-600 border-orange-600 bg-orange-50"
        : "text-gray-700 border-gray-300"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `px-6 py-4 border-b border-gray-100 text-base transition-colors duration-200 hover:bg-orange-50 hover:text-orange-600 ${
      isActive ? "bg-orange-50 text-orange-600 font-medium" : "text-gray-700"
    }`;

  return (
    <header className="bg-white/20 shadow-md sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">

        {/* Website logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="collab" className="h-8 w-8 mr-2" />
          <h3 className="text-2xl font-bold text-orange-600">Collab-Research</h3>
        </Link>

        {/* Desktop Menu */}
        <nav className="space-x-2 hidden md:flex text-[1.2rem] gap-4 text-black font-normal">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 hover:text-orange-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu - dropdown */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;