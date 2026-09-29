
import {useState} from 'react';
import  { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        {to: "/about" , label:"About"},
        {to: "/login" , label:"Login"},
        {to: "/register" , label:"Sigh Up"},
    ];

    const linkClass = ({isActive})=>{
        `px-4 py-2 border rounded-lg transition-colors duration-200 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 
        ${isActive
            ?"text-blue-600 border-blue-600 bg-blue-50"
            :"text-gray-700 border-gray-300"
        }`
    }

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                
                {/* Website logo*/}
                <link to="/" className="flex items-center">
                    <img src={logo} alt="collab" className='h-8 w-8 mr-2'></img>
                    <h3 className="text-2xl font-bold text-blue-600"> Collab-Research</h3>
                </link>

                {/* Desktop Menu */}
                <nav className="space-x-2 hidden md:flex">
                    {links.map((link)=>(
                        <NavLink key={link.to} to={link.to} className={linkClass}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <button
                    className="md:hidden text-gray-700 hover:text-blue-600"
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

                {/* Mobile menu */}
                {menuOpen && (
                    <nav className="md:hidden flex flex-col gap-2 px-4 pb-4">
                    {links.map((link) => (
                        <NavLink
                        key={link.to}
                        to={link.to}
                        className={linkClass}
                        onClick={() => setMenuOpen(false)}
                        >
                        {link.label}
                        </NavLink>
                    ))}
                    </nav>
                )}
            </div>    
        </header>
    );
};

export default Navbar;