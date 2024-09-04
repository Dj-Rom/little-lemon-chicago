import React from 'react';
import Slider from 'react-slick';
import styles from '../../styles/mobile/custumerSayMobile.module.scss';
import { uuid } from 'uuidv4';

const SliderMobile = ({ list, amoundCards = 1.1, vertical, verticalSwiping, dots = false }) => {
  const settings = {
    dots: dots,
    infinite: false,
    speed: 500,
    slidesToShow: amoundCards,
    slidesToScroll: 1,
    arrows: false,
    children: list,
    vertical,
    verticalSwiping,
    waitForAnimate: true,
  };

  return (
    <div className={styles.slider_container}>
      <Slider {...settings} key={uuid} role={'slider'}></Slider>
    </div>
  );
};

export default SliderMobile;
