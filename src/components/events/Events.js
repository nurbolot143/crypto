import React from "react";

const Events = () => {
  return (
    <section className="events">
      <div className="container">
        <h3 className="page">02. events</h3>

        <h2 className="subtitle events__title">Lymcoin events</h2>

        <ul className="events__list">
          <li className="events__item">
            <div className="events__data">
              <div className="events__day">16</div>
              April 2019
            </div>
            <div className="events__body">
              <h4 className="events__subtitle">Ethyl Voting</h4>
              <p className="text events__text">
                “The Ethyl Community Fund Proposal has started their voting.”
              </p>
            </div>
            <a href="/" className="btn events__btn">
              Read more
            </a>
          </li>
          <li className="events__item">
            <div className="events__data">
              <div className="events__day">30</div>
              May 2019
            </div>
            <div className="events__body">
              <h4 className="events__subtitle">Chainges Conference</h4>
              <p className="text events__text">
                Join the first world-class quality blockchain and cryptocurrency
                conference
              </p>
            </div>

            <a href="/" className="btn events__btn">
              Read more
            </a>
          </li>
          <li className="events__item">
            <div className="events__data">
              <div className="events__day">10</div>
              June 2019
            </div>
            <div className="events__body">
              <h4 className="events__subtitle">Ethyl Voting</h4>
              <p className="text events__text">
                Catapult Lymcoin (version 2.0) will come sometime this year
              </p>
            </div>
            <a href="/" className="btn events__btn">
              Read more
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Events;
