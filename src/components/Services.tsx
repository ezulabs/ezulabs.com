const services = [
  {
    title: 'AI & LLM Orchestration',
    detail: 'Local inference, tool-call parsing, MCP servers, skill routing',
  },
  {
    title: 'Full-Stack Products',
    detail: 'React, TypeScript, FastAPI, PostgreSQL, Tauri desktop apps',
  },
  {
    title: 'Android & Mobile',
    detail: 'Jetpack Compose, camera pipelines, hardware integration',
  },
  {
    title: 'Backend & Infrastructure',
    detail: 'gRPC, Docker, Kubernetes, AWS, GCP',
  },
  {
    title: 'Systems & Embedded',
    detail: 'Linux drivers, firmware, compilers, ARM, IoT',
  },
  {
    title: 'Developer Tooling',
    detail: 'MCP servers, debugging tools, OCR pipelines, code analysis',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 border-t border-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
          What we do
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {services.map((s, i) => (
            <div key={i}>
              <span className="text-white font-medium">{s.title}</span>
              <span className="text-gray-500 ml-2 text-sm">— {s.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
