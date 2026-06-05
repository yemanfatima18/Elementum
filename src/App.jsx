import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Services     from './components/Services'
import Testimonials from './components/Testimonials'
import Footer       from './components/Footer'
import s            from './App.module.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main className={s.main}>
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
