import React from "react"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css" 
import { Montserrat } from "next/font/google"
import { FaPhoneAlt } from "react-icons/fa"


const montserrat2 = Montserrat({
	weight: "500",
	subsets: ["latin"],
})
const Footer = () => {
	return (
		<footer className={montserrat2.className}>
			<div className="container md:flex  md:justify-between md:items-center my-4 px-4 flex-col ">
				<div className="row text-lg pb-2">
					<div className="col-lg-12 justify-between flex">
						<p className="text-sm">
							Copyright &copy; 2024 KhelHood- Designed by{" "}
							<a
								rel="nofollow"
								href="https://templatemo.com"
								className="tm-text-link"
								target="_parent">
								Craftman Agency
							</a>
						</p>
					</div>
				</div>
				<div className="row md:pr-10 justify-center items-center pt-4 ">
					<ul className="social-icons flex-col gap-10 scale-95 md:scale-150 ">
						<div className="flex item-center gap-4 justify-center pb-2">
							<p className="w-fit h-fit py-1 px-2 bg-blue-500 rounded-md text-white">
								Follow us on
							</p>
							{/* If needed can be added in the future. */}
							{/* <li>
							<a
								href="https://www.facebook.com"
								className="fa fa-facebook"></a>
						</li>
						<li>
							<a
								href="https://www.twitter.com"
								className="fa fa-twitter"></a>
						</li>
						<li>
							<a
								href="https://www.instagram.com"
								className="fa fa-instagram"></a>
						</li> */}
							<li>
								<a
									href="https://www.linkedin.com/groups/14117351/"
									className="fa fa-linkedin"></a>
							</li>
						</div>
						<div className="flex  items-center gap-4">
							<div className="flex gap-2 items-center">
								<FaPhoneAlt size={15} />
								<p className="text-[0.7rem]">Contacts Numbers: </p>
							</div>
							<div className="flex-col text-[0.7rem] text-blue-500">
								<div>+91 8686956426</div>
								<div>+91 883-9279580</div>
							</div>
						</div>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
