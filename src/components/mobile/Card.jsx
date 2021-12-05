import { ArrowRight } from "../Svg";
// import imgTwoCard from "../../img/imgOneCard.png";
// import imgThreeCard from "../../img/imgOneCard.png";
// import imgFourCard from "../../img/imgOneCard.png";
// import imgFiveCard from "../../img/imgOneCard.png";

const HeaderMob = () => {
  return (
    <ul className="mobile-card-list">
      <li className="mobile-card-item">
        <h2 className="header-card">Углекислота</h2>
        <div>
          <p className="value-card">
            CO<span className="number-card">2</span>
          </p>
          <ArrowRight className="arrow-right" />
        </div>
        {/* <img src={imgOneCard} alt="" /> */}
        {/* <div>
              <div>
                <p>
                  40/10 л<span>Емкость</span>
                </p>
                <p>
                  20/6 кг<span>Вес баллона</span>
                </p>
              </div>
              <div>
                <h2>УГЛЕКИСЛОТА (БАЛЛОН)</h2>
                <div>
                  <p>Заказ только по телефону</p>
                  <p>₴300 / 100</p>
                </div>
                <ul>
                  <li>
                    <a href="tel:0978180966">+38 (097) 818-09-66</a>
                  </li>
                  <li>
                    <a href="tel:0953614833">+38 (095) 361-48-33</a>
                  </li>
                  <p>Нажмите для описания</p>
                </ul>
              </div>
            </div> */}
      </li>
      <li className="mobile-card-item">
        <h2 className="header-card">Смесь МИКС-1</h2>
        <div>
          <p className="value-card">
            Ar <span className="plus-card">+</span>
            <span className="sub-val-card">
              CO
              <span className="number-card">2</span>
            </span>
          </p>
          <ArrowRight className="arrow-right" />
        </div>
        {/* <img src={imgOneCard} alt="" /> */}
        {/* <div>
              <div>
                <p>
                  40 л<span>Емкость</span>
                </p>
                <p>
                  65-77 кг<span>Вес баллона</span>
                </p>
              </div>
              <div>
                <h2>Смесь МИКС-1 (БАЛЛОН)</h2>
                <div>
                  <p>Заказ только по телефону</p>
                  <p>₴290</p>
                </div>
                <ul>
                  <li>
                    <a href="tel:0978180966">+38 (097) 818-09-66</a>
                  </li>
                  <li>
                    <a href="tel:0953614833">+38 (095) 361-48-33</a>
                  </li>
                  <p>Нажмите для описания</p>
                </ul>
              </div>
            </div> */}
      </li>
      <li className="mobile-card-item">
        <h2 className="header-card">Аргон</h2>
        <div>
          <p className="value-card">Ar</p>
          <ArrowRight className="arrow-right" />
        </div>
        {/* <div>
              <div>
                <p>
                  40 л<span>Емкость</span>
                </p>
                <p>
                  65-77 кг<span>Вес баллона</span>
                </p>
              </div>
              <div>
                <h2>Аргон (БАЛЛОН)</h2>
                <div>
                  <p>Заказ только по телефону</p>
                  <p>₴280</p>
                </div>
                <ul>
                  <li>
                    <a href="tel:0978180966">+38 (097) 818-09-66</a>
                  </li>
                  <li>
                    <a href="tel:0953614833">+38 (095) 361-48-33</a>
                  </li>
                  <p>Нажмите для описания</p>
                </ul>
              </div>
            </div> */}
      </li>
      <li className="mobile-card-item">
        <h2 className="header-card">Азот</h2>
        <div>
          <p className="value-card">
            N<span className="number-card">2</span>
          </p>
          <ArrowRight className="arrow-right" />
        </div>
        {/* <div>
              <div>
                <p>
                  40 л<span>Емкость</span>
                </p>
                <p>
                  51-59 кг<span>Вес баллона</span>
                </p>
              </div>
              <div>
                <h2>Азот (БАЛЛОН)</h2>
                <div>
                  <p>Заказ только по телефону</p>
                  <p>₴160</p>
                </div>
                <ul>
                  <li>
                    <a href="tel:0978180966">+38 (097) 818-09-66</a>
                  </li>
                  <li>
                    <a href="tel:0953614833">+38 (095) 361-48-33</a>
                  </li>
                  <p>Нажмите для описания</p>
                </ul>
              </div>
            </div> */}
      </li>
      <li className="mobile-card-item">
        <h2 className="header-card">Кислород</h2>
        <div>
          <p className="value-card">
            O<span className="number-card">2</span>
          </p>
          <ArrowRight className="arrow-right" />
        </div>
        {/* <div>
              <div>
                <p>
                  40 л <span>Емкость</span>
                </p>
                <p>
                  67 кг <span>Вес баллона</span>
                </p>
              </div>
              <div>
                <h2>Кислород (БАЛЛОН)</h2>
                <div>
                  <p>Заказ только по телефону</p>
                  <p>₴96</p>
                </div>
                <ul>
                  <li>
                    <a href="tel:0978180966">+38 (097) 818-09-66</a>
                  </li>
                  <li>
                    <a href="tel:0953614833">+38 (095) 361-48-33</a>
                  </li>
                  <p>Нажмите для описания</p>
                </ul>
              </div>
            </div> */}
      </li>
    </ul>
  );
};

export default HeaderMob;
