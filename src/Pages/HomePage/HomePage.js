import React from 'react';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.js';
import CategoriesSlideshow from '../../Components/Categories/CategoriesSlideshow.js';
import Latest from '../../Components/Latest/Latest.js';
import './HomePage.scss';
import {Projects} from '../../Databases/Projects.js';

const HomePage = ({showCategories,showTrending}) => {
	return (
		<div className="home-container">
			<ImageSlider />
			<Latest project={Projects} showTrending={showTrending}/>
			<CategoriesSlideshow  showCategories={showCategories}/>
		</div>
	)
}

export default HomePage
