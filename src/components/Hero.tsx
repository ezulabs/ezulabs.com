import Px from './Px'

/** The opening: a cutting mat with our three products lying on it, each labelled with tape. */
const things = [
  { cls: 'studio', href: '/mxf-studio/', art: '', name: 'MXF Studio', tape: '', note: 'make any device, just by talking' },
  { cls: 'sdk', href: '/mxf-sdk/', art: 'board', name: 'MXF SDK', tape: 'white', note: 'Kotlin, on the bare chip' },
  { cls: 'probe', href: '/probe/', art: 'probe', name: 'Wireless Probe', tape: 'pink', note: 'flash & debug over Wi-Fi' },
]

/** MXF Studio: the phone in front, the devices it can build fanned behind it like a hand of cards (as on its page). */
function Deck() {
  return (
    <span className="deck" aria-hidden="true">
      {['microbit', 'handheld-house', 'keeper', 'board-tall'].map((art, i) => (
        <span key={art} className={`dcard d${i + 1}`}>
          <Px name={art} />
        </span>
      ))}
      <span className="phone">
        <Px name="photo" />
      </span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="mat" aria-label="Our products, on the bench">
      <Px name="ruler" />
      <div className="wrap bench">
        <div className="intro">
          <h1 className="rise">
            Tools for programming <span className="mark">small boards</span>.
          </h1>
          <p className="lede rise">
            We're ezulabs. We make an app that builds devices from a photo, a Kotlin compiler for bare chips, and a
            debug probe that needs no cable.
          </p>
        </div>
        {things.map((t) => (
          <a key={t.href} className={`thing ${t.cls}`} href={t.href}>
            <span className="obj">
              {t.cls === 'studio' ? <Deck /> : <Px name={t.art} />}
            </span>
            <span className={`tape ${t.tape}`}>{t.name}</span>
            <span className="scrawl">{t.note}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
