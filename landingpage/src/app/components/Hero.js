const HeroSection = () => {
  return (
    <div className="relative bg-green-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 sm:py-24 lg:py-32">
        {/* Logo with Animation */}
        <img
          src="/logo.png" // Ensure the logo is in the public folder
          alt="Uddharini Foundation Logo"
          className="w-40 h-auto mb-6 "
        />

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-green-800 animate-fade-in">
          Uddharini Foundation
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl text-lg text-gray-600 sm:text-xl animate-fade-in">
          Because Every Life Matters. Join us in our mission to rescue animals,
          promote sustainability, and create a compassionate world.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex space-x-4">
          <a
            href="#donate"
            className="px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-md shadow-md text-lg font-medium animate-slide-in"
          >
            Donate Now
          </a>
          <a
            href="#volunteer"
            className="px-6 py-3 text-green-700 bg-white hover:bg-gray-100 rounded-md shadow-md text-lg font-medium animate-slide-in"
          >
            Volunteer
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
