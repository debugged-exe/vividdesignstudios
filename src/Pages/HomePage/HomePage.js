import React from 'react';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.js';
import CategoriesSlideshow from '../../Components/Categories/CategoriesSlideshow.js';
import Footer from '../../Components/Footer/Footer.js';
import Latest from '../../Components/Latest/Latest.js';
import './HomePage.scss';

const HomePage = () => {
	return (
		<div className="home-container">
			<ImageSlider />
			<Latest/>
			<CategoriesSlideshow />
			<Footer />
		</div>
	)
}

export default HomePage
