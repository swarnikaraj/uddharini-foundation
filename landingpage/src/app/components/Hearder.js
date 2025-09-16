"use client";
import React from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#initiatives", label: "Initiatives" },
    { href: "#leaderboard", label: "Leaderboard" },
    { href: "#gallery", label: "Gallery" },
    { href: "#volunteer", label: "Volunteer" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo Section */}
          <div className="logo-section">
            <div className="">
              <Image
                alt="Uddharini Foundation"
                src="/logo.png"
                width={60}
                height={60}
                className=""
              />
            </div>
            <div className="logo-text">
              <span className="logo-name">Uddharini Foundation</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems?.map((item, idx) => (
              <a key={idx} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}

            {/* CTA Button */}
            <a href="#volunteer" className="cta-button">
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-nav-content">
            {navItems?.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#volunteer"
              className="mobile-cta-button"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
