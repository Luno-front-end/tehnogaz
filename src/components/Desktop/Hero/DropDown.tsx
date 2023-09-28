import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import { ArrowDown } from '../../Svg';
import s from './hero.module.scss';
import cn from 'classnames';

import { useTranslation } from 'react-i18next';

interface IDropDownProps {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

const locales: any = {
    en: { title: 'English' },
    uk: { title: 'Українська' },
    ru: { title: 'Русский' },
};

const DropDown: FC<IDropDownProps> = ({ setIsActive, isActive }) => {
    const { i18n } = useTranslation();
    const [activeDropdown, setActiveDropdown] = useState(false);
    const [currentLang, setCurrentLang] = useState<number>(1);

    const onDropdownActive = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsActive(!isActive);
    };
    const onActiveLang = (e: React.MouseEvent, i: number) => {
        e.preventDefault();
        setCurrentLang(i);
        setActiveDropdown(!activeDropdown);
        setIsActive(!isActive);
    };

    return (
        <>
            <div className={isActive ? 'menu-item menu-item-active' : 'menu-item'}>
                <div>
                    <button
                        className={isActive ? 'menu-link menu-link-active' : 'menu-link'}
                        onClick={onDropdownActive}
                    >
                        {locales[Object.keys(locales)[currentLang]].title}
                        <ArrowDown className="arrowDown" />
                    </button>
                </div>
                <ul className="dropdown-list">
                    {Object.keys(locales).map((locale: any, i: number) => (
                        <>
                            {isActive && (
                                <li
                                    className="dropdown-item"
                                    onClick={() => i18n.changeLanguage(locale)}
                                >
                                    {currentLang !== i && (
                                        <button
                                            type="button"
                                            className={cn('dropdown-link', s.dropdownLink2)}
                                            onClick={(e) => onActiveLang(e, i)}
                                        >
                                            {locales[locale].title}
                                        </button>
                                    )}
                                </li>
                            )}
                        </>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default DropDown;
