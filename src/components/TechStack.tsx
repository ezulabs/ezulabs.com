const technologies = {
  'Languages': ['TypeScript', 'JavaScript', 'Java', 'Kotlin', 'Python', 'C/C++', 'Swift', 'Lua'],
  'Frontend': ['React', 'Next.js', 'Tailwind CSS', 'GrapesJS'],
  'Backend': ['Node.js', 'Express', 'gRPC', 'Ktor', 'REST APIs'],
  'Mobile': ['Android', 'Jetpack Compose', 'iOS', 'React Native'],
  'AI/ML': ['OpenAI', 'Claude', 'TensorFlow', 'OpenCV', 'Faiss', 'Whisper'],
  'Infrastructure': ['Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis'],
  'Embedded': ['Linux', 'TrustZone', 'BLE', 'IoT', 'Device Drivers'],
}

export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deep expertise across the modern technology landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
