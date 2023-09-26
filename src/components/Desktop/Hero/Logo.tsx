import { FC } from 'react';

import { LogoSvg } from '../../Svg';

const Header: FC = () => {
    return (
        <>
            <div className="logo-container">
                <a href="#">
                    <LogoSvg className="logo" />
                    {/* <img src={logo} alt=""  /> */}
                </a>
            </div>
        </>
    );
};

export default Header;
