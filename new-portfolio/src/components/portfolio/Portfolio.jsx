import React from "react";
import "./portfolio.css";
import img1 from "../../assets/code symbol.jpg";
import img2 from "../../assets/Computer servers.jpg";
import img5 from "../../assets/java.png";
import img6 from "../../assets/javascript-3.jpg";
import img7 from "../../assets/js1.png";
import ListPortfolio from "./listPortfolio";

export const Portfolio = () => {
  const portfolioContent = [
    {
      image: img1,
      github: "https://github.com/CYRIX-PLATFORMS/NBFC-management-site",
      demo: "",
      id: 1,
      title: "Team Management Site",
    },
    {
      image: img1,
      github: "https://github.com/CYRIX-PLATFORMS/true-car",
      demo: "",
      id: 2,
      title: "Car Sale Website",
    },
    {
      image: img1,
      github: "https://github.com/CYRIX-PLATFORMS/portfolioRepo",
      demo: "",
      id: 4,
      title: "Client Portfolio",
    },
    {
      image: img1,
      github: "https://github.com/CYRIX-PLATFORMS/Landing-Page-project",
      demo: "",
      id: 5,
      title: "Oblivion Design",
    },
    {
      image: img1,
      github: "https://github.com/CYRIX-PLATFORMS/HTML-CSS-JS",
      demo: "",
      id: 6,
      title: "Minimal HTML-CSS-JS ",
    },
    {
      image: img1,
      github: "https://github.com/CYRIX-PLATFORMS/SMCON-website-design",
      demo: "",
      id: 7,
      title: "Silicon Mountain Site",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My recent works</h5>
      <h2>Portfolio</h2>
      <ListPortfolio />
      <div className="container portfolio__container">
        {portfolioContent.map((content, id) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={content.image} alt=" one" className="portImage" />
              </div>
              <h3> {content.title} </h3>
              <div className="portfolio__item__cta">
                <a
                  href={content.github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={content.demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
