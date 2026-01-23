export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Building <span className="text-blue-600">AI-Powered</span> Solutions
            <br />for the Modern Enterprise
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From intelligent chatbots to scalable microservices, we deliver end-to-end
            software solutions that drive innovation and business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">15+</div>
            <div className="text-gray-600 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600 mt-1">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">2</div>
            <div className="text-gray-600 mt-1">US Patents</div>
          </div>
        </div>
      </div>
    </section>
  )
}
