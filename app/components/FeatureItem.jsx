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
								<h2>
									Choose <em>Program</em>
								</h2>
								<Image
									src="/assets/images/line-dec.png"
									alt="waves"
									width={50}
									height={25}
								/>
								<p>
									Training Studio is free CSS template for gyms and fitness
									centers. You are allowed to use this layout for your business
									website.
								</p>
							</div>
						</div>
						<div className="col-lg-6">
							<ul className="features-items">
								<li className="feature-item">
									<div className="left-icon">
										<Image
											src="/assets/images/features-first-icon.png"
											alt="First One"
											width={100}
											height={100}
										/>
									</div>
									<div className="right-content">
										<h4>Basic Fitness</h4>
										<p>
											Please do not re-distribute this template ZIP file on any
											template collection website. This is not allowed.
										</p>
										<a
											href="#"
											className="text-button">
											Discover More
										</a>
									</div>
								</li>
								<li className="feature-item">
									<div className="left-icon">
										<Image
											src="/assets/images/features-first-icon.png"
											alt="second one"
											width={100}
											height={100}
										/>
									</div>
									<div className="right-content">
										<h4>New Gym Training</h4>
										<p>
											If you wish to support TemplateMo website via PayPal,
											please feel free to contact us. We appreciate it a lot.
										</p>
										<a
											href="#"
											className="text-button">
											Discover More
										</a>
									</div>
								</li>
								<li className="feature-item">
									<div className="left-icon">
										<Image
											src="/assets/images/features-first-icon.png"
											alt="third gym training"
											width={100}
											height={100}
										/>
									</div>
									<div className="right-content">
										<h4>Basic Muscle Course</h4>
										<p>
											Credit goes to{" "}
											<a
												rel="nofollow"
												href="https://www.pexels.com"
												target="_blank">
												Pexels website
											</a>{" "}
											for images and video background used in this HTML
											template.
										</p>
										<a
											href="#"
											className="text-button">
											Discover More
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
											src="/assets/images/features-first-icon.png"
											alt="fourth muscle"
											width={100}
											height={100}
										/>
									</div>
									<div className="right-content">
										<h4>Advanced Muscle Course</h4>
										<p>
											You may want to browse through{" "}
											<a
												rel="nofollow"
												href="https://templatemo.com/tag/digital-marketing"
												target="_parent">
												Digital Marketing
											</a>{" "}
											or{" "}
											<a href="https://templatemo.com/tag/corporate">
												Corporate
											</a>{" "}
											HTML CSS templates on our website.
										</p>
										<a
											href="#"
											className="text-button">
											Discover More
										</a>
									</div>
								</li>
								<li className="feature-item">
									<div className="left-icon">
										<Image
											src="/assets/images/features-first-icon.png"
											alt="training fifth"
											width={100}
											height={100}
										/>
									</div>
									<div className="right-content">
										<h4>Yoga Training</h4>
										<p>
											This template is built on Bootstrap v4.3.1 framework. It
											is easy to adapt the columns and sections.
										</p>
										<a
											href="#"
											className="text-button">
											Discover More
										</a>
									</div>
								</li>
								<li className="feature-item">
									<div className="left-icon">
										<Image
											src="/assets/images/features-first-icon.png"
											alt="gym training"
											width={100}
											height={100}
										/>
									</div>
									<div className="right-content">
										<h4>Body Building Course</h4>
										<p>
											Suspendisse fringilla et nisi et mattis. Curabitur sed
											finibus nisi. Integer nibh sapien, vehicula et auctor.
										</p>
										<a
											href="#"
											className="text-button">
											Discover More
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
