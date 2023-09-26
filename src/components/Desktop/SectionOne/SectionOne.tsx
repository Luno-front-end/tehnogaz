import { FC } from 'react';
import Slider from './Slider';

const SectionOne: FC = () => {
    return (
        <>
            <div className="container-sec-text">
                <h2 className="header-secOne">заказ только по телефону</h2>
                <h3 className="subHeader-secOne">Цены договорные</h3>
            </div>
            <Slider />
        </>
    );
};

export default SectionOne;
