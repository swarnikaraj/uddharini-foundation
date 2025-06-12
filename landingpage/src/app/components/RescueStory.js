"use client";
import { useState, useEffect } from "react";
import {
  FaLeaf,
  FaTint,
  FaSeedling,
  FaHandsHelping,
  FaGift,
} from "react-icons/fa";
import "./ActsOfKindnessChallenge.css";

const challenges = [
  {
    icon: <FaTint className="text-blue-600 text-3xl" />,
    title: "Water for Life",
    shortTitle: "Give Water",
    description:
      "Put water bowls for animals and birds for 7 days. Take photos to share!",
    days: 7,
    color: "blue",
    emoji: "💧",
  },
  {
    icon: <FaHandsHelping className="text-orange-600 text-3xl" />,
    title: "Feed Stray Animals",
    shortTitle: "Feed Animals",
    description: "Feed stray animals for 5 days. Show your kindness!",
    days: 5,
    color: "orange",
    emoji: "🐕",
  },
  {
    icon: <FaLeaf className="text-green-600 text-3xl" />,
    title: "Plant Milk Challenge",
    shortTitle: "Plant Milk",
    description: "Try plant milk for 7 days. Share your favorite recipes!",
    days: 7,
    color: "green",
    emoji: "🥛",
  },
  {
    icon: <FaSeedling className="text-emerald-600 text-3xl" />,
    title: "Plant a Tree",
    shortTitle: "Green Guardian",
    description: "Plant and care for a tree for 10 days. Watch it grow!",
    days: 10,
    color: "emerald",
    emoji: "🌱",
  },
  {
    icon: <FaGift className="text-pink-600 text-3xl" />,
    title: "Acts of Kindness",
    shortTitle: "Be Kind",
    description: "Do any kind act for 3 days. Every good deed counts!",
    days: 3,
    color: "pink",
    emoji: "💝",
  },
];

const ActsOfKindnessChallenge = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    challenges.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, idx]);
      }, idx * 200);
    });
  }, []);

  return (
    <section
      id="goodness-rewards"
      className="py-12 bg-gradient-to-b from-green-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-3">
            🌟 Kindness Challenges 🌟
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Join fun challenges, help animals and nature, and win cool prizes!
            🎁
          </p>
        </div>

        {/* Mobile-First Challenge Cards */}
        <div className="space-y-4 md:space-y-6">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className={`challenge-card ${challenge.color} ${
                visibleCards.includes(idx) ? "visible" : "hidden"
              }`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="challenge-inner">
                {/* Left side - Icon and emoji */}
                <div className="challenge-left">
                  <div className="challenge-emoji">{challenge.emoji}</div>
                  <div className="challenge-icon">{challenge.icon}</div>
                </div>

                {/* Right side - Content */}
                <div className="challenge-right">
                  <div className="challenge-header">
                    <h3 className="challenge-title">
                      <span className="md:hidden">{challenge.shortTitle}</span>
                      <span className="hidden md:inline">
                        {challenge.title}
                      </span>
                    </h3>
                    <div className="challenge-days">{challenge.days} days</div>
                  </div>
                  <p className="challenge-desc">{challenge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Ready to Start?
            </h3>
            <p className="text-gray-700 mb-5 text-sm md:text-base">
              Join our WhatsApp group, pick a challenge, share photos, and get
              rewards!
            </p>
            <a
              href="https://chat.whatsapp.com/J6TG4SQiLqqJdeIen830lg"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold text-base shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">📱</span>
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActsOfKindnessChallenge;
