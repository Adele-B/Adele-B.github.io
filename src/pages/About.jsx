import React from "react";

function About() {
  return (
    <main>
      <section className="about__section">
        <div className="about__me">
          <h1 className="about__title">About me</h1>
          <p className="about__text">
            Hi, I'm Adele and I'm a Software Engineer. I graduated in 2021 with a First Class Degree in Psychology.
          </p>
          <p className="about__text">
            Since then, I have taught myself to code using Udemy, Codecademy and a Course run by Code First Girls.
            I specialise in Frontend development using JavaScript and React with a focus on testing and accessibility.
          </p>
        </div>
        <div className="about__text__container">
          <h2 className="about__heading">Interests</h2>
          <p className="about__text">
            I love being outside in nature, whether it be walks in the woods, strolls along the beach or hikes abroad!
          </p>
          <p className="about__text">
            I have always had an interest in gaming for as long as I can remember. I play anything from FarCry and Assassin's Creed to Old School Runescape.
          </p>
          <p className="about__text">
            Aminals have always been a love of mine. I even studied animal behaviour during my education. I could spend all day at the zoo as it's definitely a happy place for me.
          </p>
          <p className="about__text">
            Tech has become a big part of my life as our lives have started to revolve around it more. I love being about to solve problems and produce interesting projects!
          </p>
        </div>
        <div className="about__text__container">
          <h2 className="about__heading">Random facts</h2>
          <ul>
            <li className="about__text--list">I make my own clay earrings</li>
            <li className="about__text--list">I can almost quote the entirety of Hot Fuzz</li>
            <li className="about__text--list">I have a very long list of random animal facts</li>
            <li className="about__text--list">My favourite place to travel is Greece</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default About;