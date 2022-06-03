import React from "react";

const roadmapItems = [
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

const Roadmap = () => {
  return (
    <section className="roadmap">
      <div className="container__smaller">
        <h3 className="page">04. ROADMAP</h3>
        <h2 className="subtitle roadmap__title">Implementation Sheet</h2>

        <p className="text roadmap__text">
          At Lymcoin we have one focus - creating a viable data marketplace to
          start returning value to token holders in the shortest time possible.
        </p>

        <div className="roadmap__wrapper">
          <ul className="roadmap__list">
            {roadmapItems.map(({ id, descr, date, isActive }) => {
              return (
                <li
                  key={id}
                  className={
                    isActive
                      ? "roadmap__item roadmap__item_active"
                      : "roadmap__item"
                  }
                >
                  <div className="roadmap__body">
                    <div className="roadmap__descr">{descr}</div>

                    <div className="roadmap__date">{date}</div>
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

export default Roadmap;
