import { HERO_AVATARS } from '../constants/data'
import s from './Hero.module.css'

export default function Hero() {
  return (
    <section className={s.hero} id="home">
      {/* Swirl decoration — left edge */}
      <div className={s.swirl} aria-hidden="true">
        <svg width="72" height="155" viewBox="0 0 72 155" fill="none">
          <path d="M52 8 C18 18 0 52 16 72 C32 92 62 74 54 104 C46 134 18 146 8 150"
            stroke="#111" strokeWidth="2.3" strokeLinecap="round"/>
          <path d="M8 20 C26 16 44 28 36 48 C28 68 10 68 18 88"
            stroke="var(--coral)" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ── Main heading — NO pink border box ── */}
      <div className={s.headingWrap}>
        <h1 className={s.heading}>
          {/* Line 1 */}
          <span className={s.line}>
            The{' '}
            <span className={s.thinkers}>thinkers</span>
            {' '}and
          </span>
          {/* Line 2 — "changing" gets pink highlight blob */}
          <span className={s.line}>
            doers were{' '}
            <span className={s.changingWrap}>
              <span className={s.changingBlob} aria-hidden="true" />
              <span className={s.changingText}>changing</span>
            </span>
          </span>
          {/* Line 3 */}
          <span className={s.line}>
            the{' '}
            <span className={s.statusPill}>status</span>
            {' '}Quo with
          </span>
        </h1>
      </div>

      {/* Sub-text */}
      <p className={s.sub}>
        We are a team of strategists, designers communicators, researchers. Togeather,<br />
        we belive that progress only hghappens when you refuse to play things safe.
      </p>

      {/* ── Scattered avatar circles ── */}
      <div className={s.avatarRow}>
        {HERO_AVATARS.map((av, i) => (
          <div
            key={i}
            className={s.avatar}
            style={{
              width:          av.w,
              height:         av.h,
              left:           av.left,
              top:            av.top,
              // animationDelay: `${av.delay}, ${av.delay}`,
            }}
          >
            <img src={av.src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
