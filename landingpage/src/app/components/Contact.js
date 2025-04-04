// components/ContactSection.js
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div id="volunteer" className="bg-green-50 py-16 sm:py-24 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get Involved</h2>
          <p className="mt-4 text-lg text-gray-500">
            Be part of our growing community
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
            <p className="text-gray-600 mb-4">
              Join our team of dedicated volunteers and help us in our mission.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScLRKri-qIyzMBJl8XT9WSM6q1kvTCMlakxgQYqvTVEoD79lA/viewform?usp=sharing" // Replace with your Google Form link
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Fill the Form to Join →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Invite Us</h3>
            <p className="text-gray-600 mb-4">
              Request awareness sessions for your school, college, or event.
            </p>
            <a
              href="mailto:contact@uddharini.org"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Send Request →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@FurryMitra"
                className="text-red-600 hover:text-red-700"
              >
                <FaYoutube className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/uddharini_foundation?igsh=ZDU2MjY2cG05am5n&utm_source=qr"
                className="text-pink-600 hover:text-pink-700"
              >
                <FaInstagram className="text-2xl" />
              </a>
              {/* <a
                href="https://wa.me/your_number"
                className="text-green-600 hover:text-green-700"
              >
                <FaWhatsapp className="text-2xl" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
