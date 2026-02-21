const clients = [
  { name: 'Amazon', note: 'Fire TV Android platform, DRM, media' },
  { name: 'Instacart', note: 'Smart cart Android, backend, microservices' },
  { name: 'Logitech', note: 'Embedded UI, Qt, Linux drivers' },
  { name: 'Qualcomm', note: 'Android & Linux media platform' },
  { name: 'Duke University', note: 'OCR pipeline, analytics dashboard' },
  { name: 'Grapes Studio', note: 'AI chatbot · OCV / GitLab Founder\'s Fund' },
  { name: 'Cabot Communications UK', note: 'Digital TV middleware, DVB stack' },
]

export default function Clients() {
  return (
    <section id="clients" className="py-16 border-t border-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
          Shipped for
        </h2>
        <div className="space-y-3">
          {clients.map((c) => (
            <div key={c.name} className="flex items-baseline gap-3">
              <span className="text-white font-medium">{c.name}</span>
              <span className="text-gray-600 text-sm">{c.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
