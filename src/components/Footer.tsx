export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <nav aria-label="Products">
          <a href="/mxf-studio/">MXF Studio</a>
          <a href="/mxf-sdk/">MXF SDK</a>
          <a href="/probe/">Wireless Probe</a>
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
