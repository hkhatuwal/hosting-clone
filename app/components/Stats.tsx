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
    <section className="stats relative py-12 md:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background image will be added here later */}

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 lg:mb-16 xl:mb-20 text-start">
          The stats speak for themselves.
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              {/* Number */}
              <div className="text-[#7FFF00] text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">
                {stat.number}
              </div>
              
              {/* Main Description */}
              <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3">
                {stat.main}
              </h3>
              
              {/* Detailed Description */}
              <p className="text-white text-sm md:text-base mb-4 md:mb-6 opacity-90">
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

