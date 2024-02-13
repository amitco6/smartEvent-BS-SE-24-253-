import React, { useState } from "react";
import "./HeaderStyles.css";
import { MenuItems } from "./MenuItems";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">smartEvent</h1>
      <div className="menu-icons" onClick={handleMenuClick}>
        <i className={menuActive ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a className={item.cName} href={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

