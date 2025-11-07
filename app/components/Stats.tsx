export default function Stats() {
  const stats = [
    {
      number: "3 million",
      main: "websites hosted.",
      description: "Trusted by millions for fast, secure, always-online hosting."
    },
    {
      number: "40+",
      main: "locations around the world.",
      description: "Global network ensures peak performance wherever your visitors are."
    },
    {
      number: "700,000+",
      main: "valued customers.",
      description: "Supporting businesses with reliable hosting and real human support."
    }
  ];

  return (
    <section className="stats relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background image will be added here later */}

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-12 md:mb-16 lg:mb-20 text-start">
          The stats speak for themselves.
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              {/* Number */}
              <div className="text-[#7FFF00] text-5xl md:text-4xl lg:text-5xl font-bold mb-4">
                {stat.number}
              </div>
              
              {/* Main Description */}
              <h3 className="text-white text-md md:text-xl font-semibold mb-3">
                {stat.main}
              </h3>
              
              {/* Detailed Description */}
              <p className="text-white text-base md:text-md mb-6 opacity-90">
                {stat.description}
              </p>
              
              {/* White horizontal line */}
              <div className="border-t border-white w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

