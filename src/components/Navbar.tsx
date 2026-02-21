export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-950/90 backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <a href="#" className="text-lg font-bold text-ice-400">
            ezu<span className="text-gray-300">labs</span>
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-gray-500 hover:text-gray-300 transition-colors">Services</a>
            <a href="#clients" className="text-gray-500 hover:text-gray-300 transition-colors">Clients</a>
            <a href="#tech" className="text-gray-500 hover:text-gray-300 transition-colors">Stack</a>
            <a href="#contact" className="text-gray-500 hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
