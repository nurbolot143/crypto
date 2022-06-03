import React from "react";
import Slider from "react-slick/lib/slider";

import { team1, team2, team3 } from "../../assets/images";

const teamList = [
  { id: 0, img: team1, name: "John Nelson", position: "Account Manager" },
  { id: 1, img: team2, name: "John Nelson", position: "Account Manager" },
  { id: 2, img: team3, name: "John Nelson", position: "Account Manager" },
  { id: 2, img: team3, name: "John Nelson", position: "Account Manager" },
];

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {},
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  return (
    <section className="team">
      <div className="container__smaller">
        <div className="team__top">
          <h3 className="page">07. TEAM</h3>
          <h2 className="subtitle team__title">Team & Advisors</h2>

          <p className="text team__text">
            With a team of top technology and finance professionals, the
            nonprofit Lymcoin expands access to low-cost financial services to
            fight poverty and maximize individual potential.
          </p>
        </div>

        <Slider {...settings}>
          {teamList.map(({ id, img, name, position }) => {
            return (
              <li key={id} className="team__item">
                <div className="team__body">
                  <div className="team__avatar">
                    <img src={img} alt={name} />
                  </div>
                  <h4 className="team__name">{name}</h4>
                  <p className="text team__positoin">{position}</p>
                </div>
              </li>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
