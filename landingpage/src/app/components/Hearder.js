// components/Header.js
"use client";
import React from "react";
import Image from "next/image";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Replace with your logo */}
              <span className="text-green-700 text-xl font-bold">
                <Image
                  alt="Uddharini"
                  src="/logo.png"
                  width={50}
                  height={50}
                  className="w-auto h-auto"
                />
              </span>
            </div>
          </div>
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <a href="#about" className="text-gray-600 hover:text-green-600">
              About
            </a>
            <a
              href="#initiatives"
              className="text-gray-600 hover:text-green-600"
            >
              Initiatives
            </a>
            <a href="#volunteer" className="text-gray-600 hover:text-green-600">
              Volunteer
            </a>
            {/* <a
              href="#donate"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Donate
            </a> */}
          </div>
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <i className="fas fa-times w-6 h-6"></i>
              ) : (
                <i className="fas fa-bars w-6 h-6"></i>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-green-600"
              >
                About
              </a>
              <a
                href="#initiatives"
                className="block px-3 py-2 text-gray-600 hover:text-green-600"
              >
                Initiatives
              </a>
              <a
                href="#volunteer"
                className="block px-3 py-2 text-gray-600 hover:text-green-600"
              >
                Volunteer
              </a>
              <a
                href="#donate"
                className="block px-3 py-2 text-gray-600 hover:text-green-600"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
