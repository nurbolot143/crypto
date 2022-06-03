import React from "react";
import {
  benefitsIcon1,
  benefitsIcon2,
  benefitsIcon3,
  benefitsIcon4,
} from "../../assets/icons";

const benefitsItems = [
  {
    id: 0,
    icon: benefitsIcon1,
    title: "Lymcoin Benefits",
    descr: "Use Lymcoin to make instant",
  },
  {
    id: 1,
    icon: benefitsIcon2,
    title: "Lymcoin Benefits",
    descr: "Use Lymcoin to make instant",
  },
  {
    id: 2,
    icon: benefitsIcon3,
    title: "Lymcoin Benefits",
    descr: "Use Lymcoin to make instant",
  },
  {
    id: 3,
    icon: benefitsIcon4,
    title: "Lymcoin Benefits",
    descr: "Use Lymcoin to make instant",
  },
];

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="container__smaller">
        <h3 className="page">02. BENEFITS</h3>

        <h2 className="subtitle benefits__title">Lymcoin Benefits</h2>

        <ul className="benefits__list">
          {benefitsItems.map(({ id, icon, title, descr }, idx) => {
            return (
              <li key={`${id}_${idx}`} className="benefits__item">
                <div className="benefits__count">
                  {idx > 9 ? idx + 1 : `0${idx + 1}`}.
                </div>
                <div className="benefits__body">
                  <img src={icon} alt={title} />
                  <h4 className="benefits__subtitle">{title}</h4>
                  <p className="text benefits__text">{descr}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
