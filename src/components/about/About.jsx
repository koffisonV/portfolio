import React from "react";
import "./About.css";
import { IoMdSchool } from "react-icons/io";
import { FaGamepad } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__cards">
          <article className="about__card">
            <IoMdSchool className="about__icon" />
            <h5>College</h5>
            <small>Bachelors</small>
          </article>
          <article className="about__card">
            <FaGamepad className="about__icon" />
            <h5>Gaming</h5>
            <small>Console</small>
          </article>
          <article className="about__card">
            <MdWork className="about__icon" />
            <h5>Work</h5>
            <small>Freelance</small>
          </article>
        </div>
        <p>
          My name is Koffison Voumadi, and I recently graduated with a
          Bachelor's in Computer Science & Information Security from John Jay
          College. With hands-on experience as a Mobile and Web Developer, along
          with intensive training in Full Stack Development and Cybersecurity, I
          am eager to contribute to a company's growth. My diverse skillset
          makes me adaptable across various roles.<br/>In my free time, I enjoy
          gaming, spending time with family and friends, and improving my
          skills. I also freelance in graphic design and video editing.
        </p>
      </div>
    </section>
  );
};

export default about;
