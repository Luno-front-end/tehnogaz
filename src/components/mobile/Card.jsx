import { ArrowRight } from "../Svg";
import cylindersOne from "../../img/cylindersOne.png";
import cylindersTwo from "../../img/cylindersTwo.png";
import cylindersThree from "../../img/cylindersThree.png";
import cylindersFour from "../../img/cylindersFour.png";
import cylindersFive from "../../img/cylindersFive.png";
import { useState } from "react";

const HeaderMob = () => {
  const onOpenCard = (e) => {
    const activeLi = document.querySelectorAll(".mobile-card-item");
    const activeCard = document.querySelectorAll(".wrapper-card_active");
    e.preventDefault();

    const li = e.target.closest("li");

    if (li === null) return;
    console.log(li.classList.value);
    if (li.classList.value !== "mobile-card-item") {
      return;
    }

    activeLi.forEach((_li, i) => {
      activeLi[i].classList.remove("active-card");
    });
    activeCard.forEach((_card, i) => {
      activeCard[i].classList.remove("wrapper-card_active");
    });

    e.target.classList.add("active-card");
    e.target.children[1].classList.add("wrapper-card_active");
  };

  return (
    <>
      <ul className="mobile-card-list">
        <li className="mobile-card-item" onClick={onOpenCard}>
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
          <div className="wrapper-card">
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
                  <span className="designation-position">Вес баллона</span>
                </p>
              </li>
            </ul>

            <div>
              <h2 className="position-name">УГЛЕКИСЛОТА (БАЛЛОН)</h2>
              <div className="wrapper-info-position">
                <p className="info-contacts-position">
                  Заказ только <br /> по телефону
                </p>
                <p className="price-position">₴300 / 100</p>
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
                  Нажмите для описания
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="mobile-card-item" onClick={onOpenCard}>
          <div className="firs-info-card">
            <div>
              <h2 className="header-card">Смесь МИКС-1</h2>
            </div>
            <div className="head-box">
              <p className="value-card">
                Ar + CO2<span className="number-card"></span>
              </p>
              <ArrowRight className="arrow-right" />
            </div>
          </div>

          <div className="wrapper-card">
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
                  <span className="designation-position">Вес баллона</span>
                </p>
              </li>
            </ul>

            <div>
              <h2 className="position-name">Смесь МИКС-1 (БАЛЛОН)</h2>
              <div className="wrapper-info-position">
                <p className="info-contacts-position">
                  Заказ только <br /> по телефону
                </p>
                <p className="price-position">₴290</p>
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
                  Нажмите для описания
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="mobile-card-item" onClick={onOpenCard}>
          <div className="firs-info-card">
            <div>
              <h2 className="header-card">Аргон</h2>
            </div>
            <div className="head-box">
              <p className="value-card">Ar</p>
              <ArrowRight className="arrow-right" />
            </div>
          </div>

          <div className="wrapper-card">
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
                  <span className="designation-position">Вес баллона</span>
                </p>
              </li>
            </ul>

            <div>
              <h2 className="position-name">Аргон (БАЛЛОН)</h2>
              <div className="wrapper-info-position">
                <p className="info-contacts-position">
                  Заказ только <br /> по телефону
                </p>
                <p className="price-position">₴280</p>
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
                  Нажмите для описания
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="mobile-card-item" onClick={onOpenCard}>
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

          <div className="wrapper-card">
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
                  <span className="designation-position">Вес баллона</span>
                </p>
              </li>
            </ul>

            <div>
              <h2 className="position-name">УГЛЕКИСЛОТА (БАЛЛОН)</h2>
              <div className="wrapper-info-position">
                <p className="info-contacts-position">
                  Заказ только <br /> по телефону
                </p>
                <p className="price-position">₴160</p>
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
                  Нажмите для описания
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="mobile-card-item" onClick={onOpenCard}>
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

          <div className="wrapper-card">
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
                  <span className="designation-position">Вес баллона</span>
                </p>
              </li>
            </ul>

            <div>
              <h2 className="position-name">Кислород (БАЛЛОН)</h2>
              <div className="wrapper-info-position">
                <p className="info-contacts-position">
                  Заказ только <br /> по телефону
                </p>
                <p className="price-position">₴96</p>
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
                  Нажмите для описания
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="modal-info-position"></div>
    </>
  );
};

export default HeaderMob;
