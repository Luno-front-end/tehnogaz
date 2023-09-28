import React, { FC, useState } from 'react';

import { ArrowRight, Cloud, Bubble } from '../../Svg';
import cylindersOne from '../../../img/cylindersOne.png';
import cylindersTwo from '../../../img/cylindersTwo.png';
import cylindersThree from '../../../img/cylindersThree.png';
import cylindersFour from '../../../img/cylindersFour.png';
import cylindersFive from '../../../img/cylindersFive.png';
import infoCard from '../../../aboutProduct.json';

import CardPopUp from './CardPopUp';
import { useTranslation } from 'react-i18next';
import { useRenderInfoCardM } from '../../../hooks/useRenderInfoCardM';

const arrayImg = [
    <img src={cylindersOne} alt={cylindersOne} className="cylinders-card" />,
    <img src={cylindersTwo} alt={cylindersTwo} className="cylinders-card" />,
    <img src={cylindersThree} alt={cylindersThree} className="cylinders-card" />,
    <img src={cylindersFour} alt={cylindersFour} className="cylinders-card" />,
    <img src={cylindersFive} alt={cylindersFive} className="cylinders-card" />,
];

const Card: FC = () => {
    const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
    const [indPopup, setIndPopup] = useState<string | null>(null);

    const { t } = useTranslation();

    const { renderIconsInCard, renderIconsOnCard } = useRenderInfoCardM();

    const onOpenCard = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const activeLi = document.querySelectorAll('.mobile-card-item');
        const activeCard = document.querySelectorAll('.wrapper-card_active');

        const eTarget = e.target as HTMLElement;

        const li = eTarget.closest('li');

        if (li === null) return;
        if (li.classList.value !== 'mobile-card-item') return;

        activeLi.forEach((_li, i) => activeLi[i].classList.remove('active-card'));
        activeCard.forEach((_card, i) => activeCard[i].classList.remove('wrapper-card_active'));

        eTarget.classList.add('active-card');

        if (eTarget.children[1] === undefined) return;

        eTarget.children[1].classList.add('wrapper-card_active');

        if (eTarget.id === 'undefined') return;

        setIndPopup(eTarget.id);
    };
    const onActivePopUp = () => {
        setIsActivePopup(!isActivePopup);
    };

    return (
        <>
            <ul className="mobile-card-list">
                {arrayImg.map((img, i) => (
                    <li className="mobile-card-item" onClick={onOpenCard} id={`${i}`}>
                        <div className="firs-info-card">
                            <div>
                                <h2 className="header-card">
                                    {t(`sectionOne.slider.slides.${i}.name`)}
                                </h2>
                            </div>
                            <div className="head-box">
                                <p className="value-card">{renderIconsOnCard[i]}</p>
                                <ArrowRight className="arrow-right" />
                            </div>
                        </div>
                        <div className="wrapper-card" onClick={onActivePopUp}>
                            {renderIconsInCard[i]}
                            {img}
                            <ul className="value-position-list">
                                <li className="value-position-item">
                                    <p className="value-position">
                                        40/10 {t('sectionOne.slider.button.capacity.cName')}
                                        <span className="designation-position">
                                            {t(`sectionOne.slider.button.capacity.cText`)}
                                        </span>
                                    </p>
                                </li>
                                <li className="value-position-item">
                                    <p className="value-position">
                                        85/21 ~ {t(`sectionOne.slider.button.weight.wName`)}
                                        <span className="designation-position">
                                            {t(`mobileInfoCard.aboutProduct.weight.wText`)}
                                        </span>
                                    </p>
                                </li>
                            </ul>

                            <div>
                                <h2 className="position-name">
                                    {t(`sectionOne.slider.slides.${i}.name`).toUpperCase()} (
                                    {t(`sectionOne.slider.slides.${i}.type`).toUpperCase()})
                                </h2>
                                <div className="wrapper-info-position">
                                    <p className="info-contacts-position">
                                        {t('mobileInfoCard.infoContact.firstText')}
                                        <br /> {t('mobileInfoCard.infoContact.lastText')}
                                    </p>
                                    <p className="price-position">₴{infoCard[0].price}</p>
                                </div>
                                <ul className="wrapper-contact-position_list">
                                    <li className="wrapper-contact-item">
                                        <a href="tel:0978180966" className="link-position">
                                            +38 (097) 818-09-66
                                        </a>
                                    </li>
                                    <li className="wrapper-contact-item">
                                        <a href="tel:0953614833" className="link-position">
                                            +38 (095) 361-48-33
                                        </a>
                                    </li>
                                </ul>
                                <div className="container-btn-info">
                                    <button className="btn-info-position">
                                        {t('mobileInfoCard.more')}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="hr-card"></div>
                    </li>
                ))}
            </ul>
            <CardPopUp
                active={isActivePopup}
                ind={indPopup}
                openCloseCard={() => onActivePopUp()}
            />
        </>
    );
};

export default Card;
