import React from "react"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css" 
const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<p>
							Copyright &copy; 2020 Training Studio - Designed by{" "}
							<a
								rel="nofollow"
								href="https://templatemo.com"
								className="tm-text-link"
								target="_parent">
								TemplateMo
							</a>
							<br />
							Distributed by{" "}
							<a
								rel="nofollow"
								href="https://themewagon.com"
								className="tm-text-link"
								target="_blank">
								ThemeWagon
							</a>
						</p>
						{/* You shall support us a little via PayPal to info@templatemo.com */}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
