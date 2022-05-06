import React, { Component, useRef } from "react";
import Slider from "react-slick";
import data from '../data.json'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./dataslider.css"
const Reviews = () => {
    const sliderRef=useRef(null)
    console.log(sliderRef)
    const reviewData=data.reviewData
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3500
    };
  return (
    
    <div className="reviewsSlider">
        <Slider ref={sliderRef} {...settings}>
                {
                    reviewData.map((item)=>(
                        <div key={item.id} className="main-div" >
                            <div className="color-div"></div>
                            <p className="data">{item.data}</p>
                            <p>{item.line}</p>
                        </div>
                    ))
                }
        </Slider>
    </div>

  )
}

export default Reviews