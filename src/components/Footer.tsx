export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              ezu<span className="text-blue-500">labs</span>
            </a>
            <p className="mt-2 text-sm">AI-Powered Software Solutions</p>
          </div>

          <div className="flex gap-8">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#clients" className="hover:text-white transition-colors">Clients</a>
            <a href="#tech" className="hover:text-white transition-colors">Technology</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} ezulabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
