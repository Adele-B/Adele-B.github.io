import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { IconContext } from "react-icons/lib";

function Footer() {
  return (
    <section className="footer__section">
      <IconContext.Provider value={{ color: "#3e3d3d", size: "3rem" }}>
        <div>
          <a
            className="social__icon"
            href="https://www.linkedin.com/in/adele-bampton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="social__icon"
            href="https://github.com/Adele-B"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="social__icon"
            href="mailto:adelebampton97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdMail />
          </a>
        </div>
      </IconContext.Provider>

    </section>
  )
}

export default Footer;