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
	}

  handleForm = () =>{
		fetch('http://localhost:3000/contact', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name: this.state.name,
					email: this.state.email,
					message: this.state.message
			})
		})
		.then(response => response.json())
		.then(resp => {
			if(resp==='Success')
			{
			alert('Your message was recieved successfully.Thank you for your feedback.')
			}
		})
		.catch(err => {
			console.log(err)
			alert('OOPS....something went wrong.Please try again.')
		})
		this.setState({name: '', email: '', message: ''});
	}

	handleChange = (event) => {
		const {value, name} = event.target;
	  this.setState({[name]: value});
	}

	render() {
		return (
			<div className="contact-container">
				<p className="title">Contact Us</p>
				<form onSubmit ={this.handleSubmit} className="form-container center ">
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
					<CustomButton onClick={this.handleForm}>Contact Us</CustomButton>
				</form>
			</div>
		)
	}
}

export default ContactUs;
