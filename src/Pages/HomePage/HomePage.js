import React from 'react';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.js';
import CategoriesSlideshow from '../../Components/Categories/CategoriesSlideshow.js';
import Latest from '../../Components/Latest/Latest.js';
import './HomePage.scss';
import { ParallaxProvider } from 'react-scroll-parallax';


const HomePage = ({ProjectList,showCategories,showTrending}) => {
	return (
		<div className="home-container" id="home">
			<ImageSlider/>
			<span id="trending"></span>
			 <div className="trending_cat">
				<ParallaxProvider>
					<Latest  ProjectList={ProjectList} showTrending={showTrending}/>
					<CategoriesSlideshow  showCategories={showCategories}/>
					</ParallaxProvider>
				</div>
		</div>
	)
}

export default HomePage;
