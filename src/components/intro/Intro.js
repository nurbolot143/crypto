import React from "react";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__wrapper">
          <div className="intro__img"></div>
          <div className="intro__body">
            <h3 className="page">01. WELCOME</h3>
            <h2 className="subtitle intro__title">
              Lymcoin is Digital Cash You Can Spend Anywhere
            </h2>

            <p className="text intro__text">
              Use Lymcoin to make instant, private payments online or in-store
              using our secure open-source platform hosted by thousands of users
              around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
