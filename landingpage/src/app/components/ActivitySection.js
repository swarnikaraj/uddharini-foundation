"use client";
import { useState } from "react";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaHeart,
  FaPalette,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

const ActivitySection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const initiatives = [
    {
      id: 1,
      icon: FaLaptopCode,
      title: "Digital Activism Platform",
      description:
        "We are developing a first-of-its-kind web platform to connect, empower, and reward activists—tracking real-world impact, sharing resources, and building a transparent, action-oriented community.",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      stats: "30+ Activists",
      emoji: "💻",
    },
    {
      id: 2,
      icon: FaGraduationCap,
      title: "Education & Outreach",
      description:
        "From school programs to public campaigns, we inspire critical thinking about animal rights, veganism, and sustainability—empowering the next generation to choose compassion.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      stats: "10+ Schools",
      emoji: "📚",
    },
    {
      id: 3,
      icon: FaHeart,
      title: "Rescue & Relief",
      description:
        "We coordinate and support animal rescues, provide emergency aid, and document real stories of change—making every life count.",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      stats: "100+ Lives Saved",
      emoji: "🐾",
    },
    {
      id: 4,
      icon: FaPalette,
      title: "Creative Advocacy",
      description:
        "Through exposés, research, vegan recipes, and creative projects, we challenge the status quo and celebrate moral courage—showing that a better world is possible.",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      stats: "10+ Projects",
      emoji: "🎨",
    },
  ];

  return (
    <section id="initiatives" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-20 animate-bounce delay-300"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-green-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-green-100 mb-6">
            <FaStar className="text-yellow-500 animate-spin" />
            <span className="text-green-700 font-bold text-sm uppercase tracking-wide">
              Our Amazing Work
            </span>
            <FaStar className="text-yellow-500 animate-spin" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            🌟 Our Initiatives 🌟
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Uddharini is building a movement for total animal liberation and a
            compassionate world. Our work spans digital activism, grassroots
            outreach, education, rescue, and creative advocacy—empowering people
            to take meaningful action for animals and the planet.
          </p>

          {/* Impact Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-blue-100">
              <FaUsers className="text-blue-500" />
              <span className="font-bold text-blue-700">30+ Volunteers</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-green-100">
              <FaGlobe className="text-green-500" />
              <span className="font-bold text-green-700">Global Impact</span>
            </div>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;
            return (
              <div
                key={initiative.id}
                className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-transparent transform hover:-translate-y-2 ${
                  hoveredCard === initiative.id ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredCard(initiative.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Card Content */}
                <div className="relative p-8">
                  {/* Icon and Emoji */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${initiative.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <div className="text-4xl animate-bounce group-hover:animate-spin">
                      {initiative.emoji}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {initiative.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700">
                    {initiative.description}
                  </p>

                  {/* Stats and Action */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`px-4 py-2 rounded-full text-sm font-bold ${initiative.bgColor} bg-gradient-to-r ${initiative.color} bg-clip-text text-transparent border-2 border-current opacity-20 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      {initiative.stats}
                    </div>

                    <div className="flex items-center gap-2 text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <span className="text-sm">Learn More</span>
                      <FaArrowRight className="text-sm animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-pink-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-green-100 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Growing Together
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              These are just a few pillars of our work. As we grow, so will our
              impact—together. Every small action creates ripples of change! 🌊
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://chat.whatsapp.com/DOrq85zbkpND7udcX3lOdT"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <FaHeart className="animate-pulse" />
                Join Our Mission
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScLRKri-qIyzMBJl8XT9WSM6q1kvTCMlakxgQYqvTVEoD79lA/viewform?usp=sharing"
                className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-all duration-300 flex items-center gap-2"
              >
                <FaUsers />
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
