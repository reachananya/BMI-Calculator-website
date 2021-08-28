import React from "react";
import "./styles.css";

import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";

const Contact = () => {
  return (
    <main>
      <h1>Contact</h1>
      <p className="contact__p">(You can find me here)</p>
      <div className="contact__contacts">
        <a
          href="https://www.linkedin.com/in/ananya-singhal-0608/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter" className="contact__img" />
        </a>

        <a
          href="https://github.com/reachananya"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={github} alt="github" className="contact__img" />
        </a>
      </div>
    </main>
  );
};

export default Contact;
