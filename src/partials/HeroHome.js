import React from "react";
import Slider from "react-slick";

export default function HeroHome() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
      return (
        <div className="homeslider">
          <Slider {...settings}>            
            <div className="slide">
              <img src={require('../images/bg-img.png').default} />
              <div className="slider-content">
						    <div className="slider-title">A WORLD OF OPPORTUNITIES</div>
					    </div>
            </div>    
            <div className="slide">
              <img src={require('../images/bg-img3.jpg').default} />
              <div className="slider-content">
						    <div className="slider-title">A WORLD OF OPPORTUNITIES</div>
					    </div>
            </div>        
          </Slider>
        </div>
      );
    }
