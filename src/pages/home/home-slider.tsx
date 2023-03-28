import React from 'react';
import Slider from "react-slick";

const HomeSlider = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='home_slider'>
            <Slider {...settings}>
                <div>
                    <img src="./images/hero_01.png" alt="" className='img1' />
                </div>
                <div>
                    <img src="./images/hero_02.png" alt="" className='img2' />
                </div>
                <div>
                    <img src="./images/hero_03.png" alt="" className='img2' />
                </div>

            </Slider>
        </div>
    );
};

export default HomeSlider;