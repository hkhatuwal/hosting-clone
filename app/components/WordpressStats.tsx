export default function WordpressStats() {
  const stats = [
    {
      number: "500,000+",
      main: "WordPress sites hosted.",
      description:
        "Creators, agencies, and stores trust Adlef for fast, always-online WordPress hosting.",
    },
    {
      number: "20X",
      main: "faster with LiteSpeed cache.",
      description:
        "Optimized stack delivers the speed Google rewards and visitors feel on every page load.",
    },
    {
      number: "24/7",
      main: "WordPress specialists on call.",
      description:
        "Real experts for plugin conflicts, migrations, and performance — not generic ticket bots.",
    },
  ];

  return (
    <section className="stats relative py-12 md:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 lg:mb-16 xl:mb-20 text-start">
          WordPress hosting that performs.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-[#7FFF00] text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">
                {stat.number}
              </div>

              <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3">
                {stat.main}
              </h3>

              <p className="text-white text-sm md:text-base mb-4 md:mb-6 opacity-90">
                {stat.description}
              </p>

              <div className="border-t border-white w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
