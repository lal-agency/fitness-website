"use client"

import register from "..//../public/assets/images/register-society.jpg"
import Image from "next/image"
import Link from "next/link"
import { Content, Montserrat } from "next/font/google"
import { FaChevronCircleRight } from "react-icons/fa"
import trainer from "../../public/assets/images/images.jpg"

const montserrat = Montserrat({
	weight: "700",
	subsets: ["latin"],
})

const montserrat2 = Montserrat({
	weight: "500",
	subsets: ["latin"],
})

function RegistrationForm() {
	return (
		<section className="mb-20">
			<div className="section-heading">
				<h2 className="text-[10px]">
					Ongoing <em>Registrations</em>
				</h2>
			</div>
			<div className={montserrat.className}>
				<div className="gap-10 md:ml-4 mx-2 reg-div">
					<Link
						href="/register/society"
						className="mb-4 md:mb-0 hover:scale-105 transition-all ease-in-out">
						<div className="reg-form">
							<Image
								className="md:w-[100%]"
								height={250}
								src={register}
								alt="Register society"
							/>
						</div>
					</Link>
					<Link
						href="/register/trainer"
						className="md:h-[50%] md:pb-4   bottom-4 md:relative items-center hover:scale-105 transition-all ease-in-out md:w-[58%] bg-[#201c1c] rounded-3xl  flex">
						<div className="md:flex-col inline-block md:pb-[2.2rem] ">
							<div className="text-white text-[0.7rem] whitespace-nowrap md:text-[1.2rem] mt-4 ml-4">
								REGISTER AS A TRAINER
							</div>
							<div className={montserrat2.className}>
								<div className="ml-4 mt-2">
									<span className="text-white text-[0.5rem] md:text-[0.85rem] flex items-center gap-2 mb-2">
										<FaChevronCircleRight color="white" />
										Join the aspiring community
									</span>
									<span className="text-white text-[0.5rem] md:text-[0.85rem] flex items-center gap-2 mb-2">
										<FaChevronCircleRight color="white" />
										Train Aspiring Individuals
									</span>
									<span className="text-white text-[0.5rem] md:text-[0.85rem] flex items-center gap-2 mb-2">
										<FaChevronCircleRight color="white" />
										Get to work in a vibrant community
									</span>
								</div>
							</div>
						</div>
						<div className="mr-2 pb-4 md:pb-0">
							<div className="rounded-md">
								<Image
									className="md:mb-8 rounded-3xl pt-[15%] px-2 pl-4 w-[90%]  "
									src={trainer}
									height={50}
									alt="trainer"></Image>
								<div className="whitespace-nowrap py-2 bg-white h-fit w-fit md:px-8 text-black ml-4  px-4 md:py-[2rem] rounded-2xl  text-[0.5rem] font-bold md:text-sm mt-2">
									REGISTER TODAY
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default RegistrationForm
