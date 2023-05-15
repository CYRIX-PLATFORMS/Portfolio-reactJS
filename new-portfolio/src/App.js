import React from "react";
import './index.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Footer from './components/footer/Footer'




export const App = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}

export default App; //Always export the component as default
