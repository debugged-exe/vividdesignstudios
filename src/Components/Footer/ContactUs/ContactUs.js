import React from 'react';
import FormInput from '../../FormInput/FormInput.js';
import './ContactUs.scss';
import CustomButton from '../../CustomButton/CustomButton.js';


const initialState = {
	name: '',
	email: '',
	message: ''
}

class ContactUs extends React.PureComponent {
	constructor(){
		super();
		this.state = initialState;
	}

	handleSubmit = (event) =>
	{
		event.prefentDefault();
		console.log(this.state);

		this.setState({name: '', email: '', message: ''});
	}

	handleChange = (event) => {
		const {value, name} = event.target;
		this.this.setState({[name]: value});
	}

	render() {
		return (
			<div className="contact-container">
				<p className="title">Contact Us</p>
				<form onSubmit={this.handleSubmit} className="form-container center ">
					<FormInput
					label="Name"
					name="name"
					type="text"
					value={this.state.name}
					handleChange={this.handleChange}
					required
					/>
					<FormInput
					label="Email"
					name="email"
					type="email"
					value={this.state.email}
					handleChange={this.handleChange}
					required
					/>
					<FormInput
					label="Message"
					name="message"
					type="text"
					value={this.state.message}
					handleChange={this.handleChange}
					required
					/>
					<CustomButton type="submit">Contact Us</CustomButton>
				</form>
			</div>
		)
	}
}

export default ContactUs;
