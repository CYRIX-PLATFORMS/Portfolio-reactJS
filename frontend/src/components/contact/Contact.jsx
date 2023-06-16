import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bb669nb",
        "template_w1ytrov",
        form.current,
        "BKe4NRI_MxGwXXBqT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5 className="h5">Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>akinimbomnkwi@gmail.com</h5>
            <a href="akinimbomnkwi@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option__icon" />
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            <a href="https://www.linkedin.com/in/akinimbom-nkwi-a42394244/">
              Tap me on LinkedIn
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>WhatsApp</h4>
            <h5>Direct message</h5>
            <a href="https://web.whatsapp.com/send?phone=+237651085550">
              Whatsapp me
            </a>
          </article>

          <article className="contact__option">
            <BsTwitter className="contact__option__icon" />
            <h4>Twitter</h4>
            <h5>Profile</h5>
            <a href="https://twitter.com/NkwiCyril">Send me a tweet</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="full name"
            required
          />
          <input type="email" name="email" placeholder="your email" required />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Type your message here"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" id="button">
            Send message <BsSend color="white" fontSize={15}></BsSend>
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;