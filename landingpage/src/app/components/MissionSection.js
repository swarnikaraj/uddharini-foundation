const MissionSection = () => {
  const missions = [
    {
      title: "Animal Rescue",
      description:
        "Providing care and shelter to injured and abandoned animals",
      icon: "🐾",
    },
    {
      title: "Environmental Education",
      description: "Spreading awareness about sustainable living and veganism",
      icon: "🌱",
    },
    {
      title: "Plant-Based Workshops",
      description:
        "Training sessions on making plant-based milk and sustainable products",
      icon: "🥛",
    },
    {
      title: "Tree Plantation",
      description:
        "Contributing to a greener planet through regular plantation drives",
      icon: "🌳",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-500">
            Working towards a sustainable and compassionate future
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {missions.map((mission, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                      <span className="text-3xl">{mission.icon}</span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {mission.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {mission.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MissionSection;
