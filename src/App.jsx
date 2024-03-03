import { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import './App.css'
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import Appointment from './components/appointment';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Hero />
      <About/>
      <Services/>
      <Appointment />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
