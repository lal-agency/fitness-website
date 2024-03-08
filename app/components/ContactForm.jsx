"use client"
import React from "react"
import {useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import emailjs from "@emailjs/browser"
import { useRouter } from "next/navigation"

const ContactForm = () => {
	const router = useRouter()
	const [formData, setFormData] = useState(
		{
			name: "",
			email: "",
			contact: "",
			subject: "",
			message: "",
		}
	)
	const handleForm  = (e) => {
		e.preventDefault()
		setFormData({...formData, [e.target.name] : e.target.value})
	}
	const sendMail = () => {
		var templateParams = {
			from_name : formData.name,
			from_email : formData.email,
			contact_no : formData.contact,
			subject: formData.subject,
			message: formData.message
		}

		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				templateParams,
		{
			publicKey: "TjlM_eIgaNO94FtWz",
		}
			)
			.then(
				(response) => {
					toast.success("Response is Sent Successfully!")
					console.log("SUCCESS!", response.status, response.text)
					setTimeout(() => {
						router.refresh()
					}, 2000);
				},
				(error) => {
					toast.waringing("Error: " + error.message)
					console.log("FAILED...", error)
				}
			)
	}

	return (
		<section
			className="section"
			id="contact-us">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-xs-12">
						<div id="map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7975310219426!2d77.71484803723521!3d12.984798014646106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11920f3f2bd5%3A0xe7d2658528af63af!2sGopalan%20International%20School%20Swimming%20Pool!5e0!3m2!1sen!2sin!4v1709874964082!5m2!1sen!2sin"
								width="100%"
								height="650px"
								style={{ border: "0" }}
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-xs-12">
						<div className="contact-form">
							<h3 className="text-center font-bold mb-2 text-white">
								Message Us For Personal Training
							</h3>
							<p className="text-center text-green-500 font-mono text-xl mb-10">
								Get Trained By the best trainers!
							</p>
							<div id="contact">
								<div className="row">
									<div className="col-md-6 col-sm-12">
										<fieldset>
											<input
												onChange={handleForm}
												name="name"
												type="text"
												id="name"
												placeholder="Your Name*"
												required=""
											/>
										</fieldset>
									</div>
									<div className="col-md-6 col-sm-12">
										<fieldset>
											<input
												onChange={handleForm}
												name="email"
												type="text"
												id="email"
												pattern="[^ @]*@[^ @]*"
												placeholder="Your Email*"
												required=""
											/>
										</fieldset>
									</div>

									<div className="col-md-12 col-sm-12">
										<fieldset>
											<input
												onChange={handleForm}
												name="contact"
												type="text"
												pattern="[0-9]{1,12}$"
												id="subject"
												placeholder="Contact Number"
												required
											/>
										</fieldset>
									</div>

									<div className="col-md-12 col-sm-12">
										<fieldset>
											<input
												onChange={handleForm}
												name="subject"
												type="text"
												id="subject"
												placeholder="Subject"
											/>
										</fieldset>
									</div>
									<div className="col-lg-12">
										<fieldset>
											<textarea
												onChange={handleForm}
												name="message"
												rows="6"
												id="message"
												placeholder="Message"
												required=""></textarea>
										</fieldset>
									</div>
									<div className="col-lg-12">
										<fieldset>
											<button
												type="submit"
												id="form-submit"
												onClick={sendMail}
												className="main-button">
												Send Message
											</button>
										</fieldset>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer
				position="top-right"
				hideProgressBar={true}
				autoClose={2000}
			/>
		</section>
	)
}

export default ContactForm
