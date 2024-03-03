import React from "react"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css" 
const CallToAction = () => {
	return (
		<section
			className="section"
			id="call-to-action">
			<div className="container">
				<div className="row">
					<div className="col-lg-10 offset-lg-1">
						<div className="cta-content">
							<h2>
								Don’t <em>think</em>, begin <em>today</em>!
							</h2>
							<p>
								Dive into the world of sports, catering to beginners,
								intermediate and professionals of all age groups alike and get
								trained by professional and elite coaches and we prepare the
								players to become championship ready and start participating in
								the tournaments.
							</p>
							<div className="main-button scroll-to-section">
								<a href="/register/member">Become a member</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CallToAction
