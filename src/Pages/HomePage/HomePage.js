import React ,{lazy,Suspense} from 'react';
import './HomePage.scss';
import { ParallaxProvider } from 'react-scroll-parallax';

const ImageSlider=lazy(()=>import ('../../Components/ImageSlider/ImageSlider.js'));
const CategoriesSlideshow =lazy(()=>import ('../../Components/Categories/CategoriesSlideshow.js'));
const Latest=lazy(()=>import ('../../Components/Latest/Latest.js'));

const HomePage = ({ProjectList,showCategories,showTrending}) => {
	return (
		<div className="home-container" id="home">
			<Suspense fallback={<div>Loading .... latest</div>}>
				<ImageSlider/>
			</Suspense>
			<span id="trending"></span>
			 <div className="trending_cat">
					<ParallaxProvider>
						<Suspense fallback={<div>Loading .... latest</div>}>
							<Latest  ProjectList={ProjectList} showTrending={showTrending}/>
						</Suspense>
						<Suspense fallback={<div>Loading .... categories</div>}>
						   <CategoriesSlideshow  showCategories={showCategories}/>
						</Suspense>
					</ParallaxProvider>
				</div>
		</div>
	)
}

export default HomePage;
