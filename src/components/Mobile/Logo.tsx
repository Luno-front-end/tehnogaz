import { FC } from 'react';
import { LogoSvg } from '../Svg';

const Logo: FC = () => {
    return (
        <div className="logo-container">
            <a href="#">
                <LogoSvg className="logo" />
            </a>
        </div>
    );
};

export default Logo;
