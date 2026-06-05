import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../constants/data'
import s from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={s.inner}>
        <a href="#home" className={s.logo}>Elementum</a>
        <ul className={s.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}><a href={href} className={s.link}>{label}</a></li>
          ))}
        </ul>
        <button
          className={`${s.burger} ${open ? s.open : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className={s.mobile}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className={s.mLink} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
