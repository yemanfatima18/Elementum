import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import s from './Newsletter.module.css'

export default function Newsletter() {
  const ref = useReveal(0.08)
  const [done, setDone] = useState(false)

  return (
    <div className={s.wrap}>
      {/* Coral arrow decoration */}
      <div className={s.arrows} aria-hidden="true">
        <svg width="118" height="68" viewBox="0 0 118 68" fill="none">
          <path d="M19 8 C38 8 54 34 38 50 L30 58" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M25 51 L30 58 L37 52" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M63 5 C83 5 97 30 81 46 L73 54" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M68 47 L73 54 L80 48" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* Purple moon */}
      <div className={s.moon} aria-hidden="true" />

      <div ref={ref} className="reveal">
        <h2 className={s.h}>Subscribe to<br/>our newsletter</h2>
        <p className={s.sub}>To make your stay special and even more memorable</p>
        {!done
          ? <button className={s.btn} onClick={() => setDone(true)}>Subscribe Now</button>
          : <p className={s.success}>🎉 You're subscribed!</p>
        }
      </div>
    </div>
  )
}
