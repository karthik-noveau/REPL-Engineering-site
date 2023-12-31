import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import { SLIDES_DATA } from "./constant";

import "./slider.css";

export const TextAnimatedSlider = ({ className = "" }) => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;

  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderReady, setSliderReady] = useState(false);
  const changeTO = useRef(null);

  useEffect(() => {
    setSliderReady(true);
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, []);

  const startAutoPlay = () => {
    changeTO.current = setTimeout(() => {
      changeSlides(1);
    }, AUTOCHANGE_TIME);
  };

  const stopAutoPlay = () => {
    clearTimeout(changeTO.current);
  };

  const changeSlides = (change) => {
    const length = SLIDES_DATA.length;
    setActiveSlide((prevSlide) => (prevSlide + change + length) % length);
    startAutoPlay();
  };

  const handleControlClick = (change) => {
    stopAutoPlay();
    changeSlides(change);
  };

  return (
    <div
      className={`${classNames("slider", {
        "s--ready": sliderReady,
      })} ${className}`}
    >
      {/* <p className="slider__top-heading">Travelers</p> */}
      <div className="slider__slides">
        {SLIDES_DATA.map((slide, index) => (
          <div
            className={classNames("slider__slide", {
              "s--active": activeSlide === index,
            })}
            key={slide.product}
          >
            <div className="slider__slide-content">
              <h2 className="slider__slide-heading">
                {slide.product.split("").map((l, i) => {
                  return (
                    <span key={i}>
                      {l === " " ? <span style={{ width: "10px" }}></span> : l}
                    </span>
                  );
                })}
              </h2>
              <h3 className="slider__slide-subheading">{slide.name}</h3>
              {/* <p className="slider__slide-readmore">read more</p> */}
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className="slider__control slider__control--left"
        onClick={() => handleControlClick(-1)}
      />
      <div
        className="slider__control slider__control--right"
        onClick={() => handleControlClick(1)}
      />
    </div>
  );
};
