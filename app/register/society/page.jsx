'use client'
import '../../../public/assets/css/register-form.css'
import { Montserrat } from "next/font/google"
import Image from 'next/image'
import register from '../../../public/assets/images/register.jpg'
const montserrat = Montserrat({
	weight: "700",
	subsets: ["latin"],
})


function page() {
    const handleForm = () =>{

    }
  return (
		<div className={montserrat.className}>
			<div className="main">
				<div className='image-container'> <Image width={400} height={400} src={register} alt="register-vector" /></div>
				<div className="main-container">
					<div id="title">FILL IN THE FORM TO REGISTER NOW!</div>
					<div className="">
						<form
							onSubmit={handleForm}
							className="form-container">
							<input
								type="text"
								placeholder="Name"
							/>
							<input
								type="text"
								placeholder="contact number"
							/>
							<input
								type="text"
								placeholder="society name"
							/>
							<input
								type="text"
								placeholder="sports"
							/>
							<input
								type="text"
								placeholder="city"
							/>
							<div className="bottom-container">
								<input type="checkbox" />
								<p className="text-green font-bold">
									{" "}
									The required sport facility is available at the mentioned
									address.
								</p>
							</div>
							<button className="button">Register Now</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default page