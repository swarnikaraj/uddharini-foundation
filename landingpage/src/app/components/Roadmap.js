"use client";
import { useEffect, useState } from "react";
import {
  FaGift,
  FaCamera,
  FaLeaf,
  FaHandsHelping,
  FaTrophy,
} from "react-icons/fa";
import "./SnakeRoadmap.css";

const levels = [
  {
    icon: <FaLeaf className="text-green-600 text-3xl" />,
    title: "Join the Challenge",
    description: "Sign up and commit to spreading kindness this summer.",
    position: { x: 50, y: 50 },
  },
  {
    icon: <FaHandsHelping className="text-yellow-600 text-3xl" />,
    title: "Acts of Kindness",
    description:
      "Serve water, feed animals, plant a tree, or help someone in need.",
    position: { x: 350, y: 150 },
  },
  {
    icon: <FaCamera className="text-blue-600 text-3xl" />,
    title: "Capture the Moment",
    description: "Take photos or videos of your kind acts and share them.",
    position: { x: 50, y: 250 },
  },
  {
    icon: <FaGift className="text-pink-600 text-3xl" />,
    title: "Claim Your Reward",
    description:
      "Submit your entries to earn certificates, books, t-shirts, and more.",
    position: { x: 350, y: 350 },
  },
  {
    icon: <FaTrophy className="text-orange-600 text-3xl" />,
    title: "Celebrate & Inspire",
    description: "Winners are announced, and everyone receives a certificate.",
    position: { x: 200, y: 450 },
  },
];

const SnakeRoadmap = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [visibleLevels, setVisibleLevels] = useState([]);

  useEffect(() => {
    // Start the snake animation
    setAnimationStarted(true);

    // Show levels progressively as snake reaches them
    levels.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleLevels((prev) => [...prev, idx]);
      }, (idx + 1) * 1500); // 1.5s delay between each level
    });
  }, []);

  // SVG path for snake movement
  const snakePath = `
    M 100 100 
    Q 200 50 400 100 
    Q 500 150 400 200
    Q 300 250 100 200
    Q 50 300 150 350
    Q 250 400 400 350
    Q 500 400 450 450
    Q 350 500 250 450
  `;

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          Challenge Roadmap
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Follow the path, spread kindness, and earn rewards!
        </p>

        <div className="relative w-full h-[600px] mx-auto">
          {/* Animated Snake Path SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background path */}
            <path
              d={snakePath}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Animated snake path */}
            <path
              d={snakePath}
              fill="none"
              stroke="url(#snakeGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`snake-path ${animationStarted ? "animate" : ""}`}
            />

            {/* Gradient definition for snake */}
            <defs>
              <linearGradient
                id="snakeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#6ee7b7" />
              </linearGradient>
            </defs>

            {/* Moving snake head */}
            <circle
              r="6"
              fill="#059669"
              className={`snake-head ${animationStarted ? "animate" : ""}`}
            >
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path={snakePath}
              />
            </circle>
          </svg>

          {/* Level Cards */}
          {levels.map((level, idx) => (
            <div
              key={idx}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 level-card ${
                visibleLevels.includes(idx) ? "visible" : ""
              }`}
              style={{
                left: `${(level.position.x / 500) * 100}%`,
                top: `${(level.position.y / 500) * 100}%`,
              }}
            >
              {/* Level number badge */}
              <div className="level-badge">{idx + 1}</div>

              {/* Card content */}
              <div className="level-content">
                <div className="mb-3">{level.icon}</div>
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  {level.title}
                </h3>
                <p className="text-gray-600 text-sm">{level.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12">
          <a
            href="https://chat.whatsapp.com/J6TG4SQiLqqJdeIen830lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default SnakeRoadmap;
