import React from "react"
import Image from 'next/image'
const FeaturesSection = () => {
	return (
		<section
			className="section"
			id="features">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<div className="section-heading">
							<h2 className="hover:scale-105 transition-all ease-in-out">
								Choose <em>Program</em>
							</h2>
							<Image
								src="/assets/images/line-dec.png"
								alt="waves"
								width={50}
								height={25}
							/>
							<p className="hover:scale-105 transition-all ease-in-out">
								Experience the comfort of personalized sports coaching right at
								your doorstep with Khelhood.com.
							</p>
						</div>
					</div>
					<div className="col-lg-6">
						<ul className="features-items">
							<li className="feature-item">
								<div className="left-icon">
									<Image
										src="/assets/images/features-first-icon.jpg"
										alt="First One"
										width={100}
										height={100}
									/>
								</div>
								<div className="right-content hover:scale-105 transition-all ease-in-out">
									<h4>Table Tennis</h4>
									<p>
										Begin with our Basic Table Tennis program, customized to
										elevate your skills and meet your playing objectives.
									</p>
									<a
										href="#"
										className="text-button">
										Learn More
									</a>
								</div>
							</li>
							<li className="feature-item">
								<div className="left-icon">
									<Image
										src="/assets/images/features-first-icon.jpg"
										alt="second one"
										width={100}
										height={100}
									/>
								</div>
								<div className="right-content hover:scale-105 transition-all ease-in-out">
									<h4>Fitness Training</h4>
									<p>
										Begin with our Basic Fitness program, tailored to meet your
										health and wellness goals.
									</p>

									<a
										href="#"
										className="text-button">
										Learn More
									</a>
								</div>
							</li>
						</ul>
					</div>
					<div className="col-lg-6">
						<ul className="features-items">
							<li className="feature-item">
								<div className="left-icon">
									<Image
										src="/assets/images/features-first-icon.jpg"
										alt="fourth muscle"
										width={100}
										height={100}
									/>
								</div>
								<div className="right-content hover:scale-105 transition-all ease-in-out">
									<h4>Sports Training</h4>
									<p>
										Take your training to the next level with our Advanced
										Muscle Course designed to push your limits and maximize
										results.
									</p>

									<a
										href="#"
										className="text-button">
										Learn More
									</a>
								</div>
							</li>
							<li className="feature-item">
								<div className="left-icon">
									<Image
										src="/assets/images/features-first-icon.jpg"
										alt="training fifth"
										width={100}
										height={100}
									/>
								</div>
								<div className="right-content hover:scale-105 transition-all ease-in-out">
									<h4>Yoga Training</h4>
									<p>
										Experience the balance of mind, body, and soul with our Yoga
										Training sessions, tailored to enhance flexibility and inner
										peace.
									</p>

									<a
										href="#"
										className="text-button">
										Learn More
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeaturesSection
