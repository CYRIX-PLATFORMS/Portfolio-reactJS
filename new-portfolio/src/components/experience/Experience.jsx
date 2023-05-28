import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";
import { BsPatchCheckFill } from "react-icons/bs";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills gathered through out</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3> 
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"></BsPatchCheckFill>
            </article>
          </div>
        </div>
        <div className="experience__backend"></div>
        <ListExperiences />
      </div>
    </section>
  );
};
export default Experience;
