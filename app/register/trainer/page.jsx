"use client"
import "../../../public/assets/css/register-form.css"
import { Content, Montserrat } from "next/font/google"
import Image from "next/image"
import register from "../../../public/assets/images/register.jpg"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { Navigate } from "react-router-dom"
const montserrat = Montserrat({
	weight: "700",
	subsets: ["latin"],
})

function Page() {
	const handleForm = (e) => {
		e.preventDefault()
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
	const submitForm = async (e) => {
		e.preventDefault()
		if (checked === false) {
			toast.warning("Please confirm the availability!")
			return null
		}
		await axios
			.post(
				"/api/register/coach",
				{
					formData: formData,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((res) => {
				console.log(res)
				toast.success("Your Response is saved successfully!")
				setTimeout(() => {
					window.open("/")
				}, 3000)
			})
			.catch((err) => {
				console.log("err" + err)
			})
	}
	const [checked, setChecked] = useState(false)

	const [formData, setFormData] = useState({
		Name: "",
		contact_number: "",
		society_name: "",
		sports: "",
		city: "",
		pincode: "",
	})
	const handleChecked = () => {
		setChecked(!checked)
	}

	return (
		<div className={montserrat.className}>
			<div className="main">
				<div className="image-container">
					{" "}
					<Image
						width={400}
						height={400}
						src={register}
						alt="register-vector"
					/>
				</div>
				<div className="main-container">
					<div id="title">Fill in the form to register your society now!</div>
					<div className="">
						<form
							className="form-container"
							onSubmit={submitForm}>
							<input
								type="text"
								name="Name"
								placeholder="Name"
								onChange={handleForm}
								required
							/>
							<input
								type="text"
								name="contact_number"
								placeholder="contact number"
								onChange={handleForm}
								required
							/>
							<input
								type="text"
								name="society_name"
								placeholder="society name"
								onChange={handleForm}
								required
							/>
							<input
								type="text"
								name="sports"
								placeholder="sports"
								onChange={handleForm}
								required
							/>
							<input
								type="text"
								name="city"
								placeholder="city"
								onChange={handleForm}
								required
							/>
							<input
								type="text"
								name="pincode"
								placeholder="pincode"
								onChange={handleForm}
								required
							/>
							<div className="bottom-container">
								<input
									type="checkbox"
									checked={checked}
									onChange={handleChecked}
								/>
								<p className="text-green font-bold">
									The required sport facility is available at the mentioned
									address.
								</p>
							</div>
							<button className="button">Register Now</button>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer
				position="top-right"
				hideProgressBar={true}
			/>
		</div>
	)
}

export default Page
