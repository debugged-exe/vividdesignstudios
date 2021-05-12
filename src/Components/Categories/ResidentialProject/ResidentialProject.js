import React from 'react';
import Carousel from 'react-elastic-carousel';
import { HashLink as Link } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ResidentialProject.scss';

const ResidentialProject = ({setProject, ProjectList}) => {
	AOS.init();
	return (
		<div className="black" style={{backgroundColor:'white'}}>
		  <span  id="res"></span>
			<h1 className="header">Some of Our Works
			<br/> and Case Studies for Clients</h1>
			<p className="pa0 gray">---------------------------------</p>
	    <p className="gray f4">[Our portfolio]</p>
         {
						ProjectList.filter(item => item.category==='residential')
						.map((item) => {
							return(
								<div style={{background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover'}}className="bgimageresidential center mv5 ">
								<div className='tint'>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
									<div className="gridElement"></div>
								</div>
								   <div className="description-container ">
			               <h1 data-aos="fade-left" data-aos-duration="1000">{item.Client}</h1>
										 <div className="list">
										 	<p className="pa0" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="145">Area: {item.Area}</p>
											<p className="pa0" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="145">Type: {item.Type}</p>
											<p className="pa0" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="145">Location: {item.Location}</p>
										 </div>
										 <div className="category-button">
				               <Link to='/projectview/#projectDisplay' onClick={() => setProject(item)}><button className="butt" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="150">View Project</button></Link>
				               <hr className="btn-bottom"></hr>
				               <hr className="right"></hr>
				             </div>
									 </div>
								</div>
							)
						})
					}
		</div>
	)
}

export default ResidentialProject;
