import React from 'react';
import Connect from './Connect/Connect.js';
import ContactUs from './ContactUs/ContactUs.js';
import './Footer.scss';
import 'tachyons';
import {BsPeopleFill} from 'react-icons/bs';
import {RiDiscussFill,RiCalendarTodoFill} from 'react-icons/ri';
import {AiOutlineFileDone} from 'react-icons/ai';
import {FiCheck} from 'react-icons/fi';

const Footer = () => {
	return (
  <div className="white mb5">
	   <div style={{position: 'relative', backgroundColor:'white',backgroundImage:'url("https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZXByaW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60") center center', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', width: '100vw', height: '90vh', opacity: '0.7'}}>
		   <div style={{backgroundColor:"black", opacity:'0.7'}} className="aboutus_subdiv">
			    <p className="center b " style={{  fontFamily: 'Open Sans Condensed',fontSize:'33px'}}> ABOUT US</p>
					<h2 className="head ph4 ">WHO ARE WE?</h2>
         	<p className="subhead ph4 ">Devendra Dhaigude graduates from JRVGTI, Pune 2012. After graduation Devendra Dhaigude working with renowned architects Mr.Shrikant Lele and Mr.Lakshman Moirangthem (M/s SI Architects) for 3 years. After worked with SI Architects for 3 years Devendra established an independent practice in Pune with his friend Mr.Hemant Dhankawade who gained his experience in Civil Engineer. Devendra and Hemant established Vivid Design Studio on 2016 at Pune.</p>
          <h2 className="head ph4 ">WHY CHOOSE US?</h2>
					 <ul style={{  fontFamily: 'Open Sans Condensed',fontSize:'20px',listStyle:'none', textAlign:'left',display: 'grid',gridTemplateColumns: '50% 50%'}}>
						   <li className="pa2"><FiCheck className="mr2" size='1.6rem'/>Timely completion with Customer satisfaction</li>
							 <li className="pa2"><FiCheck className="mr2" size='1.6rem'/>Best Utilization of available space</li>
	             <li className="pa2"><FiCheck className="mr2" size='1.6rem'/> Professional & Exellence in work</li>
							 <li className="pa2"><FiCheck className="mr2" size='1.6rem'/> All services under one roof</li>
							 <li className="pa2"><FiCheck className="mr2" size='1.6rem'/>Creative Design Options</li>
	             <li className="pa2"><FiCheck className="mr2" size='1.6rem'/>Transperancy with clients</li>
					 </ul>
			 </div>
		 </div>
      <h1>gxayuchisjvodkclv</h1>
	</div>
	)
}

export default Footer;

// <div className="bgimage">
// 	<p className="f2 tc">ABOUT US</p>
// </div>
// <div>
// 	 <h2> Who are we?</h2>
// 	 <p></p>
// 	 <h2> Why choose us?</h2>
// 	 <p></p>
// </div>
// <div className='flex flex-wrap justify-between'>
// 	<div style={{width:'25vw'}}><h2>OUR BEST SERVICES</h2>
// 		<p className="ml4" style={{lineHeight: 'calc(22/13)',textAlign:'start'}}>
// 				An interior designer is someone who plans, researches, coordinates, and manages such projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design.
// 			</p>
// 	</div>
// 	<div className=" bg-black white pl3">
// 		<h2>OUR PROCESS</h2>
// 		 <div className="flex">
// 				<div style={{width:'30vw',height:'30vh',lineHeight: 'calc(22/13)',textAlign:'start'}}>
// 					<h2><BsPeopleFill/>  MEET <sup> 01</sup></h2>
// 					<p>Detailed understanding of clients requirements & timeline.</p>
// 				</div>
// 				<div style={{width:'30vw',height:'30vh',lineHeight: 'calc(22/13)',textAlign:'start'}}>
// 					<h2><RiDiscussFill/>  DISCUSS <sup> 02</sup></h2>
// 					<p>Based on requirements, we provide best designs & layout options.</p>
// 				</div>
// 			</div>
// 			<div className="flex">
// 				<div style={{width:'30vw',height:'30vh',lineHeight: 'calc(22/13)',textAlign:'start'}}>
// 					<h2><RiCalendarTodoFill/>  PLAN <sup> 03</sup></h2>
// 					<p>Making detail drawings which will help us to make things easy to understand for client as well as us.</p>
// 				</div>
// 				<div style={{width:'30vw',height:'30vh',lineHeight: 'calc(22/13)',textAlign:'start'}}>
// 					<h2><AiOutlineFileDone/>  EXECUTE <sup> 04</sup></h2>
// 					<p>Our best engineers/architects gives right direction to execute approved planning.</p>
// 				</div>
// 		 </div>
// 		</div>
// 	</div>
// <div className="footer-container" >
// 		<Connect />
// 		<ContactUs />
// </div>
