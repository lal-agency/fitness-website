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
		<div className={montserrat.className} id="contact-us">
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
					className="md:h-fit md:relative md:top-14 items-center hover:scale-105 transition-all ease-in-out md:w-[58%] bg-[#201c1c] rounded-2xl pb-2 flex">
					<div className="md:flex-col inline-block ">
						<div className="text-white text-[0.9rem] md:text-[1.2rem] mt-4 ml-4">
							REGISTER AS A TRAINER
						</div>
						<div className={montserrat2.className}>
							<div className="text-white text-[0.8rem] md:text-[1.1rem] ml-4">
								for residential sports coaching
							</div>
							<div className="ml-4 mt-2">
								<span className="text-white text-[0.6rem] md:text-[0.85rem] flex items-center gap-2 mb-2">
									<FaChevronCircleRight color="white" />
									Join the aspiring community
								</span>
								<span className="text-white text-[0.6rem] md:text-[0.85rem] flex items-center gap-2 mb-2">
									<FaChevronCircleRight color="white" />
									Train Aspiring Individuals
								</span>
								<span className="text-white text-[0.6rem] md:text-[0.85rem] flex items-center gap-2 mb-2">
									<FaChevronCircleRight color="white" />
									Get to work in a vibrant community
								</span>
								<span className="text-white text-[0.6rem] md:text-[0.85rem] flex items-center gap-2 mb-2">
									<FaChevronCircleRight color="white" />
									Best Perks
								</span>
							</div>
						</div>
					</div>
					<div className="mr-2">
						<div>
							<Image
								className=" rounded-md pt-[15%] px-2 pl-4 w-full  "
								src={trainer}
								height={50}
								alt="trainer"></Image>
							<div className="whitespace-nowrap py-2 bg-white h-fit w-fit md:px-8 text-black ml-4  px-4 md:py-[4%] rounded-2xl  text-[0.7rem] md:text-sm mt-6">
								REGISTER TODAY
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default RegistrationForm
