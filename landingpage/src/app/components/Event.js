"use client";

import {
  FaChalkboardTeacher,
  FaQuestion,
  FaLeaf,
  FaGift,
  FaSmile,
} from "react-icons/fa";
import { motion } from "framer-motion";

const programSteps = [
  {
    icon: <FaChalkboardTeacher className="text-yellow-600 text-3xl" />,
    title: "Presentation & Awareness",
    description:
      "A short 10–15 min session with slides, music, and videos about animal lives, empathy, and an intro to veganism.",
  },
  {
    icon: <FaQuestion className="text-blue-600 text-3xl" />,
    title: "Subjective Q&A",
    description:
      "Students reflect on real-life moral situations and write their thoughts.",
  },
  {
    icon: <FaLeaf className="text-green-600 text-3xl" />,
    title: "Verbal Quiz",
    description:
      "A fun nutrition quiz focused on plant-based sources of strength and kindness.",
  },
  {
    icon: <FaGift className="text-pink-600 text-3xl" />,
    title: "Prize for Top 3",
    description:
      "Winners are selected based on their responses and participation.",
  },
  {
    icon: <FaSmile className="text-emerald-600 text-3xl" />,
    title: "Chocolates & Pledge",
    description:
      "All kids receive homemade vegan chocolate and a badge or pledge card.",
  },
];

const AhimsaClassroom = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-yellow-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-800 mb-4">
            🌱 Ahimsa Classroom by Uddharini
          </h2>
          <p className="text-md md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Every 15 days, we visit schools to nurture compassion and spark
            critical thinking. This session encourages empathy, mindful living,
            and compassionate choices for a better world.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative border-l-4 border-emerald-200 ml-4 space-y-12">
          {programSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative pl-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
            >
              {/* Icon bubble */}
              <div className="absolute left-[-28px] top-1 w-12 h-12 rounded-full bg-white border-2 border-emerald-300 shadow-md flex items-center justify-center">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-yellow-200 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-700 mb-2">
              Invite Ahimsa Classroom to Your School 🏫
            </h3>
            <p className="text-sm text-gray-600 mb-5">
              We’re open to collaborating with schools that care about values,
              nonviolence, and holistic learning.
            </p>
            <a
              href="mailto:swarnnika.uddharini.org"
              className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold text-sm shadow-md hover:bg-emerald-700 transition-all"
            >
              📩 Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AhimsaClassroom;
