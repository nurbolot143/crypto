import React from "react";
import { android, apple, linux, windows } from "../../assets/icons";

const walletsItems = [
  { id: 0, link: "/", icon: android, title: "Android Lymcoin Wallet" },
  { id: 1, link: "/", icon: apple, title: "OSX Lymcoin Wallet" },
  { id: 2, link: "/", icon: windows, title: "Windows Lymcoin Wallet" },
  { id: 3, link: "/", icon: linux, title: "Linux Lymcoin Wallet" },
];

const Wallets = () => {
  return (
    <section className="wallets">
      <div className="container">
        <div className="wallets__wrapper">
          <div className="wallets__img"></div>
          <div className="wallets__body">
            <h3 className="page">06. WALLETS</h3>
            <h2 className="subtitle wallets__title">Lymcoin Wallets</h2>

            <div className="wallets__btns">
              <a href="/contactUs" className="btn wallets__btn">
                contuct us
              </a>
              <a href="/contactUs" className="btn wallets__btn">
                contuct us
              </a>
              <a href="/contactUs" className="btn wallets__btn">
                contuct us
              </a>
              <a href="/contactUs" className="btn wallets__btn">
                contuct us
              </a>
            </div>

            <ul className="wallets__list">
              {walletsItems.map(({ id, icon, title, link }) => {
                return (
                  <li key={id} className="wallets__item">
                    <a href={link}>
                      <div className="wallets__icon">
                        <img src={icon} alt={title} />
                      </div>
                      <div className="wallets__descr">
                        <h4 className="wallets__subtitle">{title}</h4>
                        <span>downlaod</span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallets;
