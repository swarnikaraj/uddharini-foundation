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

        {/* Current Activity */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-green-800">
            Current Activity: Water Pots for Animals in Bihar
          </h3>
          <div className="mt-6 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
            {/* Flyer */}
            <Image
              width={400}
              height={600}
              src="/1.png"
              alt="Water Pots for Animals Flyer"
              className="w-full lg:w-1/2 rounded-lg shadow-md"
            />
            {/* Text and Donation Link */}
            <div className="mt-6 lg:mt-0">
              <p className="text-gray-600">
                We are working to provide water pots for animals in Bihar to
                ensure they have access to clean drinking water during the
                summer. Your support can make a big difference in their lives.
              </p>
              <div className="mt-4">
                <div>
                  <a
                    href="#donate"
                    className="px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-md shadow-md text-lg font-medium"
                  >
                    Donate Now
                  </a>
                </div>
                <div className="mt-2">
                  <Image
                    src="/r-qr2.png"
                    width={400}
                    height={500}
                    alt="donate"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-green-800">
            Upcoming Events: Awareness Programs in Patna Schools
          </h3>
          <p className="mt-4 text-gray-600">
            From <strong>22nd to 30th April</strong>, we will be conducting
            awareness programs in schools across Patna to educate students about
            animal welfare and environmental sustainability.
          </p>
          <div className="mt-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScLRKri-qIyzMBJl8XT9WSM6q1kvTCMlakxgQYqvTVEoD79lA/viewform?usp=sharing"
              className="px-6 py-3 text-green-700 bg-white hover:bg-gray-100 rounded-md shadow-md text-lg font-medium"
            >
              Volunteer for the Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySection;
