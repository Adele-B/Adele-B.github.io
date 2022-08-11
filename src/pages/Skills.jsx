import React from "react";

function Skills() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">Skills</h1>
          <p className="text--restrict">Here are some of the skills I have learned and acquired since becoming a Software Engineer</p>
          <p className="text--restrict">This list does not include the skills and languages I can currently working on but I am always learning so this list is sure to grow!</p>
        </div>
        <div className="skills__container">
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <div className="skills__text">
              <p className="text">React.js - My most proficient language</p>
            </div>
          </div>
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <div className="skills__text">
              <p className="text">JavaScript - This is the first language I learned</p>
            </div>
          </div>
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
            <div className="skills__text">
              <p className="text">Jest - I use jest and React Testing Library to test my apps</p>
            </div>
          </div>
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <div className="skills__text">
              <p className="text">Git - To commit, push and pull repositories</p>
            </div>
          </div>
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <div className="skills__text">
              <p className="text">GitHub - Where I host my projects</p>
            </div>
          </div>
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            <div className="skills__text">
              <p className="text">Sass - To organise styles neatly</p>
            </div>
          </div>
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <div className="skills__text">
              <p className="text">CSS - The first stlying I learned</p>
            </div>
          </div>
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <div className="skills__text">
              <p className="text">HTML - Building the skeleton of apps in JS</p>
            </div>
          </div>
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" />
            <div className="skills__text">
              <p className="text">R - Conducting sentiment analysis for my dissertation </p>
            </div>
          </div>
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <div className="skills__text">
              <p className="text">Python - Creating a Reddit web scraper</p>
            </div>
          </div>
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" />
            <div className="skills__text">
              <p className="text">Babel - To complile my React applications</p>
            </div>
          </div>
          <div className="icon__container">
            <img className="icon__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" />
            <div className="skills__text">
              <p className="text">EsLint - To keep code consistency</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Skills;