import { useState } from "react"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from './Components/Programs/Programs'
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"

function App() {
  const [playState,setPlayState] = useState(false);
  return (
    <>
    <Navbar />
    <Hero />
    <div className="container">
      <Title  subtitle='OUR PROGRAM' title='What We Offer'/>
      <Programs />

      <About setPlayState={setPlayState}/>
      <Title  subtitle='gallery' title='Campus Photos'/>

      <Campus />

      <Title  subtitle='testimonials' title='What Student Says'/>
      <Testimonials />

      <Title  subtitle='contact us' title='Get in Touch'/>
      <Contact />

      <Footer />
    </div>

    <VideoPlayer playState={playState} setPlayState={setPlayState} />
    
    </>
  )
}

export default App
