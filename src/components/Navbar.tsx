import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-21">
          <div className="flex items-center">
          <img src="images/1.png" alt="Universal Care Logo" className="h-20 w-20" />
          <span className="ml-2 text-xl font-bold text-primary">Universal Care Organization</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            
            <div className="relative group">
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
              <div className="dropdown">
                <NavLink to="/who-we-are" className="dropdown-link">
                  Who We Are?
                </NavLink>
                <NavLink to="/our-team" className="dropdown-link">
                  Our Team
                </NavLink>
                <NavLink to="/our-projects" className="dropdown-link">
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
      </div>
    </nav>
  );
};

export default Navbar;