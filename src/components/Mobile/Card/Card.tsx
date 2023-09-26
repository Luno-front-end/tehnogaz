import React, { FC, useState } from 'react';

import { ArrowRight, Cloud, Bubble } from '../../Svg';
import cylindersOne from '../../../img/cylindersOne.png';
import cylindersTwo from '../../../img/cylindersTwo.png';
import cylindersThree from '../../../img/cylindersThree.png';
import cylindersFour from '../../../img/cylindersFour.png';
import cylindersFive from '../../../img/cylindersFive.png';
import infoCard from '../../../infoSliderRU.json';

import CardPopUp from './CardPopUp';

const Card: FC = () => {
    const [activePopup, setActivePopup] = useState<boolean>(false);
    const [indPopup, setIndPopup] = useState<string | null>(null);

    const onOpenCard = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const activeLi = document.querySelectorAll('.mobile-card-item');
        const activeCard = document.querySelectorAll('.wrapper-card_active');

        //  const li = e.target as HTMLElement | null;

        const eTarget = e.target as HTMLElement;

        const li = eTarget.closest('li');

        if (li === null) return;
        if (li.classList.value !== 'mobile-card-item') return;

        activeLi.forEach((_li, i) => {
            activeLi[i].classList.remove('active-card');
        });
        activeCard.forEach((_card, i) => {
            activeCard[i].classList.remove('wrapper-card_active');
        });

        eTarget.classList.add('active-card');
        eTarget.children[1].classList.add('wrapper-card_active');
        if (eTarget.id === 'undefined') {
            return;
        }
        console.log(eTarget.id);
        setIndPopup(eTarget.id);
    };
    const onActivePopUp = () => {
        setActivePopup(!activePopup);
    };

    return (
        <>
            <ul className="mobile-card-list">
                <li className="mobile-card-item" onClick={onOpenCard} id="0">
                    <div className="firs-info-card">
                        <div>
                            <h2 className="header-card">Углекислота</h2>
                        </div>
                        <div className="head-box">
                            <p className="value-card">
                                CO<span className="number-card">2</span>
                            </p>
                            <ArrowRight className="arrow-right" />
                        </div>
                    </div>
                    <div className="wrapper-card" onClick={onActivePopUp}>
                        <div className="cloud-card">
                            <p className="cloud-card-velue">
                                CO<span className="cloud-card-number">2</span>
                            </p>
                            <Cloud />
                        </div>
                        <img src={cylindersOne} alt="" className="cylinders-card" />
                        <ul className="value-position-list">
                            <li className="value-position-item">
                                <p className="value-position">
                                    40/10 л<span className="designation-position">Емкость</span>
                                </p>
                            </li>
                            <li className="value-position-item">
                                <p className="value-position">
                                    85/21~ кг
                                    <span className="designation-position">
                                        Вес полного баллона
                                    </span>
                                </p>
                            </li>
                        </ul>

                        <div>
                            <h2 className="position-name">УГЛЕКИСЛОТА (БАЛЛОН)</h2>
                            <div className="wrapper-info-position">
                                <p className="info-contacts-position">
                                    Заказ только <br /> по телефону
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
                                <button className="btn-info-position">Нажмите для описания</button>
                            </div>
                        </div>
                    </div>
                    <div className="hr-card"></div>
                </li>
                <li className="mobile-card-item" onClick={onOpenCard} id="1">
                    <div className="firs-info-card">
                        <div>
                            <h2 className="header-card">Смесь МИКС-1</h2>
                        </div>
                        <div className="head-box">
                            <p className="value-card">
                                Ar <span className="plus-card">+</span> CO2
                                <span className="number-card"></span>
                            </p>
                            <ArrowRight className="arrow-right" />
                        </div>
                    </div>

                    <div className="wrapper-card" onClick={onActivePopUp}>
                        <div className="cloud-card">
                            <p className="cloud-card-velue">Ar</p>
                            <Cloud className="cloud" />
                        </div>
                        <div className="cloud-cardTwo">
                            <p className="cloud-card-velueTwo">+</p>
                        </div>
                        <div className="cloud-cardThree">
                            <p className="cloud-card-velueThree">
                                CO<span className="cloud-card-number">2</span>
                            </p>
                            <Cloud className="cloud" />
                        </div>
                        <img src={cylindersTwo} alt="" className="cylinders-card" />
                        <ul className="value-position-list">
                            <li className="value-position-item">
                                <p className="value-position">
                                    40 л<span className="designation-position">Емкость</span>
                                </p>
                            </li>
                            <li className="value-position-item">
                                <p className="value-position">
                                    70~ кг
                                    <span className="designation-position">
                                        Вес полного баллона
                                    </span>
                                </p>
                            </li>
                        </ul>

                        <div>
                            <h2 className="position-name">Смесь МИКС-1 (БАЛЛОН)</h2>
                            <div className="wrapper-info-position">
                                <p className="info-contacts-position">
                                    Заказ только <br /> по телефону
                                </p>
                                <p className="price-position">₴{infoCard[1].price}</p>
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
                                <button className="btn-info-position">Нажмите для описания</button>
                            </div>
                        </div>
                    </div>
                    <div className="hr-card"></div>
                </li>
                <li className="mobile-card-item" onClick={onOpenCard} id="2">
                    <div className="firs-info-card">
                        <div>
                            <h2 className="header-card">Аргон</h2>
                        </div>
                        <div className="head-box">
                            <p className="value-card">Ar</p>
                            <ArrowRight className="arrow-right" />
                        </div>
                    </div>

                    <div className="wrapper-card" onClick={onActivePopUp}>
                        <div className="cloud-card">
                            <p className="cloud-card-velue">
                                Ar<span className="cloud-card-number"></span>
                            </p>
                            <Cloud />
                        </div>
                        <img src={cylindersThree} alt="" className="cylinders-card" />
                        <ul className="value-position-list">
                            <li className="value-position-item">
                                <p className="value-position">
                                    40 л<span className="designation-position">Емкость</span>
                                </p>
                            </li>
                            <li className="value-position-item">
                                <p className="value-position">
                                    70~ кг
                                    <span className="designation-position">
                                        Вес полного баллона
                                    </span>
                                </p>
                            </li>
                        </ul>

                        <div>
                            <h2 className="position-name">Аргон (БАЛЛОН)</h2>
                            <div className="wrapper-info-position">
                                <p className="info-contacts-position">
                                    Заказ только <br /> по телефону
                                </p>
                                <p className="price-position">₴{infoCard[2].price}</p>
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
                                <button className="btn-info-position">Нажмите для описания</button>
                            </div>
                        </div>
                    </div>
                    <div className="hr-card"></div>
                </li>
                <li className="mobile-card-item" onClick={onOpenCard} id="3">
                    <div className="firs-info-card">
                        <div>
                            <h2 className="header-card">Азот</h2>
                        </div>
                        <div className="head-box">
                            <p className="value-card">
                                N<span className="number-card">2</span>
                            </p>
                            <ArrowRight className="arrow-right" />
                        </div>
                    </div>

                    <div className="wrapper-card" onClick={onActivePopUp}>
                        <div className="cloud-card">
                            <p className="cloud-card-velue">
                                N<span className="cloud-card-number">2</span>
                            </p>
                            <Cloud />
                        </div>
                        <img src={cylindersFour} alt="" className="cylinders-card" />
                        <ul className="value-position-list">
                            <li className="value-position-item">
                                <p className="value-position">
                                    40 л<span className="designation-position">Емкость</span>
                                </p>
                            </li>
                            <li className="value-position-item">
                                <p className="value-position">
                                    70~ кг
                                    <span className="designation-position">
                                        Вес полного баллона
                                    </span>
                                </p>
                            </li>
                        </ul>

                        <div>
                            <h2 className="position-name">УГЛЕКИСЛОТА (БАЛЛОН)</h2>
                            <div className="wrapper-info-position">
                                <p className="info-contacts-position">
                                    Заказ только <br /> по телефону
                                </p>
                                <p className="price-position">₴{infoCard[3].price}</p>
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
                                <button className="btn-info-position">Нажмите для описания</button>
                            </div>
                        </div>
                    </div>
                    <div className="hr-card"></div>
                </li>
                <li className="mobile-card-item" onClick={onOpenCard} id="4">
                    <div className="firs-info-card">
                        <div>
                            <h2 className="header-card">Кислород</h2>
                        </div>
                        <div className="head-box">
                            <p className="value-card">
                                O<span className="number-card">2</span>
                            </p>
                            <ArrowRight className="arrow-right" />
                        </div>
                    </div>

                    <div className="wrapper-card" onClick={onActivePopUp}>
                        <div className="cloud-card">
                            <p className="cloud-card-velue">
                                O<span className="cloud-card-number">2</span>
                            </p>
                            <Bubble />
                        </div>
                        <img src={cylindersFive} alt="" className="cylinders-card" />
                        <ul className="value-position-list">
                            <li className="value-position-item">
                                <p className="value-position">
                                    40 л<span className="designation-position">Емкость</span>
                                </p>
                            </li>
                            <li className="value-position-item">
                                <p className="value-position">
                                    70~ кг
                                    <span className="designation-position">
                                        Вес полного баллона
                                    </span>
                                </p>
                            </li>
                        </ul>

                        <div>
                            <h2 className="position-name">Кислород (БАЛЛОН)</h2>
                            <div className="wrapper-info-position">
                                <p className="info-contacts-position">
                                    Заказ только <br /> по телефону
                                </p>
                                <p className="price-position">₴{infoCard[4].price}</p>
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
                                <button className="btn-info-position">Нажмите для описания</button>
                            </div>
                        </div>
                    </div>
                    <div className="hr-card"></div>
                </li>
            </ul>
            <CardPopUp active={activePopup} ind={indPopup} openCloseCard={() => onActivePopUp()} />
        </>
    );
};

export default Card;
