import { ArrowRight } from "../../Svg";

import infoSlider from "../../../infoSliderUA.json";
import slideOne from "../../../img/slideOne.png";
import slideTwo from "../../../img/slideTwo.png";
import slideThree from "../../../img/slideThree.png";
import slideFour from "../../../img/slideFour.png";
import slideFive from "../../../img/slideFive.png";
import { useState } from "react";

const Slider = () => {
  const [indSlide, setIndSlide] = useState(0);
  const [onSlide, setOnSlide] = useState(true);

  const onSliderNext = () => {
    if (indSlide === infoSlider.length - 1) {
      return;
    }
    setOnSlide(false);

    setTimeout(() => {
      setIndSlide((prevState) => (prevState += 1));
      setOnSlide(true);
    }, 200);
  };
  const onSliderPrev = () => {
    if (indSlide === 0) {
      return;
    }
    setOnSlide(false);

    setTimeout(() => {
      setIndSlide((prevState) => (prevState -= 1));
      setOnSlide(true);
    }, 200);
  };

  const arrayImg = [
    <img
      width="349"
      height="256"
      src={slideOne}
      alt={slideOne}
      className="slide-img"
    />,
    <img
      width="349"
      height="256"
      src={slideTwo}
      alt={slideTwo}
      className="slide-img"
    />,
    <img
      width="349"
      height="256"
      src={slideThree}
      alt={slideThree}
      className="slide-img"
    />,
    <img
      width="349"
      height="256"
      src={slideFour}
      alt={slideFour}
      className="slide-img"
    />,
    <img
      width="349"
      height="256"
      src={slideFive}
      alt={slideFive}
      className="slide-img"
    />,
  ];
  console.log(arrayImg);
  return (
    <div className="wrapper-slider-desk">
      <button type="submite" className="previous-btn" onClick={onSliderPrev}>
        <ArrowRight className="arrowRight-slider" />
      </button>
      <ul className="list-slider">
        <li
          key={infoSlider.id}
          className={onSlide ? "active item-slider" : "item-slider"}
        >
          <article className="wrapper-card-slider">
            <div className="wrapper-img-slide">
              {arrayImg[indSlide]}
              <div className="wrapper-value-slide">
                <p className="value-slide">
                  {infoSlider[indSlide].value} ??
                  <span className="name-value-slide">??????????????</span>
                </p>
                <p className="value-slide">
                  {infoSlider[indSlide].capacity} ~ ????
                  <span className="name-value-slide">?????? ??????????????</span>
                </p>
              </div>
            </div>
            <div className="slide-text-wrapper">
              <h3 className="slide-header">{infoSlider[indSlide].header}</h3>

              <p className="slide-paragraph">{infoSlider[indSlide].text}</p>
            </div>
            <button type="submite" className="slide-btn">
              <span className="general-text-btn">
                ????????????????
                <span className="subGeneral-text-btn">???? ????????????????</span>
              </span>
              <span className="price-btn-slide">
                ???{infoSlider[indSlide].price}
              </span>
            </button>
          </article>
        </li>
      </ul>
      <button type="submite" className="next-btn" onClick={onSliderNext}>
        <ArrowRight className="arrowRight-slider" />
      </button>
    </div>
  );
};

export default Slider;
