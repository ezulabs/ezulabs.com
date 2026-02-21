export default function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Engineering practice.<br />
          <span className="text-ice-400">Systems to AI.</span>
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Independent engineering — from embedded firmware and compilers
          to LLM orchestration and full-stack products.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <span>18+ years shipping</span>
          <span className="text-gray-700">·</span>
          <span>2 US patents</span>
          <span className="text-gray-700">·</span>
          <span>EU-based / 4hr US overlap</span>
        </div>
      </div>
    </section>
  )
}
