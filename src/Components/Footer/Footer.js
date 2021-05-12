import React from 'react';
import Connect from './Connect/Connect.js';
import ContactUs from './ContactUs/ContactUs.js';
import { HashLink as Link } from 'react-router-hash-link';
import Carousel from 'react-elastic-carousel';
import './Footer.scss';
import 'tachyons';
import {BsPeopleFill} from 'react-icons/bs';
import {RiDiscussFill,RiCalendarTodoFill} from 'react-icons/ri';
import {AiOutlineFileDone} from 'react-icons/ai';
import {FiCheck} from 'react-icons/fi';

const Footer = () => {
	const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 1 },
	{ width: 850, itemsToShow: 2 },
	{ width: 1150, itemsToShow: 3 },
	{ width: 1450, itemsToShow: 3 },
	{ width: 1750, itemsToShow: 3 },
]
	return (
		<div className="white ma0" style={{  fontFamily: 'Open Sans Condensed',backgroundColor:'#1b1c1b'}}>
			<div className="main-div" style={{textAlign:'left'}}>

					<div className="bg-black aboutus_maindiv" style={{opacity:'0.7'}}>
						<p className="f1 pa1 b tc">ABOUT  US</p>
							<h1 className="pt4">WHO ARE WE?</h1>
							<p className="f4 who_dis">Devendra Dhaigude graduates from JRVGTI, Pune 2012. After graduation Devendra Dhaigude working with renowned architects Mr.Shrikant Lele and Mr.Lakshman Moirangthem (M/s SI Architects) for 3 years. After worked with SI Architects for 3 years Devendra established an independent practice in Pune with his friend Mr.Hemant Dhankawade who gained his experience in Civil Engineer. Devendra and Hemant established Vivid Design Studio on 2016 at Pune.</p>
							<h1>WHY CHOOSE US?</h1>
							<div className="pb4 feature_list" >
								 <div className="pa2"><FiCheck className="mr2" size='1.6rem'/>Timely completion with Customer satisfaction</div>
								 <div className="pa2"><FiCheck className="mr2" size='1.6rem'/>Best Utilization of available space</div>
								 <div className="pa2"><FiCheck className="mr2" size='1.6rem'/> Professional & Exellence in work</div>
								 <div className="pa2"><FiCheck className="mr2" size='1.6rem'/> All services under one roof</div>
								 <div className="pa2"><FiCheck className="mr2" size='1.6rem'/>Creative Design Options</div>
								 <div className="pa2"><FiCheck className="mr2" size='1.6rem'/>Transperancy with clients</div>
						 </div>
					</div>
			</div>
       <p className="mt5 f1" >OUR PROCESS<br/>
			   <span className="f4 gray">------------------------------</span>
				</p>
			 <div className=" processbox" >
			    <div className="bestservices">
					   <p className="f3 gray">[Our Benefits]</p>
						 <p className="f2">Our Best Services</p>
             <p className="f4 ph5" style={{textAlign:'left',lineHeight: 'calc(22/13)'}}>An interior designer is someone who plans, researches, coordinates, and manages such projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design.</p>
						 <div className="category-button center">
							 <Link to='/#trending'><button className="butt1">View Project</button></Link>
							 <hr className="btn-bottom1"></hr>
							 <hr className="right1"></hr>
						</div>

					</div>
			    <div className=" white pl3 execute ">
			 				<div className="process shadow-3 ma3 pa3" style={{lineHeight: 'calc(22/13)',textAlign:'start'}}>
                <BsPeopleFill size='2.5rem'/>
								<p style={{fontSize:'30px'}}>  MEET <sup> 01</sup></p>
			 					<p style={{fontSize:'18px'}}>Detailed understanding of clients requirements & timeline.</p>
			 				</div>
			 				<div className="process shadow-3 ma3 pa3" style={{lineHeight: 'calc(22/13)',textAlign:'start'}}>
                <RiDiscussFill size='2.5rem'/>
								<p style={{fontSize:'30px'}}>  DISCUSS <sup> 02</sup></p>
			 					<p style={{fontSize:'18px'}}>Based on requirements, we provide best designs & layout options.</p>
			 				</div>
			 				<div className="process shadow-3 ma3 pa3 " style={{lineHeight: 'calc(22/13)',textAlign:'start'}}>
                <RiCalendarTodoFill size='2.5rem'/>
								<p style={{fontSize:'30px'}}>  PLAN <sup> 03</sup></p>
			 					<p style={{fontSize:'18px'}}>Making detail drawings which will help us to make things easy to understand for client as well as us.</p>
			 				</div>
			 				<div className="process shadow-3  ma3 pa3" style={{lineHeight: 'calc(22/13)',textAlign:'start'}}>
                <AiOutlineFileDone size="2.5rem"/>
								<p style={{fontSize:'30px'}}>  EXECUTE <sup> 04</sup></p>
			 					<p style={{fontSize:'18px'}}>Our best engineers/architects gives right direction to execute approved planning.</p>
			 				</div>
			 		</div>
				</div>
				<div className="testimonialback">
					<p className="white f1 pt5">Testimonials</p>
					<div className="testimonial ma3">
						<img className="testimonialimage" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" style={{height: '70vh', objectFit: 'cover'}}/>
						<Carousel className="bg-black ml2" breakPoints={breakPoints} style={{textAlign: 'left', opacity:'0.8'}}>
							<div className="carousel_item ">
								<p className="f2">WHAT CLIENT SAY</p>
								<p className="f3 gray">-[Token of Appriciations]</p>
								<p className="f3">" I am one of the happiest customer, they are very innovative and versitile, always come up with fresh design which is sutaible for our requirments. "</p>
								<p>-Vishal Shete</p>
								<p>Engineer</p>
							</div>
							<div className="carousel_item ">
								<p className="f2">WHAT CLIENT SAY</p>
								<p className="f3 gray">[Token of Appriciations]</p>
                <p  className="f3">" Classic interior,decent color cominations an sobar choices.. Experience greatness even after 1 year. professional, flexible and excellent team, Awesome Job! "</p>
								<p>-Pradyumna Deshpande</p>
								<p>Engineer</p>
							</div>
							<div className="carousel_item ">
								<p className="f2">WHAT CLIENT SAY</p>
								<p className="f3 gray">[Token of Appriciations]</p>
								<p className="f3">" They have provided quality and best solutions as per my requirments and budget, Always recommendaded!! "</p>
								<p>-Naresh Rai</p>
								<p>Software Engineer</p>
							</div>
						</Carousel>
				 </div>
				</div>
				<div className="footer-container" id="contactus" >
						<ContactUs />
						<Connect />
				</div>
		</div>

	)
}

export default Footer;
