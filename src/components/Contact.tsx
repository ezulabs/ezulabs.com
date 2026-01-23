export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to transform your ideas into reality? We're here to help with your next project.
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <a
                  href="mailto:contact@ezulabs.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  contact@ezulabs.com
                </a>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Remote / US Time Zones</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Can Help With</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'AI Integration',
                  'Web Apps',
                  'Mobile Apps',
                  'Backend Systems',
                  'Technical Consulting',
                  'MVP Development',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
