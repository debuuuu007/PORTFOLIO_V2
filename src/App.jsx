import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Technologies from './sections/Services'
import Contact from './sections/Contact'
import Footer from './layout/Footer'

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
