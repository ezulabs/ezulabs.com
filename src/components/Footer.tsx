import { SOCIAL } from '../social'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <nav aria-label="Products">
          <a href="/mxf-studio/">MXF Studio</a>
          <a href="/mxf-sdk/">MXF SDK</a>
          <a href="/probe/">Wireless Probe</a>
        </nav>
        <nav className="social" aria-label="ezulabs elsewhere">
          {SOCIAL.map((s) => (
            <a key={s.name} href={s.href} rel="me" aria-label={`ezulabs on ${s.name}`} title={s.name}>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </nav>
        <p>© {new Date().getFullYear()} ezulabs.</p>
        <p className="tm">
          This page counts visits with PostHog. The product pages use no analytics. The company logos are trademarks of
          their owners and show where we worked before ezulabs.
        </p>
      </div>
    </footer>
  )
}
