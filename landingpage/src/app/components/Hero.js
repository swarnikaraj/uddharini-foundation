"use client";
import { useState, useEffect } from "react";
import { FaHandsHelping } from "react-icons/fa";
import "./HeroSection.css";

const floatingEmojis = ["🌱", "🐥", "🐕", "🐱", "🌳", "💧", "🐷", "🐮", "🐐"];
const kindnessWords = [
  "Save Animals",
  "Go Vegan",
  "Plant Trees",
  "Spread Love",
  "Make Change",
];

// Pre-defined positions to avoid Math.random() hydration issues
const floatingPositions = [
  { left: "10%", top: "20%" },
  { left: "85%", top: "15%" },
  { left: "15%", top: "70%" },
  { left: "80%", top: "60%" },
  { left: "25%", top: "40%" },
  { left: "70%", top: "80%" },
  { left: "5%", top: "50%" },
  { left: "90%", top: "35%" },
  { left: "35%", top: "10%" },
  { left: "60%", top: "90%" },
  { left: "45%", top: "25%" },
  { left: "75%", top: "45%" },
];

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);

    // Rotate kindness words
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % kindnessWords?.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Don't render dynamic content until mounted
  if (!isMounted) {
    return (
      <div className="hero-container">
        <div className="hero-background">
          <div className="bg-gradient"></div>
        </div>
        <div className="hero-content">
          <div className="hero-logo">
            <img
              src="/logo.png"
              alt="Uddharini Foundation Logo"
              className="logo-image"
            />
          </div>
          <div className="hero-heading">
            <h1 className="main-title">
              <span className="title-line-1">Uddharini Foundation</span>
              <span className="title-line-2">
                Let&apos;s Make Change<span className="cursor">✨</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-container">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="floating-shapes">
          {floatingPositions?.map((position, i) => (
            <div
              key={i}
              className={`floating-shape shape-${i + 1}`}
              style={{
                animationDelay: `${i * 0.5}s`,
                left: position.left,
                top: position.top,
              }}
            >
              {floatingEmojis[i % floatingEmojis?.length]}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`hero-content ${isVisible ? "visible" : ""}`}>
        {/* Logo */}
        <div className="hero-logo">
          <img
            src="/logo.png"
            alt="Uddharini Foundation Logo"
            className="logo-image"
          />
          <div className="logo-glow"></div>
        </div>

        {/* Main Heading */}
        <div className="hero-heading">
          <h1 className="main-title">
            <span className="title-line-1">Uddharini Foundation</span>
            <span className="title-line-2">
              Let&apos;s{" "}
              <span className="rotating-word">
                {kindnessWords[currentWord]}
              </span>
              <span className="cursor">✨</span>
            </span>
          </h1>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <div className="quick-action">
            <FaHandsHelping className="text-green-600" />
            <a href="https://chat.whatsapp.com/DOrq85zbkpND7udcX3lOdT">
              <span>Join us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll for Challenges</div>
        <div className="scroll-arrow">↓</div>
      </div>
    </div>
  );
};

export default HeroSection;
