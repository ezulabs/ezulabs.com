import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">
              ezu<span className="text-gray-800">labs</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#clients" className="text-gray-600 hover:text-blue-600 transition-colors">
              Clients
            </a>
            <a href="#tech" className="text-gray-600 hover:text-blue-600 transition-colors">
              Technology
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <a href="#services" className="block py-2 text-gray-600 hover:text-blue-600">Services</a>
            <a href="#clients" className="block py-2 text-gray-600 hover:text-blue-600">Clients</a>
            <a href="#tech" className="block py-2 text-gray-600 hover:text-blue-600">Technology</a>
            <a href="#contact" className="block py-2 text-blue-600 font-medium">Contact Us</a>
          </div>
        )}
      </div>
    </nav>
  )
}
