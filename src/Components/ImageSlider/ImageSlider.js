import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import img1 from './Image/img1.jpg';
import img2 from './Image/img2.jpg';
import img3 from './Image/img3.jpg';
import './ImageSlider.scss';

const ImageSlider = () => {
	const settings = {
      dots: false,
      fade: true,
      lazyload: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

	return(
		<div className="slider-container" >
			<Slider {...settings} style={{width: '99.56vw', height: '100vh', overflow: 'hidden'}}>
				<div className="item-container">
					<img src={img1} alt="Image"/>
					<h3 className="label">1</h3>
				</div>
				<div className="item-container">
					<img src={img2} alt="Image"/>
					<h3 className="label">2</h3>
				</div>
				<div className="item-container">
					<img src={img3} alt="Image"/>
					<h3 className="label">3</h3>
				</div>
			</Slider>
		</div>
	);
}

export default ImageSlider;

// style={{backgroundImage: `url(${img1})`}}
// style={{backgroundImage: `url(${img2})`}}
// style={{backgroundImage: `url(${img3})`}}