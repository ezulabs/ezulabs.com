const stack = {
  Systems: 'C, C++, Rust, ARM Assembly, Linux Drivers, Compiler Design',
  Application: 'TypeScript, Kotlin, Java, Swift, Python, Lua, React, Next.js',
  'AI / ML': 'MLX, LLM Orchestration, Tool-Call Parsing, MCP, OpenCV',
  Mobile: 'Android, Jetpack Compose, iOS, Tauri',
  Infrastructure: 'AWS, GCP, Docker, Kubernetes, PostgreSQL, gRPC, FastAPI',
  Embedded: 'Linux, ARM TrustZone, BLE, IoT, Device Drivers, FFmpeg',
}

export default function TechStack() {
  return (
    <section id="tech" className="py-16 border-t border-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
          Stack
        </h2>
        <div className="space-y-4">
          {Object.entries(stack).map(([category, techs]) => (
            <div key={category} className="flex items-baseline gap-3">
              <span className="text-gray-400 text-sm w-28 shrink-0">{category}</span>
              <span className="text-gray-500 text-sm">{techs}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
