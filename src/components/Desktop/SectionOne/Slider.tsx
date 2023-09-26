import { useRef, useCallback, FC } from 'react';
import { ArrowRight } from '../../Svg';

import infoSlider from '../../../infoSliderUA.json';
import slideOne from '../../../img/slideOne.png';
import slideTwo from '../../../img/slideTwo.png';
import slideThree from '../../../img/slideThree.png';
import slideFour from '../../../img/slideFour.png';
import slideFive from '../../../img/slideFive.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider: FC = () => {
    const arrayImg = [
        <img width="349" height="256" src={slideOne} alt={slideOne} className="slide-img" />,
        <img width="349" height="256" src={slideTwo} alt={slideTwo} className="slide-img" />,
        <img width="349" height="256" src={slideThree} alt={slideThree} className="slide-img" />,
        <img width="349" height="256" src={slideFour} alt={slideFour} className="slide-img" />,
        <img width="349" height="256" src={slideFive} alt={slideFive} className="slide-img" />,
    ];

    const sliderRef = useRef<{ swiper: any } | null>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className="wrapper-slider-desk">
            <button type="submit" className="next-btn" onClick={handleNext}>
                <ArrowRight className="arrowRight-slider" />
            </button>
            <Swiper ref={sliderRef} className="mySwiper">
                {infoSlider.map((slide, i) => (
                    <SwiperSlide>
                        <div className="list-slider">
                            <div key={slide.id} className={'active item-slider'}>
                                <article className="wrapper-card-slider">
                                    <div className="wrapper-img-slide">
                                        {arrayImg[i]}
                                        <div className="wrapper-value-slide">
                                            <p className="value-slide">
                                                {slide.value} л
                                                <span className="name-value-slide">Емкость</span>
                                            </p>
                                            <p className="value-slide">
                                                {slide.capacity} ~ кг
                                                <span className="name-value-slide">
                                                    Вес баллона
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="slide-text-wrapper">
                                        <h3 className="slide-header">{slide.header}</h3>

                                        <p className="slide-paragraph">{slide.text}</p>
                                    </div>
                                    <button type="submit" className="slide-btn">
                                        <span className="general-text-btn">
                                            Заказать
                                            <span className="subGeneral-text-btn">По телефону</span>
                                        </span>
                                        <span className="price-btn-slide">₴{slide.price}</span>
                                    </button>
                                </article>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button type="submit" className="previous-btn" onClick={handlePrev}>
                <ArrowRight className="arrowRight-slider" />
            </button>
        </div>
    );
};

export default Slider;
