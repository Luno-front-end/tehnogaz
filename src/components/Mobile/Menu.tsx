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
import { useTranslation } from 'react-i18next';
import DropDown from '../Desktop/Hero/DropDown';

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const [activeDropdown, setActiveDropdown] = useState<boolean>(false);
    const [activeMap, setActiveMap] = useState<boolean>(false);
    const [activeTime, setActiveTime] = useState<boolean>(false);
    const [activeContacts, setActiveContacts] = useState<boolean>(false);
    const [activeAbout, setActiveAbout] = useState<boolean>(false);

    const { t } = useTranslation();

    const onMenuActive = (e: React.MouseEvent) => {
        e.preventDefault();
        setActiveMenu(!activeMenu);
    };

    const onActiveCategory = (category: 'about' | 'contacts' | 'time' | 'map') => {
        setActiveAbout(category === 'about' ? true : false);
        setActiveContacts(category === 'contacts' ? true : false);
        setActiveTime(category === 'time' ? true : false);
        setActiveMap(category === 'map' ? true : false);
    };

    return (
        <div>
            <div className="wrapper-menu-mob">
                <div onClick={onMenuActive}>
                    <BurgerMenu className="burgerImg" />
                </div>

                {activeMenu && (
                    <div className="overflow-menu-mob">
                        <ul className="menu-list">
                            <li className="menu-item">
                                <NavLink to="/" className="menu-link" onClick={onMenuActive}>
                                    <ArrowLeft className="arrowLeft" />
                                    {t('mobileInfoCard.menu.backBtn')}
                                </NavLink>
                            </li>
                            <li
                                className={
                                    activeDropdown ? 'menu-item menu-item-active' : 'menu-item'
                                }
                            >
                                <DropDown
                                    isActive={activeDropdown}
                                    setIsActive={setActiveDropdown}
                                />
                            </li>
                            <li
                                className={
                                    activeDropdown ? 'menu-item menu-itemPosition' : 'menu-item'
                                }
                            >
                                <button
                                    className="menu-link"
                                    onClick={() => onActiveCategory('map')}
                                >
                                    <Location className="location" />
                                    {t('footer.address.name')}
                                </button>
                                {activeMap && <GoogleMap />}
                            </li>
                            <li className="menu-item">
                                <button
                                    className="menu-link"
                                    onClick={() => onActiveCategory('time')}
                                >
                                    <Clock />
                                </button>
                                {activeTime && <WorkTime />}
                            </li>
                            <li className="menu-item">
                                <button
                                    className="menu-link"
                                    onClick={() => onActiveCategory('contacts')}
                                >
                                    <Phone className="phone" />
                                    <Email className="email" />
                                </button>
                                {activeContacts && <Contacts />}
                            </li>
                            <li className="menu-item">
                                <button
                                    className="menu-link"
                                    onClick={() => onActiveCategory('about')}
                                >
                                    <Information className="information" />
                                    {t('mobileInfoCard.menu.aboutUs')}
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
