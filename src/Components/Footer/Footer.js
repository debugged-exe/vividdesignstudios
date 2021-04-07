import React from 'react';
import Connect from './Connect/Connect.js';
import ContactUs from './ContactUs/ContactUs.js';
import './Footer.scss';

const Footer = () => {
	return (
		<div className="footer-container">
			<Connect />
			<ContactUs />
		</div>
	)
}

export default Footer;