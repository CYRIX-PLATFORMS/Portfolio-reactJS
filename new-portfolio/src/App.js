import React from "react";
import './App.css'
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
      <Header/>
      <Navbar/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Footer/>
    </>
  );
}


export default App

