import Image from "next/image";

const ActivitySection = () => {
  return (
    <div id="activities" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800">
          Our Activities
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Stay updated with our current and upcoming activities.
        </p>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-green-800">
            Water Pots & Reflective Collars Distribution in Bihar
          </h3>
          <p className="mt-4 text-gray-600">
            We are setting water pots for stray animals and reflective collars across
            Bihar . This effort aims to ensure animals have access to water
            during summer and stay safe at night with reflective collars.
          </p>
          <div className="mt-4">
            <a
              href="#gallery" // You might want to update this link to show event photos
              className="px-6 py-3 text-green-700 bg-white hover:bg-gray-100 rounded-md shadow-md text-lg font-medium"
            >
              View Event Gallery
            </a>
          </div>
        </div>
        {/* Past Events */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-green-800">
            School Awareness Programs
          </h3>
          <p className="mt-4 text-gray-600">
            We are conducting awareness programs in schools across Bihar,
            educating students about animal welfare and environmental
            sustainability. Thank you to all volunteers and participants who
            made this event a success!
          </p>
          <div className="mt-4">
            <a
              href="#gallery" // You might want to update this link to show event photos
              className="px-6 py-3 text-green-700 bg-white hover:bg-gray-100 rounded-md shadow-md text-lg font-medium"
            >
              View Event Gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySection;
