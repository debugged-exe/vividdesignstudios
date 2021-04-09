import React from 'react';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.js';
import CategoriesSlideshow from '../../Components/Categories/CategoriesSlideshow.js';
import Footer from '../../Components/Footer/Footer.js';
import Latest from '../../Components/Latest/Latest.js';
import './HomePage.scss';
import {Projects} from '../../Databases/Projects.js';

const HomePage = ({showCategories,showTrending}) => {
	return (
		<div className="home-container">
			<ImageSlider />
			<Latest project={Projects} showTrending={showTrending}/>
			<CategoriesSlideshow  showCategories={showCategories}/>
			<Footer />
		</div>
	)
}

export default HomePage
