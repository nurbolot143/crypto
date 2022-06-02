import React from "react";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
} from "../../assets/icons";

const partnersItems = [
  { id: 0, name: "partnerName", icon: partner1 },
  { id: 1, name: "partnerName", icon: partner2 },
  { id: 2, name: "partnerName", icon: partner3 },
  { id: 3, name: "partnerName", icon: partner4 },
  { id: 4, name: "partnerName", icon: partner5 },
  { id: 5, name: "partnerName", icon: partner6 },
];

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <ul className="partners__list">
          {partnersItems.map(({ id, icon, name }) => {
            return (
              <li key={id} className="partners__item">
                <img src={icon} alt={name} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
