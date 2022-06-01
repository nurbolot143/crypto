import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logoDark.png";
import burger from "../../assets/icons/burger.svg";
import closeBtn from "../../assets/icons/closeBtn.svg";

const navItems = [
  { id: 1, label: "home", to: "/" },
  { id: 2, label: "resources", to: "/resources" },
  { id: 3, label: "team", to: "/team" },
  { id: 4, label: "features", to: "/features" },
  { id: 5, label: "community", to: "/community" },
  { id: 6, label: "downloads", to: "/downloads" },
  { id: 7, label: "contuct us", to: "/contuctUs" },
];

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(true);

  useEffect(() => {
    burgerActive
      ? document.querySelector("body").classList.remove("body_lock")
      : document.querySelector("body").classList.add("body_lock");
  }, [burgerActive]);

  return (
    <header className={burgerActive ? "header" : "header header_active"}>
      <div className="container">
        <div className="header__wrapper">
          <div className="logo header__logo">
            <Link to="/" onClick={() => setBurgerActive(true)}>
              <img src={burgerActive ? logo : logoDark} alt="Logo" />
            </Link>
          </div>

          <div className={burgerActive ? "nav" : "nav nav_active"}>
            <ul className="nav__list">
              {navItems.map(({ id, label, to }) => {
                return (
                  <li key={id} className="nav__item">
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        "nav__link" + (!isActive ? "" : " nav__link_active")
                      }
                      onClick={() => setBurgerActive(true)}
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="header__burger"
            onClick={() => {
              setBurgerActive(!burgerActive);
            }}
          >
            <img src={burgerActive ? burger : closeBtn} alt="menuBtn" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
