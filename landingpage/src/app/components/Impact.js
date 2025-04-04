const ImpactSection = () => {
  return (
    <div className="bg-green-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Impact</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-green-600">100+</div>
              <div className="mt-2 text-lg text-gray-600">Animals Rescued</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-green-600">100+</div>
              <div className="mt-2 text-lg text-gray-600">Trees Planted</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-green-600">10+</div>
              <div className="mt-2 text-lg text-gray-600">
                Awareness Sessions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
