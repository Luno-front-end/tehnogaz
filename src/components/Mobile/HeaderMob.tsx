import { FC } from 'react';

import Logo from './Logo';
import Menu from './Menu';
import Card from './Card/Card';

const HeroMob: FC = () => {
    return (
        <>
            <div className="wrapper-nav">
                <Logo />
                <Menu />
            </div>
            <Card />
        </>
    );
};

export default HeroMob;
