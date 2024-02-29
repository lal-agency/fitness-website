import register from "..//../public/assets/images/register-society.jpg";
import Image from "next/image"
import Link from "next/link"
import { Content, Montserrat } from "next/font/google"
import { FaChevronCircleRight } from "react-icons/fa"
import trainer from '../../public/assets/images/images.jpg'
const montserrat = Montserrat({
	weight: "700",
	subsets: ["latin"],
})

const montserrat2 = Montserrat({
	weight: "500",
	subsets: ["latin"],
})
function RegistrationForm() {
    const styles = {
        paddingLeft: "50px",
        paddingTop: "50px"
    }

    return (
			<div className={montserrat.className}>
				<div className="flex gap-10 m-10">
					<Link href="/register/society">
						<div style={styles}>
							<Image
								width={625}
								height={250}
								src={register}
								alt="Register society"
							/>
						</div>
					</Link>
					<div className="h-80vh w-[50%] mt-[4%] bg-[#201c1c]  rounded-2xl flex">
						<div className=" flex-col">
							<div className="text-white text-[1.2rem] mt-4 ml-4 ">
								REGISTER AS A TRAINER
							</div>
							<div className={montserrat2.className}>
								<div className="text-white text-[1.1rem] ml-4 ">
									for residential sports coaching
								</div>

								<div className="ml-4 mt-2">
									<span className="text-white text-[0.9rem] flex items-center gap-2 mb-2">
										<FaChevronCircleRight color="white" />
										Join the aspiring community
									</span>
									<span className="text-white text-[0.9rem] flex items-center gap-2 mb-2">
										<FaChevronCircleRight color="white" />
										Join the aspiring community
									</span>
									<span className="text-white text-[0.9rem] flex items-center gap-2 mb-2">
										<FaChevronCircleRight color="white" />
										Join the aspiring community
									</span>
									<span className="text-white text-[0.9rem] flex items-center gap-2 mb-2">
										<FaChevronCircleRight color="white" />
										Join the aspiring community
									</span>
								</div>
							</div>
						</div>
						<divv>
							<Image
							className=" rounded-md pt-5 px-2 pl-4 w-full "
								src={trainer}
								height={50}
								alt="trainer"></Image>
							<div className="bg-white h-fit w-fit px-7 py-[5%] rounded-2xl  text-sm mt-8">
								REGISTER TODAY
							</div>
						</divv>
					</div>
				</div>
			</div>
		)
}

export default RegistrationForm