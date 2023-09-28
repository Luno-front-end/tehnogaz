import { FC } from 'react';
import infoCard from '../../../infoCardPopUpUA.json';
import { Cloud } from '../../Svg';
import { useTranslation } from 'react-i18next';

interface ICardPopUpProps {
    active: boolean;
    ind: string | null;
    openCloseCard: () => void;
}

const CardPopUp: FC<ICardPopUpProps> = ({ active, ind, openCloseCard }) => {
    const numberType = Number(ind);

    const { t } = useTranslation();

    const variantRenderCloud = () => {
        if (infoCard[numberType]?.valueTwo) {
            return (
                <div className="value-popup-card ">
                    <Cloud className="oneCloudPopup" />
                    <span className="doubleTexOne">{infoCard[numberType]?.value}</span>{' '}
                    {infoCard[numberType]?.valueTwo && (
                        <span className="plus-double-popup">+ </span>
                    )}
                    <span className="doubleTexTwo">
                        {infoCard[numberType]?.valueTwo}
                        <span className="number-popup-card-two">
                            {infoCard[numberType]?.number}
                        </span>
                    </span>
                    <Cloud className="twoCloudPopup" />
                </div>
            );
        }
        if ((ind as string) === '2' || (ind as string) === '3' || (ind as string) === '4') {
            return (
                <p className="value-popup-card">
                    <Cloud className="cloud-popup-new" />
                    {infoCard[numberType]?.value}
                    <span className="number-popup-card">{infoCard[numberType]?.number}</span>
                </p>
            );
        } else {
            return (
                <p className="value-popup-card">
                    <Cloud className="cloud-popup" />
                    {infoCard[numberType]?.value}
                    <span className="number-popup-card">{infoCard[numberType]?.number}</span>
                </p>
            );
        }
    };
    return (
        <div
            className={active ? 'overflow-popup-card active-popup-card' : 'overflow-popup-card'}
            onClick={openCloseCard}
        >
            <div className="wrapper-popup-card">
                <h2 className="head-popup-card">
                    {t(`sectionOne.slider.slides.${numberType}.name`)}
                </h2>
                <p className="text-popup-card">
                    {t(`sectionOne.slider.slides.${numberType}.text`)}
                </p>
                <div className="doubleValue">{variantRenderCloud()}</div>
            </div>
        </div>
    );
};

export default CardPopUp;
