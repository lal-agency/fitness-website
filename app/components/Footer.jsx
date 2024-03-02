import React from "react"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css" 
import { Montserrat } from "next/font/google"

const montserrat2 = Montserrat({
	weight: "500",
	subsets: ["latin"],
})
const Footer = () => {
	return (
		<footer className={montserrat2.className}>
			<div className="container flex justify-between my-4">
				<div className="row text-lg">
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
				<div className="row">
					<ul className="social-icons flex  gap-10 scale-150">
						<p className="w-fit px-2 bg-blue-500 rounded-md text-white">
							Follow us on
						</p>
						<li>
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
						</li>
						<li>
							<a
								href="https://www.linkedin.com"
								className="fa fa-linkedin"></a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
