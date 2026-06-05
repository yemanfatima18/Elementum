import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import { TESTIMONIALS, TEST_AVS_LEFT, TEST_AVS_RIGHT } from '../constants/data'
import s from './Testimonials.module.css'

export default function Testimonials() {
  const ref = useReveal(0.1)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className={s.section} id="testimonials">
      <div ref={ref} className="reveal">
        <h2 className={s.heading}>
          What our customer<br />
          says{' '}
          <span className={s.aboutU}>About Us</span>
        </h2>

        <div className={s.layout}>
          {/* Left floating avatars */}
          {TEST_AVS_LEFT.map((av, i) => (
            <div key={`l${i}`} className={s.fav}
              style={{ width: av.size, height: av.size, top: av.top, left: av.left, animationDelay: av.delay }}>
              <img src={av.src} alt="" loading="lazy" />
            </div>
          ))}

          {/* Quote card */}
          <div className={s.card}>
            <span className={s.qOpen}>&ldquo;</span>
            <p className={s.qText} key={active}>{TESTIMONIALS[active].text}</p>
            <span className={s.qClose}>&rdquo;</span>
            <div className={s.dots}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`${s.dot} ${i === active ? s.dotActive : ''}`}
                  aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
          </div>

          {/* Right floating avatars */}
          {TEST_AVS_RIGHT.map((av, i) => (
            <div key={`r${i}`} className={s.fav}
              style={{ width: av.size, height: av.size, top: av.top, right: av.right, animationDelay: av.delay }}>
              <img src={av.src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
