import { LOGOS } from '../companyLogos'

type Job = { who: string; what: string; logo?: string; before?: string; stamp?: string }

const past: Job[] = [
  {
    who: 'Caper AI, now Instacart',
    logo: 'instacart',
    before: 'Caper AI, now',
    what: 'An early engineer through the $350M acquisition: smart-cart Android, backend and hardware',
  },
  {
    who: 'Amazon',
    logo: 'amazon',
    what: 'Key tech lead for Fire TV and Fire TV Stick, Fire App Builder, and YouTube, Netflix and HBO on Fire TV',
    stamp: '2 US patents',
  },
  { who: 'Logitech', logo: 'logitech', what: 'Embedded UI, Qt and Linux drivers' },
  {
    who: 'Ubicom, now Qualcomm',
    logo: 'qualcomm',
    before: 'Ubicom, now',
    what: 'The Android and Linux media platform from scratch',
  },
  { who: 'Cabot UK', what: 'Digital TV middleware and the DVB stack' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap split">
        <div>
          <h2>Who's at the bench</h2>
          <p>
            ezulabs is a small engineering company in the EU. For eighteen years we've built software that runs close
            to the hardware: firmware, drivers, compilers, media and devices.
          </p>
          <p>
            Now we build our own products: MXF Studio, the MXF SDK and the wireless probe.
          </p>
        </div>
        <dl className="ledger" aria-label="Before ezulabs">
          {past.map(({ who, what, logo, before, stamp }) => (
            <div key={who}>
              <dt>
                {before && <span className="before" aria-hidden="true">{before}</span>}
                {logo ? (
                  <>
                    <span className="logo-box" aria-hidden="true" dangerouslySetInnerHTML={{ __html: LOGOS[logo] }} />
                    <span className="sr">{who}</span>
                  </>
                ) : (
                  who
                )}
                {stamp && <span className="patent">{stamp}</span>}
              </dt>
              <dd>{what}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
