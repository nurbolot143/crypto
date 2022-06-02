import React from "react";
import {
  globalNetwork1,
  globalNetwork2,
  globalNetwork3,
} from "../../assets/icons";

const GlobalNetwork = () => {
  return (
    <section className="globalNetwork">
      <div className="container__smaller">
        <div className="globalNetwork__wrapper">
          <h3 className="page">05. NETWORK</h3>
          <h2 className="subtitle implSheet__title">Growing Global Network</h2>

          <p className="text implSheet__text">
            Lymcoin is rapidly gaining popularity among crypto community. Lots
            of real companies and exchanges have adopted our coin already. There
            is much more to come. Stay tuned.
          </p>
          <div className="globalNetwork__infoWrapper">
            <div className="globalNetwork__info">
              <div className="globalNetwork__count">
                50<span>+</span>
              </div>
              <p className="text">Exchanges</p>
            </div>
            <div className="globalNetwork__info">
              <div className="globalNetwork__count">
                180<span>+</span>
              </div>
              <p className="text">Companies</p>
            </div>
          </div>
          <ul className="globalNetwork__list">
            <li className="globalNetwork__item">
              <img src={globalNetwork1} alt="globalNetwork" />
            </li>
            <li className="globalNetwork__item">
              <img src={globalNetwork2} alt="globalNetwork" />
            </li>
            <li className="globalNetwork__item">
              <img src={globalNetwork3} alt="globalNetwork" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
