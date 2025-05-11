import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium hover:text-primary-600 transition-colors ${
                  isActive ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-white'
                }`
              }
            >
              Home
            </NavLink>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center text-base font-medium group-hover:text-primary-600 transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 transform opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 bg-white shadow-lg rounded-md py-2 w-56">
                <div className="py-1">
                  <Link 
                    to="/services#data-analytics" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Data Analytics
                  </Link>
                  <Link 
                    to="/services#consulting" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Consulting
                  </Link>
                  <Link 
                    to="/services#data-integration" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Data Integration
                  </Link>
                  <Link 
                    to="/services#web-development" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Web Development
                  </Link>
                </div>
              </div>
            </div>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-base font-medium hover:text-primary-600 transition-colors ${
                  isActive ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-white'
                }`
              }
            >
              About Us
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-base font-medium hover:text-primary-600 transition-colors ${
                  isActive ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-white'
                }`
              }
            >
              Contact
            </NavLink>
            
            <Link to="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-primary-600 focus:outline-none`}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-900 hover:bg-gray-50 hover:text-primary-600'
              }`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          
          <div>
            <button
              className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600"
              onClick={toggleServices}
            >
              <span>Services</span>
              <ChevronDown 
                className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {isServicesOpen && (
              <div className="pl-4 pr-2 pb-2">
                <Link 
                  to="/services#data-analytics" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  onClick={closeMenu}
                >
                  Data Analytics
                </Link>
                <Link 
                  to="/services#consulting" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  onClick={closeMenu}
                >
                  Consulting
                </Link>
                <Link 
                  to="/services#data-integration" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  onClick={closeMenu}
                >
                  Data Integration
                </Link>
                <Link 
                  to="/services#web-development" 
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  onClick={closeMenu}
                >
                  Web Development
                </Link>
              </div>
            )}
          </div>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-900 hover:bg-gray-50 hover:text-primary-600'
              }`
            }
            onClick={closeMenu}
          >
            About Us
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-900 hover:bg-gray-50 hover:text-primary-600'
              }`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          
          <div className="pt-2">
            <Link 
              to="/contact" 
              className="block w-full text-center py-3 px-4 rounded-md shadow bg-primary-600 text-white font-medium hover:bg-primary-700"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;