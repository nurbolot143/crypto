import React from "react";
import {
  glbalNetwork_icon1,
  glbalNetwork_icon2,
  glbalNetwork_icon3,
} from "../../assets/icons";

const GlbalNetwork = () => {
  return (
    <section className="glbalNetwork">
      <div className="container__smaller">
        <div className="glbalNetwork__wrapper">
          <h3 className="page">05. NETWORK</h3>
          <h2 className="subtitle implSheet__title">Growing Global Network</h2>

          <p className="text implSheet__text">
            Lymcoin is rapidly gaining popularity among crypto community. Lots
            of real companies and exchanges have adopted our coin already. There
            is much more to come. Stay tuned.
          </p>
          <div className="glbalNetwork__infoWrapper">
            <div className="glbalNetwork__info">
              <div className="glbalNetwork__count">
                50<span>+</span>
              </div>
              <p className="text">Exchanges</p>
            </div>
            <div className="glbalNetwork__info">
              <div className="glbalNetwork__count">
                180<span>+</span>
              </div>
              <p className="text">Companies</p>
            </div>
          </div>
          <ul className="glbalNetwork__list">
            <li className="glbalNetwork__item">
              <img src={glbalNetwork_icon1} alt="glbalNetwork_icon" />
            </li>
            <li className="glbalNetwork__item">
              <img src={glbalNetwork_icon2} alt="glbalNetwork_icon" />
            </li>
            <li className="glbalNetwork__item">
              <img src={glbalNetwork_icon3} alt="glbalNetwork_icon" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GlbalNetwork;
