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
import { Link, NavLink } from "react-router-dom";
import leng from "../../language.json";
import GoogleMap from "./MenuComponents/Map";
import WorkTime from "./MenuComponents/WorkTime";
import Contacts from "./MenuComponents/Contacts";
import About from "./MenuComponents/About";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeMap, setActiveMap] = useState(false);
  const [activeTime, setAactiveTime] = useState(false);
  const [activeContacts, setAactiveContacts] = useState(false);
  const [activeAbout, setAbout] = useState(false);

  const onMenuActve = (e) => {
    e.preventDefault();
    setActiveMenu(!activeMenu);
  };
  const onDropdownActive = (e) => {
    e.preventDefault();
    setActiveDropdown(!activeDropdown);
  };
  const onActiveLeng = (e) => {
    console.log(e.target);
  };
  const onActiveMap = () => {
    setAbout(false);
    setAactiveContacts(false);
    setAactiveTime(false);
    setActiveMap(!activeMap);
  };
  const onActiveTime = () => {
    setAbout(false);
    setAactiveContacts(false);
    setActiveMap(false);
    setAactiveTime(!activeTime);
  };
  const onActiveContacts = () => {
    setAbout(false);
    setAactiveTime(false);
    setActiveMap(false);
    setAactiveContacts(!activeContacts);
  };
  const onActiveAbout = () => {
    setAbout(false);
    setAactiveTime(false);
    setActiveMap(false);
    setAactiveContacts(false);
    setAbout(!activeAbout);
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
                <NavLink to="/" className="menu-link" onClick={onMenuActve}>
                  <ArrowLeft className="arrowLeft" />
                  Назад
                </NavLink>
              </li>
              <li
                className={
                  activeDropdown ? "menu-item menu-item-active" : "menu-item"
                }
              >
                {leng.map(({ ru, en, ua }, i) => (
                  <div key="leng">
                    <button
                      to="/"
                      className={
                        activeDropdown
                          ? "menu-link menu-link-active"
                          : "menu-link"
                      }
                      onClick={onDropdownActive}
                    >
                      {ru} <ArrowDown className="arrowDown" />
                    </button>
                    {activeDropdown && (
                      <ul className="dropdown-list" onClick={onActiveLeng}>
                        <li className="dropdown-item">
                          <NavLink to="/ua" href="#" className="dropdown-link">
                            {ua}
                          </NavLink>
                        </li>
                        <li className="dropdown-item">
                          <NavLink to="/en" className="dropdown-link">
                            {en}
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </div>
                ))}
              </li>
              <li
                className={
                  activeDropdown ? "menu-item menu-itemPosition" : "menu-item"
                }
              >
                <button href="#" className="menu-link" onClick={onActiveMap}>
                  <Location className="location" />
                  Aдрес
                </button>
                {activeMap && <GoogleMap />}
              </li>
              <li className="menu-item">
                <button href="#" className="menu-link" onClick={onActiveTime}>
                  <Clock />
                </button>
                {activeTime && <WorkTime />}
              </li>
              <li className="menu-item">
                <button
                  href="#"
                  className="menu-link"
                  onClick={onActiveContacts}
                >
                  <Phone className="phone" />
                  <Email className="email" />
                </button>
                {activeContacts && <Contacts />}
              </li>
              <li className="menu-item">
                <button href="#" className="menu-link" onClick={onActiveAbout}>
                  <Information className="information" />
                  Информация о нас
                </button>
                {activeAbout && <About />}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
