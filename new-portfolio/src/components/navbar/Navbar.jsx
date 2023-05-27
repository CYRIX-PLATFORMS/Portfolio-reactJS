import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="navigation">
      <a
        href="#Top"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <h2>Home </h2><AiOutlineHome />
        
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <h2>About </h2><AiOutlineUser />
        
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <h2>Experience </h2><BiBook />
        
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#service")}
        className={activeNav === "#service" ? "active" : ""}
      >
        <h2>Services </h2><RiServiceLine />
        
      </a>
      <a
        href="#testimonial"
        onClick={() => setActiveNav("#testimonial")}
        className={activeNav === "#testimonial" ? "active" : ""}
      >
        <h2>Testimonials </h2><FaThumbsUp />
        
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <h2>Contact </h2><BiMessageSquareDetail />
        
      </a>
    </nav>
  );
};

export default Navbar;
