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
            <summary>When does MXF Studio come out?</summary>
            <div>
              <p>
                It's coming soon to the App Store, for iPhone and iPad. Leave your email on{' '}
                <a href="/mxf-studio/#signup">its page</a> and we'll tell you when it's out.
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
            <summary>Can I buy the wireless probe?</summary>
            <div>
              <p>
                Not yet: it's in development. Leave your email on <a href="/probe/#signup">its page</a> and we'll tell
                you when it's ready.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
