import { FOOTER_COLS } from '../constants/data'
import Newsletter from './Newsletter'
import FooterLinks from './FooterLinks'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer} id="contact">
      <Newsletter />
      <div className={s.divWrap}>
        <hr className={s.hr} />
        <span className={s.hand} aria-hidden="true">✋</span>
      </div>
      <div className={s.grid}>
        {FOOTER_COLS.map((col, i) => <FooterLinks key={i} col={col} />)}
      </div>
      <div className={s.bottom}>
        <span>©2023 Elementum. All rights reserved</span>
      </div>
    </footer>
  )
}
