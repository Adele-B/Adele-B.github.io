import React, { useEffect, useState } from 'react';

const profileImg = require('../assets/profileImg.jpg');

function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const textList = ["and I'm a Junior Software Engineer", "and I'm a gamer", "and I'm a learner", "and I'm a traveller"];

  useEffect(() => {
    const id = setTimeout(() => setTextIndex((textIndex + 1) % textList.length), 2500);
    return () => {
      clearInterval(id);
    };
  }, [textIndex]);

  return (
    <main>
      <section>
        <div className="container">
          <div className="home__text">
            <h1 className="intro">Hi, I&apos;m Adele...</h1>
            <p className="cycle__text">{textList[textIndex]}</p>
          </div>
        </div>
        <div className="image__container">
          <div className="profile__image">
            <img className="circle__image" src={profileImg} alt="Myself against a wall of pink flowers" />
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
