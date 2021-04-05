import React from 'react'
import Slider from 'react-slick';
import { Fade } from 'react-slideshow-image';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import 'react-slideshow-image/dist/styles.css';
import './ImageSlider.scss';

const ImageSlider = () => {
	return (
		<div className="slide-container">
			<Fade arrows={false} duration={500}>
				<div className="each-fade">
					<div className="image-container">
						<img src={img1} alt="Image" width="100%" height="100%" />
					</div>
				</div>
				<div className="each-fade">
					<div className="image-container">
						<img src={img2} alt="Image" width="100%" height="100%" />
					</div>
				</div>
				<div className="each-fade">
					<div className="image-container">
						<img src={img3} alt="Image" width="100%" height="100%" />
					</div>
				</div>
			</Fade>
		</div>
	)
}

export default ImageSlider