import React from 'react';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.js';
import CategoriesSlideshow from '../../Components/Categories/CategoriesSlideshow.js';
import Latest from '../../Components/Latest/Latest.js';
import './HomePage.scss';
import {Projects} from '../../Databases/Projects.js';
import { ParallaxProvider } from 'react-scroll-parallax';


const HomePage = ({showCategories,showTrending}) => {
	return (
		<div className="home-container" id="home">
			<ImageSlider />
			<span id="trending"></span>
			 <div className="trending_cat">
				<ParallaxProvider>
					<Latest  project={Projects} showTrending={showTrending}/>
					<CategoriesSlideshow  showCategories={showCategories}/>
					</ParallaxProvider>
				</div>
		</div>
	)
}

export default HomePage
