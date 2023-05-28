import React from "react";
import "./header.css";
import "./CTA";
import CTA from "./CTA";
import me from "../../assets/me.jpg";
import HeaderSocial from "./HeaderSocial";
import { BiArrowToBottom } from "react-icons/bi";
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nkwi Cyril</h1>
        <h5 className="text-light">An Aspiring Software Engineer </h5>
        <HeaderSocial />
        <div className="my_image">
          <img src={me} alt="NkwiCyrilAkinimbom" />
        </div>
        <CTA />
        <a href="#contact" className="scroll__down">
          <BiArrowToBottom></BiArrowToBottom>
        </a>
      </div>
    </header>
  );
};
export default Header;
