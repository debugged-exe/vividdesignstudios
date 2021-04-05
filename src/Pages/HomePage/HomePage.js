import React from 'react';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.js';
import CategoriesSlideshow from '../../Components/Categories/CategoriesSlideshow.js';
import './HomePage.scss';

const HomePage = () => {
	return (
		<div className="home-container">
			<ImageSlider />
			<CategoriesSlideshow/>
		</div>
	)
}

export default HomePage
