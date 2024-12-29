const Story = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-yellow-50/50 mix-blend-overlay z-10" />
        <img
          src="/images/world.jpg"
          className="w-full h-full object-cover absolute inset-0"
          alt="World map"
        />
        <div className="absolute inset-0 bg-black/50 z-20" />

        <div className="relative z-30 h-full">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold mb-6 text-white tracking-tight">
                Our dream?
              </h1>
              <p className="text-2xl font-light text-gray-200 leading-relaxed">
                To be reached in every part of world
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-100 mb-4 tracking-tight">
                From Choti Kashi India
              </h1>
              <h2 className="text-3xl text-gray-400 font-light">
                Born in 2024
              </h2>
            </div>

            <div className="prose prose-lg mx-auto prose-invert">
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                At this picturesque small town called Bundi, also known as choti
                kashi of India.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-yellow-50 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="/images/bundi.jpg"
                  alt="Bundi landscape"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
