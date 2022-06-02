import React from "react";

import { linux, windows } from "../../assets/icons";

const Miner = () => {
  return (
    <section className="miner">
      <div className="container__smaller">
        <div className="miner__wrapper">
          <h3 className="page">09. MINER</h3>
          <h2 className="subtitle implSheet__title">
            Compatible GPU Miner Software
          </h2>

          <p className="text implSheet__text">
            Download one of these miners for your GPU
          </p>

          <ul className="miner__list">
            <li className="miner__item">
              <a href="/">
                <div className="miner__icon">
                  <img src={windows} alt="windows" />
                </div>
                <div className="miner__descr">
                  <h4 className="miner__subtitle">Windows Lymcoin Miner</h4>
                  <span>downlaod</span>
                </div>
              </a>
            </li>
            <li className="miner__item">
              <a href="/">
                <div className="miner__icon">
                  <img src={linux} alt="linux" />
                </div>
                <div className="miner__descr">
                  <h4 className="miner__subtitle">Linux Lymcoin Miner</h4>
                  <span>downlaod</span>
                </div>
              </a>
            </li>
          </ul>

          <div className="miner__infoWrapper">
            <div className="miner__info">
              <div className="miner__count">87 278</div>
              <p className="text">Total miners</p>
            </div>
            <div className="miner__info">
              <div className="miner__count">2.82 Tsol/s</div>
              <p className="text">Total hashrate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Miner;
