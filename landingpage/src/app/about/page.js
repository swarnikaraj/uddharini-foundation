import Link from "next/link";
const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="/logo.png"
            alt="Uddharini"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About Uddharini Foundation
          </h1>
          <p className="mt-4 text-lg text-green-100 sm:text-xl">
            Because Every Life Matters. Learn more about our mission, vision,
            and the work we do to create a compassionate and sustainable world.
          </p>
        </div>
      </div>

      {/* Mission, Vision, and Values Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-800">Our Mission</h2>
              <p className="mt-4 text-gray-600">
                To rescue and protect animals, promote sustainable living, and
                educate communities about the importance of compassion and
                environmental stewardship.
              </p>
            </div>
            {/* Vision */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-800">Our Vision</h2>
              <p className="mt-4 text-gray-600">
                A world where every life is valued, and humans live in harmony
                with nature, fostering a sustainable and compassionate future.
              </p>
            </div>
            {/* Values */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-800">Our Values</h2>
              <p className="mt-4 text-gray-600">
                Compassion, sustainability, education, and action are at the
                heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800">
            Our Initiatives
          </h2>
          <p className="mt-4 text-center text-gray-600">
            We are committed to making a difference through various programs and
            activities.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Initiative 1 */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-800">
                Animal Rescue
              </h3>
              <p className="mt-4 text-gray-600">
                Rescuing and rehabilitating animals in need, providing them with
                shelter, care, and love.
              </p>
            </div>
            {/* Initiative 2 */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-800">
                Environmental Education
              </h3>
              <p className="mt-4 text-gray-600">
                Conducting workshops and awareness programs to educate
                communities about veganism, plant-based living, and
                sustainability.
              </p>
            </div>
            {/* Initiative 3 */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-800">
                Tree Plantation
              </h3>
              <p className="mt-4 text-gray-600">
                Planting trees to combat deforestation and promote a greener
                planet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-green-600 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Join Us in Making a Difference
          </h2>
          <p className="mt-4 text-lg text-green-100">
            Whether you want to volunteer, donate, or spread the word, your
            support can help us create a better world for all.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScLRKri-qIyzMBJl8XT9WSM6q1kvTCMlakxgQYqvTVEoD79lA/viewform?usp=sharing" // Replace with your Google Form link
              className="px-6 py-3 text-green-700 bg-white hover:bg-gray-100 rounded-md shadow-md text-lg font-medium"
            >
              Volunteer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
