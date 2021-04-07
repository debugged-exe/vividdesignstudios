import React from 'react';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaFacebookF, FaWhatsapp, FaPhoneAlt, FaGooglePlusG} from 'react-icons/fa';
import { GoMail } from "react-icons/go";
import {ReactComponent as InstaLogo} from './insta.svg';
import './Connect.scss';

const Connect = () => {
	return (
		<div className="connect-container">
			<div className="social-links">
				<p className="social-label mb4">Connect With Us</p>
				<div className="social-logos">
					<FaGooglePlusG size="2em" color="black" className="mr2 grow logos pointer"/>
					<AiFillTwitterCircle size="2em" color="black" className="mr2 grow logos pointer"/>
					<InstaLogo className="logos grow pointer black" style={{width: '30px', height: '30px', color: 'black'}}/>
					<div className="links grow mb4 logos">
						<a href="https://wa.me/919730000815" className="a flex justify-center items-center">
							<FaWhatsapp size="2em" color="black" className="mr2 grow"/>
						</a>
					</div>
				</div>
				<div className="links ma2 mb3 logos">
						<a href='mailto:info@vividdesignstudio.in' style={{fontSize: '18px', letterSpacing: '1px', fontWeight: 'bold'}} className="flex justify-center items-center">
							<GoMail size="2em" color="black" className="mr2 "/>
							info@vividdesignstudio.in
						</a>
					</div>
					<div className="links logos ">
						<a href="tel:9108087885581" style={{fontSize: '18px', letterSpacing: '1px', fontWeight: 'bold'}} className="flex justify-center items-center">
							<FaPhoneAlt size="1.5em" color="black" className="mr2 "/>
							+91 08087885581
						</a>
					</div>
			</div>
			<div className="address mt4">
				<p>Vivid Design Studio, SNO-29, B-20, Saidham Building, Opp. Reliance Fresh, Bharati Vidyapeeth Rd, Shriram Nagar, Katraj, Pune, Maharashtra 411046</p>
			</div>
		</div>
	)
}

export default Connect;
