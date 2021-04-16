import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import img1 from '../../Images/Slider-1.jpg';
import img2 from '../../Images/Slider-2.jpg';
import img3 from '../../Images/Slider-3.jpg';
import './ImageSlider.scss';

const ImageSlider = () => {
	const settings = {
      dots: false,
      fade: true,
      lazyload: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

	return(
		<div className="slider-container" >
			<Slider {...settings} style={{width: '99.56vw', height: '100vh', overflow: 'hidden'}}>
				<div className="item-container">
					<img src={img1} alt="Image"/>
					<div className="label">
						<p className="title">Vivid Design Studios</p>
						<p className="subtitle">
							<p className="prof">Interior Designer |&nbsp;</p>
							<p className="prof">Architect |&nbsp;</p> 
							<p className="prof">Civil Engineer</p>
						</p>
					</div>
				</div>
				<div className="item-container">
					<img src={img2} alt="Image"/>
					<div className="label">
						<p className="title">Vivid Design Studios</p>
						<p className="subtitle">
							<p className="prof">Interior Designer |&nbsp;</p>
							<p className="prof">Architect |&nbsp;</p> 
							<p className="prof">Civil Engineer</p>
						</p>
					</div>
				</div>
				<div className="item-container">
					<img src={img3} alt="Image"/>
					<div className="label">
						<p className="title">Vivid Design Studios</p>
						<p className="subtitle">
							<p className="prof">Interior Designer |&nbsp;</p>
							<p className="prof">Architect |&nbsp;</p> 
							<p className="prof">Civil Engineer</p>
						</p>
					</div>
				</div>
			</Slider>
		</div>
	);
}

export default ImageSlider;