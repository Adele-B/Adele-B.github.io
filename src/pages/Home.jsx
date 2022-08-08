import React, { useEffect, useState } from "react";

function Home() {
  const [textIndex, setTextIndex] = useState(0)
  const textList = ["and I'm a Junior Software Engineer", "and I'm a gamer", "and I'm a learner", "and I'm a traveller"]

  useEffect(() => {
    const id = setTimeout(() => setTextIndex((textIndex + 1) % textList.length), 2500);
    return () => {
      clearInterval(id)
    }
  }, [textIndex])

  return (
    <main>
      <section >
        <div className="home__section">
          <div className="home__text">
            <h1 className="heading">Hi, I'm Adele...</h1>
            <p className="cycle__text">{textList[textIndex]}</p>
          </div>
        </div>
        <div className="image__container">
          <div className="profile__image">
            <img className="circle__image" src={require("../assets/profileImg.jpg")} alt="Photo of myself" />
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home;