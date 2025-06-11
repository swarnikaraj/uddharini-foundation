const HeroSection = () => (
  <div className="relative bg-green-50 overflow-hidden">
    <div className="relative z-10 flex flex-col items-center justify-center text-center py-20">
      <img
        src="/logo.png"
        alt="Uddharini Foundation Logo"
        className="w-32 h-auto mb-6"
      />
      <h1 className="text-5xl font-bold text-green-800">
        Uddharini Foundation
      </h1>
      <p className="mt-4 max-w-xl text-xl text-gray-700">
        Building a kinder world—one action at a time. <br />
        Join us to rescue lives, inspire change, and make compassion visible.
      </p>
      <div className="mt-8 flex space-x-4">
        <a
          href="#volunteer"
          className="px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-md shadow text-lg font-medium"
        >
          Volunteer
        </a>
        <a
          href="#about"
          className="px-6 py-3 text-green-700 bg-white hover:bg-gray-100 rounded-md shadow text-lg font-medium"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
);

export default HeroSection;

//
