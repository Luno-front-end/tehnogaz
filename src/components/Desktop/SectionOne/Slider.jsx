import infoSlider from "../../../infoSlider.json";
import slideOne from "../../../img/slideOne.png";
import slideTwo from "../../../img/slideTwo.png";
import slideThree from "../../../img/slideThree.png";
import slideFour from "../../../img/slideFour.png";
import slideFive from "../../../img/slideFive.png";

const Slider = () => {
  console.log(infoSlider[0].img);

  return (
    <>
      <ul className="list-slider">
        <li className="item-slider">
          <article className="wrapper-card-clider">
            <img
              width="349"
              height="256"
              src={slideOne}
              alt=""
              className="slide-img"
            />
            <div className="slide-text-wrapper">
              <h3 className="slide-header">Углекислота</h3>

              <p className="slide-paragraph">
                Углекислота (Діоксид вуглецю газ ДСТУ 4817:2007) Углекислота газ
                без цвета и запаха, слаботоксичен, имеет специфический немного
                кислый вкус. Негорюч, не поддерживает горение, в 1,5 раза
                тяжелее воздуха, хорошо растворяется в воде, образуя СО.
                Температура кипения -78,3°С. В промышленности используют
                различные свойства двуокиси углерода. В пищевой промышленности
                СО2 применяют для замораживания, хранения и кислотного контроля,
                для газирования напитков. В химической промышленности для
                контроля кислотности воды. Также двуокись углерода применяют для
                сварки металлов в качестве защитного газа, для стимулирования
                роста растений в тепличном хозяйстве.
              </p>
            </div>
            <button type="submite" className="slide-btn">
              <span className="general-text-btn">
                Заказать
                <span className="subGeneral-text-btn">По телефону</span>
              </span>
              <span className="price-btn-slide">₴300 / 100</span>
            </button>
          </article>
        </li>
        {/* <li className="item-slider">
          <article>
            <div className="slide-img-wrapper">
              <img
                width="349"
                height="256"
                src={slideOne}
                alt=""
                className="slide-img"
              />
            </div>
            <div className="slide-header-wrapper">
              <h3 className="slide-header">Углекислота</h3>
            </div>
            <div className="slide-paragraph-wrapper">
              <p className="slide-paragraph">
                Углекислота (Діоксид вуглецю газ ДСТУ 4817:2007) Углекислота газ
                без цвета и запаха, слаботоксичен, имеет специфический немного
                кислый вкус. Негорюч, не поддерживает горение, в 1,5 раза
                тяжелее воздуха, хорошо растворяется в воде, образуя СО.
                Температура кипения -78,3°С. В промышленности используют
                различные свойства двуокиси углерода. В пищевой промышленности
                СО2 применяют для замораживания, хранения и кислотного контроля,
                для газирования напитков. В химической промышленности для
                контроля кислотности воды. Также двуокись углерода применяют для
                сварки металлов в качестве защитного газа, для стимулирования
                роста растений в тепличном хозяйстве.
              </p>
            </div>
            <button type="submite" className="slide-btn">
              Заказать <span>По телефону</span>
            </button>
          </article>
        </li> */}
      </ul>
    </>
  );
};

export default Slider;
