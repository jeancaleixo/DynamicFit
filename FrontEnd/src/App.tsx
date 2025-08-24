import './App.css'
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Hero from './components/sections/Hero'
import AboutUs from './components/sections/AboutUs'
import CheckIn from './components/sections/CheckIn'
import Team from './components/sections/Team'
import Modalities from './components/sections/Modalities'
import Space from './components/sections/Space'
import Founder from './components/sections/Founder'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Founder />
      <CheckIn />
      <Team />
      <Modalities />
      <Space />
      <Footer />
    </div>
  )
}

export default App
