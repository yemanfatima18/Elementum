import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

export default function About() {
  const ref = useReveal(0.1)

  return (
    <section className={styles.about} id="studio">
      <div ref={ref} className={`${styles.pinkBorder} reveal`}>

        {/* Ga label badge */}
        

        <div className={styles.grid}>
          <LeftColumn />
          <RightColumn />
        </div>

        {/* Coral wavy line below the box */}
        <WaveLine />
      </div>
    </section>
  )
}

/* ── Left column: heading + body + image ── */
function LeftColumn() {
  return (
    <div className={styles.left}>
      <h2 className={styles.leftHeading}>
        <span className="ul-yellow">Tomorrow</span> should<br />
        be better than <span className="hl-green">today</span>
      </h2>

      <p className={styles.body}>
        We are a team of strategists, designers communicators, researchers.
        Togeather, we belive that progress only happens when you refuse
        to play things safe.
      </p>

      <a href="#" className="read-link">
        Read more <span className="line" />
      </a>

      {/* Circular image with red triangle */}
      <div className={styles.imageWrap}>
        <div className={styles.triBottomLeft} aria-hidden="true" />
        <div className={`${styles.circleImg} circ-img`}>
          <img src="/images/person9.png" width="350" height="250" alt="Team working" loading="lazy" />
        </div>
        <div className={styles.triBottomLeft} aria-hidden="true" />
      </div>
    </div>
  )
}

/* ── Right column: image + text block ── */
function RightColumn() {
  return (
    <div className={styles.right}>
      {/* Purple square decoration */}
      {/* <div className={styles.squareDeco} aria-hidden="true" /> */}

      {/* Circular meeting image with red triangle */}
      <div className={styles.topImageWrap}>
        <div className={styles.triTopRight} aria-hidden="true" />
        <div className={`${styles.circleImgTop} circ-img`}>
          <img src="/images/meeting.png" style={{ marginTop: '0px' }} height="225" alt="Business meeting" loading="lazy" />
        </div>
      </div>

      {/* See how we can help you progress */}
      <div className={styles.rightText}>
        <h3 className={styles.rightHeading}>
          <span className="hl-green-sm">See</span> how we can<br />
          help you <span className="ul-yellow ul-yellow-thin">progress</span>
        </h3>

        <p className={styles.body}>
          We add a layer of fearless insights and action that allows change
          makers to accelerate their progress in areas such as brand, design
          digital, comms and social research.
        </p>
        

        <a href="#" className="read-link">
          Read more <span className="line" />
        </a>
      </div>
    </div>
  )
}

/* ── Coral wavy SVG line ── */
// function WaveLine() {
//   return (
//     <div className={styles.waveLine} aria-hidden="true">
//       <svg viewBox="0 0 900 68" fill="none" width="100%" preserveAspectRatio="none">
//         <path
//           d="M0 34 C110 7 220 60 330 34 C440 7 550 60 660 34 C770 7 860 27 900 21"
//           stroke="#ff6b6b"
//           strokeWidth="2.2"
//           strokeLinecap="round"
//         />
//       </svg>
//     </div>
//   )
// }


function WaveLine() {
  return (
    <div className={styles.waveLine} aria-hidden="true">
      <svg
        viewBox="0 0 900 300"
        fill="none"
        width="100%"
        preserveAspectRatio="none"
      >
        <path
          d="M0 180
             C120 80 240 280 360 180
             C480 80 600 280 720 120
             C800 20 860 20 900 40"
          stroke="#ff6b6b"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}