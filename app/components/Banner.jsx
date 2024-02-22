import React from "react"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css" 

const Banner = () => {
	return (
		<div
			className="main-banner"
			id="top">
			<video
				autoPlay
				muted
				loop
				id="bg-video">
				<source
					src="/assets/images/gym-video.mp4"
					type="video/mp4"
				/>
			</video>
			<div className="video-overlay header-text">
				<div className="caption">
					<h6>work harder, get stronger</h6>
					<h2>
						easy with our <em>gym</em>
					</h2>
					<div className="main-button scroll-to-section">
						<a href="#features">Become a member</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner