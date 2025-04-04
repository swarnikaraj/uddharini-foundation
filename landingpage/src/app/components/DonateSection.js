const { default: Image } = require("next/image");

const DonateSection = () => {
  return (
    <div id="donate" className="bg-white py-16 sm:py-24 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Support Our Cause
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Your contribution helps us continue our mission
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold text-center mb-4">
              Donate via UPI
            </h3>
            <div className="flex justify-center mb-4">
              <Image
                width={400}
                height={600}
                src="/qr.jpeg"
                alt="UPI QR Code"
                className="w-auto h-auto"
              />
            </div>
            <p className="text-center text-gray-600">
              Scan QR code or use UPI ID: 7257973068@upi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DonateSection;
