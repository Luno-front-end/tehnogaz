import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Clock,
  Information,
  Location,
  Phone,
  WorkMF,
  WorkSat,
  Email,
} from "../../Svg";
import map from "../../../img/map.png";

const Menu = () => {
  const [openWorkItem, setOpenWorkItem] = useState(false);
  const [openContactsItem, setOpenContactsItem] = useState(false);
  const [openMapItem, setOpenMapItem] = useState(false);
  const onOpenWorkItem = () => {
    setOpenMapItem(false);
    setOpenContactsItem(false);
    setOpenWorkItem(!openWorkItem);
  };
  const onOpenContactsItem = () => {
    setOpenMapItem(false);
    setOpenWorkItem(false);
    setOpenContactsItem(!openContactsItem);
  };
  const onOpenMapItem = () => {
    setOpenContactsItem(false);
    setOpenWorkItem(false);
    setOpenMapItem(!openMapItem);
  };
  return (
    <div className="container-nav">
      <ul className="nav-list-tab">
        <li className={openWorkItem ? "nav-item-tab active" : "nav-item-tab"}>
          <ul
            onClick={onOpenWorkItem}
            className={
              openWorkItem
                ? "absolute-info-link-list active"
                : "absolute-info-link-list"
            }
          >
            <li className="absolute-info-link-item">
              <WorkMF className="workMF-iconTab" />
              <div className="wrapper-menu-work">
                <p className="days-menu-work-desk">Пн-Пт</p>
                <p className="hour-menu-work-desk">8:00-17:00</p>
              </div>
            </li>
            <li className="absolute-info-link-item">
              <WorkSat className="workSat-iconTab" />
              <div className="wrapper-menu-work">
                <p className="days-menu-work-desk">Cуббота </p>
                <p className="hour-menu-work-desk">9:00-15:00</p>
              </div>
            </li>
          </ul>
          <Link to="/" className="link-item-nav" onClick={onOpenWorkItem}>
            <div className="wrapper-content-link-menu">
              <Clock className="icon-nav" />
              <span className="general-link-text">
                Рабочие часы <span className="sub-text-link">Узнать</span>
              </span>
            </div>
          </Link>
        </li>
        <li className="nav-item-tab">
          <a href="#AuboutUs" className="link-item-nav">
            <div className="wrapper-content-link-menu">
              <Information className="icon-nav" />
              <span className="general-link-text">
                Инфо о нас <span className="sub-text-link">Узнать</span>
              </span>
            </div>
          </a>
        </li>
        <li
          className={openContactsItem ? "nav-item-tab active" : "nav-item-tab"}
        >
          <ul
            onClick={onOpenContactsItem}
            className={
              openContactsItem
                ? "absolute-info-link-list active"
                : "absolute-info-link-list"
            }
          >
            <li className="absolute-info-link-item">
              <Phone className="contactsPhone-iconTab" />
              <ul className="wrapper-menu-contacts-tab">
                <li className="contact-menu-desk">
                  <a className="communications-menu" href="tel:0978180966">
                    +38 (097) 818-09-66
                  </a>
                </li>
                <li className="contact-menu-desk">
                  <a className="communications-menu" href="tel:0953614833">
                    +38 (095) 361-48-33
                  </a>
                  <p className="name-menu-contact-desk">Номер телефона</p>
                </li>
              </ul>
            </li>
            <li className="absolute-info-link-item">
              <Email className="contactsEmail-iconTab" />
              <ul className="wrapper-menu-contacts-tab">
                <li className="contact-menu-desk">
                  <a
                    className="communications-menu"
                    href="mailto:tehnogaztorg@ukr.net"
                  >
                    tehnogaztorg@ukr.net
                  </a>
                  <p className="name-menu-contact-desk">Почтовый адрес</p>
                </li>
              </ul>
            </li>
          </ul>
          <Link to="/" className="link-item-nav" onClick={onOpenContactsItem}>
            <div className="wrapper-content-link-menu">
              <Phone className="icon-nav" />
              <span className="general-link-text">
                Контакты <span className="sub-text-link">Узнать</span>
              </span>
            </div>
          </Link>
        </li>
        <li className={openMapItem ? "nav-item-tab active" : "nav-item-tab"}>
          <div
            onClick={onOpenMapItem}
            className={
              openMapItem
                ? "absolute-info-link-list active"
                : "absolute-info-link-list"
            }
          >
            <div className="absolute-info-link-item">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F,+15,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4285397,30.6674087,16z/data=!4m2!3m1!1s0x40d4c520ca7a29af:0x247965ef8f5b96d4"
                rel="noreferrer"
              >
                <img
                  src={map}
                  alt=""
                  width="140"
                  height="140"
                  className="map-tab-img"
                />
              </a>
            </div>
          </div>
          <Link to="/" className="link-item-nav" onClick={onOpenMapItem}>
            <div className="wrapper-content-link-menu">
              <Location className="icon-nav" />
              <span className="general-link-text">
                Адрес <span className="sub-text-link">Узнать</span>
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
