import React from "react";

const Promo = () => {
  return (
    <section className="promo" id="promo">
      <div className="container">
        <div className="promo__body">
          <h1 className="title promo__title">
            Secure and Anonymous Cryptocurrency
          </h1>

          <p className="promo__text">
            Lymcoin is a decentralized, hybrid blockhain that is fully
            open-source.
          </p>

          <a href="/contactUs" className="btn promo__btn">
            contuct us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promo;
