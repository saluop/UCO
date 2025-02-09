import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src="images/1.png" alt="Universal Care Logo" className="h-10 w-10" />
            <span className="ml-2 text-xl font-bold text-primary">Universal Care Organization</span>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <div className="relative group">
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
              <div className="dropdown hidden group-hover:block absolute bg-white shadow-md mt-2 z-10">
                <NavLink to="/who-we-are" className="dropdown-link block px-4 py-2">
                  Who We Are?
                </NavLink>
                <NavLink to="/our-team" className="dropdown-link block px-4 py-2">
                  Our Team
                </NavLink>
                <NavLink to="/our-projects" className="dropdown-link block px-4 py-2">
                  Our Projects
                </NavLink>
              </div>
            </div>
            <NavLink to="/donate" className="px-4 py-2 bg-primary-light text-white rounded-md hover:bg-primary transition-colors duration-200 shadow-md hover:shadow-lg">
              Donate Now
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <NavLink to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Home
            </NavLink>
            <NavLink to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              About Us
            </NavLink>
            <NavLink to="/who-we-are" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Who We Are?
            </NavLink>
            <NavLink to="/our-team" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Our Team
            </NavLink>
            <NavLink to="/our-projects" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Our Projects
            </NavLink>
            <NavLink to="/donate" className="block px-4 py-2 bg-primary-light text-white rounded-md hover:bg-primary transition-colors duration-200">
              Donate Now
            </NavLink>
            <NavLink to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
