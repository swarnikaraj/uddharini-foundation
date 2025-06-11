import { FaYoutube, FaInstagram } from "react-icons/fa";

const ContactSection = () => (
  <section id="volunteer" className="bg-green-50 py-16 text-gray-800">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900">Get Involved</h2>
      <p className="mt-4 text-lg text-gray-500">
        Join our movement—volunteer, invite us, or follow our journey.
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
          <p className="text-gray-600 mb-4">
            Be part of our core team and help shape a compassionate future.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScLRKri-qIyzMBJl8XT9WSM6q1kvTCMlakxgQYqvTVEoD79lA/viewform?usp=sharing"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Join Now →
          </a>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Invite Us</h3>
          <p className="text-gray-600 mb-4">
            Bring our message to your school, college, or community.
          </p>
          <a
            href="mailto:contact@uddharini.org"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Request a Session →
          </a>
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://www.youtube.com/@FurryMitra"
          className="text-red-600 hover:text-red-700"
        >
          <FaYoutube className="text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/_uddharini_"
          className="text-pink-600 hover:text-pink-700"
        >
          <FaInstagram className="text-2xl" />
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
