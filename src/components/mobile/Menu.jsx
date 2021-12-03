import {
  BurgerMenu,
  ArrowLeft,
  ArrowDown,
  Clock,
  Email,
  Information,
  Location,
  Phone,
} from "../Svg";
import { useState } from "react";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const onMenuActve = (e) => {
    e.preventDefault();
    setActiveMenu(!activeMenu);
  };

  return (
    <div>
      <div className="wrapper-menu" onClick={onMenuActve}>
        <BurgerMenu />
        {activeMenu && (
          <ul className="menu-list">
            <li className="menu-item">
              <a href="#" className="menu-link" onClick={onMenuActve}>
                <ArrowLeft className="arrowLeft" />
                Назад
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Русский <ArrowDown className="arrowDown" />
              </a>
              {/* <ul>
              <li>Русский</li>
              <li>Українська</li>
              <li>English</li>
            </ul> */}
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <Location className="location" />
                Aдрес
              </a>
            </li>

            <li className="menu-item">
              <a href="#" className="menu-link">
                <Clock />
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <Phone className="phone" />
                <Email className="email" />
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <Information className="information" />
                Информация о нас
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
