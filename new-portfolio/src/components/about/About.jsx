import React from "react";
import "./about.css";
import moi from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me__image">
            <img src={moi} alt="Nkwi Cyril " />
          </div>
        </div> */}
        <div className="about__me__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>1 in Cameroon</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I am currently a student in the University of Buea studying Computer Engineering in the Faculty
            of Engineering and Technology and an aspiring Full Stack developer. I have expertise in Web Programming, debugging and software testing,
            project reporting and presentation. I am really passionate about grooming and developing new skills 
            as time goes by in my career. 
            I have dealt with programming languages such as C, Cpp and Java. And equally, I can confidently say
            I have expertise in HTML, CSS and Javascript and this portfolio was created using the React library 
            which utilises the JSX syntax. 
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
