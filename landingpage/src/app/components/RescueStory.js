import {
  FaLeaf,
  FaTint,
  FaSeedling,
  FaHandsHelping,
  FaGift,
} from "react-icons/fa";

const challenges = [
  {
    icon: <FaTint className="text-blue-500 text-3xl" />,
    title: "Water for Life Challenge",
    description:
      "Place water bowls for animals and birds in your neighborhood for 7 days. Share a photo each day to inspire others.",
    days: 7,
  },
  {
    icon: <FaHandsHelping className="text-yellow-500 text-3xl" />,
    title: "Stray Animal Feed Challenge",
    description:
      "Feed stray animals daily for 5 days. Capture the moments and share your kindness.",
    days: 5,
  },
  {
    icon: <FaLeaf className="text-green-500 text-3xl" />,
    title: "Plant Milk Challenge",
    description:
      "Switch to plant-based milk for 7 days. Share your favorite recipes or moments.",
    days: 7,
  },
  {
    icon: <FaSeedling className="text-green-700 text-3xl" />,
    title: "Green Guardian Challenge",
    description:
      "Plant a tree or sapling and nurture it for 10 days. Document its growth and your care.",
    days: 10,
  },
  {
    icon: <FaGift className="text-pink-500 text-3xl" />,
    title: "Compassionate Acts Challenge",
    description:
      "Choose your own act of kindness—rescue, educate, or advocate. Every good deed counts!",
    days: 3,
  },
];

const ActsOfKindnessChallenge = () => (
  <section id="goodness-rewards" className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-green-800 mb-2">
        Acts of Kindness Challenge
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Take part in our ongoing challenges, spread compassion, and earn rewards
        for your goodness. Every small act creates ripples of change.
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        {challenges.map((challenge, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center"
          >
            <div className="mb-4">{challenge.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {challenge.title}
            </h3>
            <p className="text-gray-600 mb-2">{challenge.description}</p>
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
              {challenge.days} Day Challenge
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <p className="text-gray-700 mb-4">
          Ready to join? Participate by joining our WhatsApp group, complete a
          challenge, share your photos, and claim your reward!
        </p>
        <a
          href="https://chat.whatsapp.com/J6TG4SQiLqqJdeIen830lg"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-md shadow font-medium hover:bg-green-700 transition"
        >
          Join the Challenge
        </a>
      </div>
    </div>
  </section>
);

export default ActsOfKindnessChallenge;
