import { useReveal } from '../hooks/useReveal'
import { SERVICES } from '../constants/data'
import s from './Services.module.css'

export default function Services() {
  const ref = useReveal(0.1)

  return (
    <section className={s.services} id="services">
      {/* Coral wave top-right decoration */}
      <div className={s.waveDeco} aria-hidden="true">
        <svg viewBox="0 0 700 78" fill="none" width="100%">
          <path d="M700 15 C600 15 550 62 450 38 C350 15 300 58 200 38 C100 20 50 46 0 38"
            stroke="var(--coral)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <div ref={ref} className={`${s.inner} reveal`}>
        {/* Heading */}
        <div className={s.headingBlock}>
          <h2 className={s.heading}>
            What we <span className={s.canPill}>can</span><br />
            <span className={s.offerU}>offer</span> you!
          </h2>
          {/* Floating circle deco */}
          <div className={s.floatCirc}>
            <img src="/images/person3.png" alt="" loading="lazy" />
          </div>
        </div>

        {/* Service rows */}
        <div className={s.list}>
          {SERVICES.map((svc, i) => (
            <a key={i} href="#" className={s.row}>
              <span className={s.cat}>{svc.category}</span>
              <div className={s.rowMain}>
                <span className={s.title}>{svc.title}</span>
                <span className={s.arrow}>
                  <svg width="38" height="15" viewBox="0 0 38 15" fill="none">
                    <path d="M0 7.5 H34" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
                    <path d="M28 2 L34 7.5 L28 13" stroke="#111" strokeWidth="1.6"
                          strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
