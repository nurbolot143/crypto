import React from "react";

const implSheetItems = [
  { id: 0, descr: "", date: "November 2017", isActive: true },
  {
    id: 1,
    descr:
      "Development of different types of smart contracts (CPA, CPL, CPC, CPS, CPI)",
    date: "January 2018",
    isActive: true,
  },
  {
    id: 2,
    descr: "Tracking services for different smart contract types",
    date: "March 2018",
    isActive: true,
  },
  {
    id: 3,
    descr: "Release of a decentralized app for merchants / affiliates",
    date: "March 2019",
    isActive: true,
  },
  {
    id: 4,
    descr: "Release of a decentralized app for affiliate networks",
    date: "May 2020",
    isActive: false,
  },
  {
    id: 5,
    descr:
      "Launch of the world's first decentralized affiliate network based on the HOQU platform",
    date: "September 2020",
    isActive: false,
  },
];

const ImplSheet = () => {
  return (
    <section className="implSheet">
      <div className="container__smaller">
        <h3 className="page">04. ROADMAP</h3>
        <h2 className="subtitle implSheet__title">Implementation Sheet</h2>

        <p className="text implSheet__text">
          At Lymcoin we have one focus - creating a viable data marketplace to
          start returning value to token holders in the shortest time possible.
        </p>

        <div className="implSheet__wrapper">
          <ul className="implSheet__list">
            {implSheetItems.map(({ id, descr, date, isActive }) => {
              return (
                <li
                  key={id}
                  className={
                    isActive
                      ? "implSheet__item implSheet__item_active"
                      : "implSheet__item"
                  }
                >
                  <div className="implSheet__body">
                    <div className="implSheet__descr">{descr}</div>

                    <div className="implSheet__date">{date}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ImplSheet;
