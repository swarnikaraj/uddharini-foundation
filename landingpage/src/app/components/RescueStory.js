const RescueStoriesSection = () => {
  // YouTube Shorts IDs array
  const youtubeShorts = [
    {
      id: "h_7yRfBynQk",
      title: "Dog Who Suffered Fireworks Trauma Finally Rescued",
      description:
        "This heartwarming rescue story is a testament to the power of compassionate care and animal welfare. Meet the dog who suffered from fireworks trauma, but is finally receiving the love and support it desperately needed. As we celebrate our independence, it's essential to remember the vulnerable pets who are often left shaken by the loud noises and bright lights of fireworks. This pup's journey is a reminder of the importance of providing a safe and nurturing environment for all animals. Watch as this brave dog takes its first steps towards recovery, and let's work together to create a world where every pet feels seen, heard, and loved.",
      link: "https://youtube.com/shorts/h_7yRfBynQk?si=0gyhVULxgcnoFNMl",
    },
    {
      id: "UFSqPV55j7s",
      title: "People ignored this injured pup",
      description:
        "Amid a bustling street, an injured puppy lies helpless as people walk past, ignoring its pain. The video captures a heartbreaking reality of how often stray animals are neglected. Eventually, a kind soul notices the pup and steps in to help, offering water, food, and medical care. This short serves as a powerful reminder of the compassion we owe to voiceless beings and calls for more empathy and action to rescue street animals in distress.",
      link: "https://youtube.com/shorts/UFSqPV55j7s?si=ePDOB325OXuUyJMN",
    },
    {
      id: "UB9yjj6hNp8",
      title: "Why do humans do this?",
      description:
        "showcases scenes where innocent dogs are mistreated or abandoned, raising a haunting question—why do humans act this way? Through powerful visuals and emotional undertones, it challenges viewers to reflect on their actions and the societal disregard for animal welfare. This video is a plea for justice and compassion, urging humanity to stand up against cruelty and protect those who cannot speak for themselves.",
      link: "https://youtube.com/shorts/UB9yjj6hNp8?si=A166twUpsMAIMFk5",
    },
  ];

  // Instagram post IDs array
  const instagramPosts = [
    {
      id: "DFh4EAHzbbI",
      title: "Rescue of a Drenched Puppy",
      description:
        "A heartbreaking reel where a small puppy is rescued from a flooded street, showing the strength of compassion in tough times.",
    },
    {
      id: "DCWrraOAhvo",
      title: "Feeding the Forgotten",
      description:
        "This reel follows a kind human who feeds starving stray dogs and cats, reminding us that small acts can change lives.",
    },
    {
      id: "DCwlWxxTyne",
      title: "Chained and Freed",
      description:
        "The video reveals the rescue of a dog chained for days without food, culminating in its emotional first walk after freedom.",
    },
  ];

  return (
    <div id="rescue-stories" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800">
          Rescue Stories
        </h2>
        <p className="mt-4 text-center text-gray-600 mb-12">
          Watch the inspiring stories of animals we&apos;ve rescued and
          rehabilitated.
        </p>

        {/* YouTube Shorts Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-green-700 mb-8">
            YouTube
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeShorts.map((short, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "177.77%" }}
                >
                  {" "}
                  {/* Aspect ratio for Shorts (9:16) */}
                  <iframe
                    src={`https://www.youtube.com/embed/${short.id}`}
                    title={short.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">{short.title}</h4>
                  <p className="text-sm text-gray-600">{short.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/@FurryMitra/shorts" // Replace with your YouTube Shorts URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-md shadow-md text-lg font-medium"
            >
              <span>More on YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-green-700 mb-8">
            Instagram
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instagramPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <iframe
                    src={`https://www.instagram.com/p/${post.id}/embed`}
                    title={post.title}
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    className="w-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">{post.title}</h4>
                  <p className="text-sm text-gray-600">{post.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/uddharini_foundation?igsh=ZDU2MjY2cG05am5n&utm_source=qr" // Replace with your Instagram profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-white bg-pink-600 hover:bg-pink-700 rounded-md shadow-md text-lg font-medium"
            >
              <span>Follow Us on Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescueStoriesSection;
