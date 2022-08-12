import React from 'react';

const weatherIcon = require('../assets/weather_icon.png');
const meetingIcon = require('../assets/meet_icon.png');
const recipeIcon = require('../assets/recipe_icon.png');

function Projects() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">Projects</h1>
          <p className="text--restrict">
            These are some of the first projects I built.
            The Meetup app and the Recipe app were follow along tutorials with solo coding sections to build upon what was taught.
          </p>
          <p className="text--restrict">
            I plan on spending more time creating my own projects now that I am further along in my career.
            Therefore, I am more confident in my ability to build apps without as much guidance.
          </p>
        </div>
        <div className="box__container">
          <div className="box">
            <h2 className="heading">Weather App</h2>
            <a target="_blank" href="https://weather-app-adele.netlify.app" rel="noreferrer">
              <img className="project_image" src={weatherIcon} alt="Sun slightly behind a cloud" />
            </a>
          </div>

          <div className="box">
            <h2 className="heading">Meetup App</h2>
            <a target="_blank" href="https://nextjs-meetup-app-nine.vercel.app" rel="noreferrer">
              <img className="project_image" src={meetingIcon} alt="People inside phone icons shaking hands" />
            </a>
          </div>

          <div className="box">
            <h2 className="heading">Recipe App</h2>
            <a target="_blank" href="http://forkify-adele.netlify.app" rel="noreferrer">
              <img className="project_image" src={recipeIcon} alt="Knife and fork" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
