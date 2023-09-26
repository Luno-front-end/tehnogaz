import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ArrowDown } from '../../Svg';

import lang from '../../../language.json';

const Header: FC = () => {
    const [activeDropdown, setActiveDropdown] = useState(false);
    const onDropdownActive = (e: React.MouseEvent) => {
        e.preventDefault();
        setActiveDropdown(!activeDropdown);
    };
    const onActiveLang = (e: React.MouseEvent) => {
        console.log(e.target);
    };
    return (
        <>
            <div className={activeDropdown ? 'menu-item menu-item-active' : 'menu-item'}>
                {lang.map(({ ru, en, ua }, i) => (
                    <div key="lang">
                        <button
                            className={activeDropdown ? 'menu-link menu-link-active' : 'menu-link'}
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
            </div>
        </>
    );
};

export default Header;
