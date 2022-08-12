import React, { useState } from 'react';

function Skills() {
  const [isClicked, setIsClicked] = useState(false);

  const icons = [
    {
      id: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      text: 'React.js - My most proficient language',
    },
    {
      id: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      text: 'JavaScript - This is the first language I learned',
    },
    {
      id: 'Jest',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      text: 'I use jest and React Testing Library to test my apps',
    },
    {
      id: 'Git',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      text: 'To commit, push and pull repositories',
    },
    {
      id: 'GitHub',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      text: 'Where I host my projects',
    },
    {
      id: 'Sass',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      text: 'To organise styles neatly',
    },
    {
      id: 'Css',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      text: 'The first stlying I learned',
    },
    {
      id: 'Html',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      text: 'Building the skeleton of apps in JS',
    },
    {
      id: 'R',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
      text: 'Conducting sentiment analysis for my dissertation',
    },
    {
      id: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      text: 'Creating a Reddit web scraper',
    },
    {
      id: 'Babel',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg',
      text: 'To complile my React applications',
    },
    {
      id: 'EsLint',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
      text: 'To keep code consistency',
    },
  ];

  function handleClick() {
    setIsClicked((prev) => !prev);
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">Skills</h1>
          <p className="text--restrict">Here are some of the skills I have learned and acquired since becoming a Software Engineer</p>
          <p className="text--restrict">This list does not include the skills and languages I can currently working on but I am always learning so this list is sure to grow!</p>
        </div>
        <div className="btn__container">
          <p className="text">Hover over an icon or click below to reveal text</p>
          <button className="show__text__btn" type="button" onClick={handleClick}>{isClicked ? 'Hide text' : 'Show text'}</button>
        </div>
        <div className="skills__container">
          {icons.map((icon) => {
            return (
              <div className="icon__container" key={icon.id}>
                <img alt={`${icon.image} Icon`} className={isClicked ? 'icon__image--clicked' : 'icon__image'} src={icon.image} />
                <p className={`text ${isClicked ? 'skills__text--clicked' : 'skills__text'}`}>{icon.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Skills;
