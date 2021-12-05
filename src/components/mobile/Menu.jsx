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
  const [activeDropdown, setActiveDropdown] = useState(false);

  const onMenuActve = (e) => {
    e.preventDefault();
    setActiveMenu(!activeMenu);
  };
  const onDropdownActive = (e) => {
    e.preventDefault();
    setActiveDropdown(!activeDropdown);
  };

  return (
    <div>
      <div className="wrapper-menu-mob">
        <div onClick={onMenuActve}>
          <BurgerMenu className="burgerimg" />
        </div>

        {activeMenu && (
          <div className="overflow-menu-mob">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link" onClick={onMenuActve}>
                  <ArrowLeft className="arrowLeft" />
                  Назад
                </a>
              </li>
              <li
                className="menu-item"
                className={
                  activeDropdown ? "menu-item menu-item-active" : "menu-item"
                }
              >
                <a href="#" className="menu-link" onClick={onDropdownActive}>
                  Русский <ArrowDown className="arrowDown" />
                </a>
                {activeDropdown && (
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <a href="#" className="dropdown-link">
                        Українська
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#" className="dropdown-link">
                        English
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={
                  activeDropdown ? "menu-item menu-itemPosition" : "menu-item"
                }
              >
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
