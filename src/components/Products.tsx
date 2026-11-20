const products = [
  {
    name: 'MXF Studio',
    href: '/mxf-studio/',
    text: 'Show it your board and parts, say what you want, and it builds the device. Games and real Kotlin code too. For iPhone and iPad, ages 9+.',
    status: 'On the App Store',
    stamp: 'green',
  },
  {
    name: 'MXF SDK',
    href: '/mxf-sdk/',
    text: 'Write Kotlin for microcontrollers. It compiles to native code on the bare chip: no JVM, no operating system. Pico 2, Blue Pill, micro:bit and more.',
    status: 'Early access',
    stamp: 'green',
  },
  {
    name: 'Wireless Probe',
    href: '/probe/',
    text: "Flash and debug Cortex-M boards over Wi-Fi, or over Bluetooth when there's no network. Works with probe-rs, and programs AVR chips too.",
    status: 'In development',
    stamp: 'gray',
  },
]

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="wrap">
        <header>
          <h2>On the bench</h2>
        </header>
        <ol className="log">
          {products.map((p) => (
            <li key={p.href}>
              <a href={p.href}>{p.name}</a>
              <p>{p.text}</p>
              <span className={`stamp ${p.stamp}`}>{p.status}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
