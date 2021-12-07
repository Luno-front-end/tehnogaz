import { ArrowRight } from "../Svg";
import cylindersOne from "../../img/cylindersOne.png";
import cylindersTwo from "../../img/cylindersTwo.png";
import cylindersThree from "../../img/cylindersThree.png";
import cylindersFour from "../../img/cylindersFour.png";
import cylindersFive from "../../img/cylindersFive.png";
import { useState } from "react";

const HeaderMob = () => {
  const [activeCard, setActiveCard] = useState(false);

  const onOpenCard = (e) => {
    const li = e.target.closest("li");
    if (li === null) return;
    
    // if (activeCard) {
    //   return;
    // }
    console.log(e);
    setActiveCard(!activeCard);
  };

  return (
    <>
      <ul className="mobile-card-list" onClick={onOpenCard}>
        <li
          className={
            activeCard ? "mobile-card-item active-card" : "mobile-card-item "
          }
          data-comand="oneCard"
        >
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
          {activeCard && (
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
          )}
        </li>
        <li
          className={
            activeCard ? "mobile-card-item active-card" : "mobile-card-item "
          }
          data-comand="twoCard"
        >
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
          {activeCard && (
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
          )}
        </li>
        <li
          className={
            activeCard ? "mobile-card-item active-card" : "mobile-card-item "
          }
          data-comand="ThreeCard"
        >
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
          {activeCard && (
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
          )}
        </li>
        <li
          className={
            activeCard ? "mobile-card-item active-card" : "mobile-card-item "
          }
          data-comand="fourCard"
        >
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
          {activeCard && (
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
          )}
        </li>
        <li
          className={
            activeCard ? "mobile-card-item active-card" : "mobile-card-item "
          }
          data-comand="fiveCard"
        >
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
          {activeCard && (
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
          )}
        </li>
      </ul>
      <div className="modal-info-position"></div>
    </>
  );
};

export default HeaderMob;
