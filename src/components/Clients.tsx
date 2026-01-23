const clients = [
  {
    name: 'Instacart',
    description: 'Smart cart & retail AI',
    category: 'Retail Tech',
  },
  {
    name: 'Logitech',
    description: 'Embedded GUI',
    category: 'Consumer Electronics',
  },
  {
    name: 'Amazon',
    description: 'Fire TV launch, streaming apps',
    category: 'Enterprise Tech',
  },
  {
    name: 'Qualcomm',
    description: 'Android media platform',
    category: 'Semiconductors',
  },
]


export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've delivered solutions for Fortune 500 companies, high-growth startups, and research institutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors text-center"
            >
              <div className="text-xl font-bold text-gray-900 mb-1">{client.name}</div>
              <div className="text-sm text-gray-500 mb-2">{client.category}</div>
              <div className="text-sm text-gray-600">{client.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
