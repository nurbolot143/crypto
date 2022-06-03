import React from "react";

import {
  sociol1,
  sociol2,
  sociol3,
  sociol4,
  sociol5,
} from "../../assets/icons";

const sociolItems = [
  { id: 0, icon: sociol1, link: "/" },
  { id: 1, icon: sociol2, link: "/" },
  { id: 2, icon: sociol3, link: "/" },
  { id: 3, icon: sociol4, link: "/" },
  { id: 4, icon: sociol5, link: "/" },
];

const SociolList = () => {
  return (
    <ul className="sociol__list">
      {sociolItems.map(({ id, icon, link }) => {
        return (
          <li key={id} className="sociol__item">
            <a href={link}>
              <img src={icon} alt={link} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SociolList;
