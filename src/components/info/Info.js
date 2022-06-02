import React from "react";

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__wrapper">
          <div className="info__img"></div>
          <div className="info__body">
            <h3 className="page">01. WELCOME</h3>
            <h2 className="subtitle info__title">
              Lymcoin is Digital Cash You Can Spend Anywhere
            </h2>

            <p className="text info__text">
              Use Lymcoin to make instant, private payments online or in-store
              using our secure open-source platform hosted by thousands of users
              around the world.
            </p>

            <a href="/contactUs" className="btn info__btn">
              contuct us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
