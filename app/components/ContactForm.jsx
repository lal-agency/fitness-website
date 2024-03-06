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
								src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
								width="100%"
								height="650px"
								frameBorder="0"
								style={{ border: "0" }}
								allowFullScreen></iframe>
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
							<div id="contact" >
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
