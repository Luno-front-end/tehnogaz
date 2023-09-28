import { FC, useState } from 'react';

import Logo from './Logo';
import DropDown from './DropDown';
import Menu from './Menu';
import { useTranslation } from 'react-i18next';

const Hero: FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<boolean>(false);

    const { t } = useTranslation();

    return (
        <>
            <div className="headerDesk-container">
                <Logo />
                <DropDown setIsActive={setActiveDropdown} isActive={activeDropdown} />
            </div>
            <div className="hero-text-container">
                <h1 className="hero-text-header">{t('hero.header.header')}</h1>
                <h2 className="hero-text-subHeader">{t('hero.header.name')}</h2>
            </div>

            <Menu />
        </>
    );
};
export default Hero;
