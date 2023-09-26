import { FC } from 'react';

import Logo from './Logo';
import DropDown from './DropDown';
import Menu from './Menu';

const Hero: FC = () => {
    return (
        <>
            <div className="headerDesk-container">
                <Logo />
                <DropDown />
            </div>
            <div className="hero-text-container">
                <h1 className="hero-text-header">Природные газы</h1>
                <h2 className="hero-text-subHeader">Техногазторг</h2>
            </div>

            <Menu />
        </>
    );
};
export default Hero;
