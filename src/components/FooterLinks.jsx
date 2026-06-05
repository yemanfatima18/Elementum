import s from './FooterLinks.module.css'

export default function FooterLinks({ col }) {
  return (
    <div className={s.col}>
      <h4 className={s.title}>{col.title}</h4>
      {col.isContact ? (
        <address className={s.contact}>
          <p style={{ whiteSpace: 'pre-line' }}>{col.address}</p>
          <p>{col.phone}</p>
          <p>{col.email}</p>
        </address>
      ) : (
        <ul className={s.links}>
          {col.links.map(l => (
            <li key={l}><a href="#" className={s.link}>{l}</a></li>
          ))}
        </ul>
      )}
    </div>
  )
}
