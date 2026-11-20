export default function Contact() {
  return (
    <section id="contact" className="support">
      <div className="wrap">
        <aside>
          <h2>Get in touch</h2>
          <p>
            Questions about our products, early access to the SDK, or a board you'd like supported? Write to{' '}
            <a className="mail" href="mailto:contact@ezulabs.com">
              contact@ezulabs.com
            </a>
            .
          </p>
        </aside>
        <div className="faq">
          <details open>
            <summary>Where do I get MXF Studio?</summary>
            <div>
              <p>
                It's free on the{' '}
                <a href="https://apps.apple.com/app/id6834536520" rel="noopener">
                  App Store
                </a>
                , for iPhone and iPad with iOS 26 or later.
              </p>
            </div>
          </details>
          <details>
            <summary>How do I get the MXF SDK?</summary>
            <div>
              <p>
                It's in early access: leave your email on <a href="/mxf-sdk/#signup">its page</a>. It's free for
                personal use; companies need a commercial licence.
              </p>
            </div>
          </details>
          <details>
            <summary>How do I get the wireless probe?</summary>
            <div>
              <p>
                It's in early access: leave your email on <a href="/probe/#signup">its page</a> and we'll write to you
                about getting one.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
