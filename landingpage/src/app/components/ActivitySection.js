const ActivitySection = () => (
  <section id="initiatives" className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-green-800">
        Our Initiatives
      </h2>
      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
        Uddharini is building a movement for total animal liberation and a
        compassionate world. Our work spans digital activism, grassroots
        outreach, education, rescue, and creative advocacy—empowering people to
        take meaningful action for animals and the planet.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-green-800">
            Digital Activism Platform
          </h3>
          <p className="mt-4 text-gray-600">
            We are developing a first-of-its-kind web platform to connect,
            empower, and reward activists—tracking real-world impact, sharing
            resources, and building a transparent, action-oriented community.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-green-800">
            Education & Outreach
          </h3>
          <p className="mt-4 text-gray-600">
            From school programs to public campaigns, we inspire critical
            thinking about animal rights, veganism, and
            sustainability—empowering the next generation to choose compassion.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-green-800">
            Rescue & Relief
          </h3>
          <p className="mt-4 text-gray-600">
            We coordinate and support animal rescues, provide emergency aid, and
            document real stories of change—making every life count.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-green-800">
            Creative Advocacy
          </h3>
          <p className="mt-4 text-gray-600">
            Through exposés, research, vegan recipes, and creative projects, we
            challenge the status quo and celebrate moral courage—showing that a
            better world is possible.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-500">
          These are just a few pillars of our work. As we grow, so will our
          impact—together.
        </p>
      </div>
    </div>
  </section>
);

export default ActivitySection;
