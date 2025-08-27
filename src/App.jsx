import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from './components/Hero/Hero.jsx'
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx"
import About from "./components/About/About.jsx";
import Campus from "./components/Campus/Campus.jsx";
import Testimonials from "./components/testi/testi.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";


function App(){
  return(
    <div>
    <Navbar/>
      <section id="home">
        <Hero/>
      </section>
      
      <section id="program">
        <Title t1='OUR PROGRAM' t2='What We Offer'/>
        <Programs/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="campus">
        <Title t1='GALLERY' t2='Campus Photos'/>
        <Campus/>
      </section>
      <section id="testimonials">
        <Title t1='TESTIMONIALS' t2='What Student Says'/>
        <Testimonials/>
      </section>
      <section id="contact">
        <Title t1='Contact us' t2='Get in touch'/>
        <Contact/>
      </section>
      
    
    <Footer/>
    </div>
  )
}
export default App 