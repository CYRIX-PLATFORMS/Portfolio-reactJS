import React from "react";
import "./services.css";
import ListServices from "./listServices";
import { FaCheckCircle } from "react-icons/fa";

export const Services = () => {
  return (
    <section id="services">
      <h5>Here are a list of services I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* <ListServices /> */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className="service__list-icon"></FaCheckCircle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                est, corrupti inventore error veritatis exercitationem eaque
                doloremque? Quos nobis dolorem facilis! Consequuntur corrupti
                atque, dicta quas ipsam distinctio laudantium optio?
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className="service__list-icon"></FaCheckCircle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                est, corrupti inventore error veritatis exercitationem eaque
                doloremque? Quos nobis dolorem facilis! Consequuntur corrupti
                atque, dicta quas ipsam distinctio laudantium optio?
              </p>
            </li>
            <li>
              <FaCheckCircle className="service__list-icon"></FaCheckCircle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                est, corrupti inventore error veritatis exercitationem eaque
                doloremque? Quos nobis dolorem facilis! Consequuntur corrupti
                atque, dicta quas ipsam distinctio laudantium optio?
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Social Media Management</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className="service__list-icon"></FaCheckCircle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                est, corrupti inventore error veritatis exercitationem eaque
                doloremque? Quos nobis dolorem facilis! Consequuntur corrupti
                atque, dicta quas ipsam distinctio laudantium optio?
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;
