export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>&copy; {new Date().getFullYear()} ezulabs</span>
          <span className="text-ice-400 font-medium">ezu<span className="text-gray-400">labs</span></span>
        </div>
      </div>
    </footer>
  )
}
