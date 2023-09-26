import {
    BurgerMenu,
    ArrowLeft,
    ArrowDown,
    Clock,
    Email,
    Information,
    Location,
    Phone,
} from '../Svg';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import lang from '../../language.json';
import GoogleMap from './MenuComponents/Map';
import WorkTime from './MenuComponents/WorkTime';
import Contacts from './MenuComponents/Contacts';
import About from './MenuComponents/About';

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const [activeDropdown, setActiveDropdown] = useState<boolean>(false);
    const [activeMap, setActiveMap] = useState<boolean>(false);
    const [activeTime, setActiveTime] = useState<boolean>(false);
    const [activeContacts, setActiveContacts] = useState<boolean>(false);
    const [activeAbout, setAbout] = useState<boolean>(false);

    const onMenuActive = (e: React.MouseEvent) => {
        e.preventDefault();
        setActiveMenu(!activeMenu);
    };
    const onDropdownActive = (e: React.MouseEvent) => {
        e.preventDefault();
        setActiveDropdown(!activeDropdown);
    };
    const onActiveLang = (e: React.MouseEvent) => {
        console.log(e.target);
    };
    const onActiveMap = () => {
        setAbout(false);
        setActiveContacts(false);
        setActiveTime(false);
        setActiveMap(!activeMap);
    };
    const onActiveTime = () => {
        setAbout(false);
        setActiveContacts(false);
        setActiveMap(false);
        setActiveTime(!activeTime);
    };
    const onActiveContacts = () => {
        setAbout(false);
        setActiveTime(false);
        setActiveMap(false);
        setActiveContacts(!activeContacts);
    };
    const onActiveAbout = () => {
        setAbout(false);
        setActiveTime(false);
        setActiveMap(false);
        setActiveContacts(false);
        setAbout(!activeAbout);
    };

    return (
        <div>
            <div className="wrapper-menu-mob">
                <div onClick={onMenuActive}>
                    <BurgerMenu className="burgerimg" />
                </div>

                {activeMenu && (
                    <div className="overflow-menu-mob">
                        <ul className="menu-list">
                            <li className="menu-item">
                                <NavLink to="/" className="menu-link" onClick={onMenuActive}>
                                    <ArrowLeft className="arrowLeft" />
                                    Назад
                                </NavLink>
                            </li>
                            <li
                                className={
                                    activeDropdown ? 'menu-item menu-item-active' : 'menu-item'
                                }
                            >
                                {lang.map(({ ru, en, ua }, i) => (
                                    <div key="lang">
                                        <button
                                            // to="/"
                                            className={
                                                activeDropdown
                                                    ? 'menu-link menu-link-active'
                                                    : 'menu-link'
                                            }
                                            onClick={onDropdownActive}
                                        >
                                            {ru} <ArrowDown className="arrowDown" />
                                        </button>
                                        {activeDropdown && (
                                            <ul className="dropdown-list" onClick={onActiveLang}>
                                                <li className="dropdown-item">
                                                    <NavLink to="/ua" className="dropdown-link">
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
                                    activeDropdown ? 'menu-item menu-itemPosition' : 'menu-item'
                                }
                            >
                                <button className="menu-link" onClick={onActiveMap}>
                                    <Location className="location" />
                                    Aдрес
                                </button>
                                {activeMap && <GoogleMap />}
                            </li>
                            <li className="menu-item">
                                <button className="menu-link" onClick={onActiveTime}>
                                    <Clock />
                                </button>
                                {activeTime && <WorkTime />}
                            </li>
                            <li className="menu-item">
                                <button className="menu-link" onClick={onActiveContacts}>
                                    <Phone className="phone" />
                                    <Email className="email" />
                                </button>
                                {activeContacts && <Contacts />}
                            </li>
                            <li className="menu-item">
                                <button className="menu-link" onClick={onActiveAbout}>
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
