import React from "react";

function Experience() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">Experience</h1>
          <p className="text">
            During my time at university, I decided that a career in Psychology was no longer what I wanted.
            I began teaching myself to code and found a passion for solving complex puzzles and creating things from scratch.
            In my 3rd year on university, I applied for a Code First Girls course and it gave me the confidence to persue a career in tech, so
            I taught myself to code and I absolutely love what I do and I can't wait to learn more!
          </p>
        </div>
        <div className="experience__text__container">
          <div className="experience__box">
            <h2 className="experience__heading">Viable Data</h2>
            <p className="text--italic">Nov 2021 - Present</p>
            <p className="experience__text">
              Collaborating with the disign team to build frontend web application following GDS standards.
            </p>
            <p className="experience__text">
              Working cross-functionally in a Scrum/Kanban environment
            </p>
            <p className="experience__text">
              Connecting frontend to APIs and using Jest and React Testing Library to create functioning and well tested applications
            </p>
          </div>

          <div className="experience__box">
            <h2 className="experience__heading">Self Taught</h2>
            <p className="text--italic">May 2021 - Nov 2021</p>
            <p className="experience__text">
              Using guided courses on Udemy, Codecademy and youtube to learn frontend development using React and JavaScript
            </p>
            <p className="experience__text">
              Created many small guided portfolio projects to further my learning and development.
            </p>
          </div>

          <div className="experience__box">
            <h2 className="experience__heading">Research Assistant</h2>
            <p className="text--italic">Feb 2020 - Nov 2020</p>
            <p className="experience__text">
              Building a Data Scraper using Python to scrape Reddit using key terms.
            </p>
            <p className="experience__text">
              Researched, collected and segmented data according to different variables to be used in further research on Public Health 
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Experience;
