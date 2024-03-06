import React from "react"
import Image from "next/image"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css" 
const TrainersSection = () => {
    return (
			<section
				className="section"
				id="our-trainers">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<div className="section-heading">
								<h2 className="hover:scale-105 transition-all ease-in-out">
									Expert <em>Trainers</em>
								</h2>
								<Image
									src="/assets/images/line-dec.png"
									alt=""
									width={50}
									height={25}
								/>
								<p>
									Our team of expert trainers is dedicated to helping you reach
									your fitness goals with personalized guidance and support
									tailored to your needs.
								</p>
							</div>
						</div>
						<div className="row">
							{/* Trainer 1 */}
							<div className="col-lg-4 hover:scale-105 transition-all ease-in-out">
								<div className="trainer-item">
									<div className="image-thumb">
										<Image
											src="/assets/images/first-trainer.jpg"
											alt=""
											width={250} // Set appropriate width for the image
											height={200} // Set appropriate height for the image
										/>
									</div>
									<div className="down-content hover:scale-105 transition-all ease-in-out">
										<span>Strength Trainer</span>
										<h4>Bret D. Bowers</h4>
										<p>
											With over a decade of experience in strength training,
											Bret D. Bowers is dedicated to helping individuals
											maximize their strength potential and achieve their
											fitness goals.
										</p>

										<ul className="social-icons">
											<li>
												<a href="#">
													<i className="fa fa-facebook"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-linkedin"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-behance"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* Trainer 2 */}
							<div className="col-lg-4 hover:scale-105 transition-all ease-in-out">
								<div className="trainer-item">
									<div className="image-thumb">
										<Image
											src="/assets/images/second-trainer.jpg"
											alt=""
											width={250} // Set appropriate width for the image
											height={200} // Set appropriate height for the image
										/>
									</div>
									<div className="down-content hover:scale-105 transition-all ease-in-out">
										<span>Muscle Trainer</span>
										<h4>Hector T. Daigl</h4>
										<p>
											Hector T. Daigl is a seasoned fitness instructor with a
											passion for helping others achieve their health and
											wellness goals through personalized training programs and
											motivational support.
										</p>

										<ul className="social-icons">
											<li>
												<a href="#">
													<i className="fa fa-facebook"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-linkedin"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-behance"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* Trainer 3 */}
							<div className="col-lg-4 hover:scale-105 transition-all ease-in-out">
								<div className="trainer-item">
									<div className="image-thumb">
										<Image
											src="/assets/images/third-trainer.jpg"
											alt=""
											width={250} // Set appropriate width for the image
											height={200} // Set appropriate height for the image
										/>
									</div>
									<div className="down-content hover:scale-105 transition-all ease-in-out">
										<span>Power Trainer</span>
										<h4>Paul D. Newman</h4>
										<p>
											Paul D. Newman is a certified personal trainer with a
											focus on holistic wellness and functional fitness. With
											his expertise and guidance, you can embark on a journey
											towards a healthier and happier lifestyle.
										</p>

										<ul className="social-icons">
											<li>
												<a href="#">
													<i className="fa fa-facebook"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-linkedin"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-behance"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
}

export default TrainersSection
