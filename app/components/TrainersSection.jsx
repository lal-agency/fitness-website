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
						{/* Trainer 1 */}
						<div className="py-2 col-lg-4 hover:scale-105 transition-all ease-in-out">
							<div className="trainer-item">
								<div className="image-thumb">
									<div className="relative w-[100%] md:h-[250px] h-[150px]">
										<Image
											className="rounded-md object-cover"
											layout="fill"
											src="/assets/images/trainer1.jpeg"
											alt=""
										/>
									</div>
								</div>
								<div className="down-content">
									<span className="text-blue-500 m-10 pt-32">
										National Player & Coach
									</span>
									<h4>Pawan Das</h4>
									<p className="py-2 text-lg">
										A renowned national player and coach in Table Tennis, brings
										a wealth of experience and expertise to his training
										sessions, fostering excellence in both technique and
										strategy
									</p>

									{/* <ul
										className="social-icons"
										id="trainer-icons">
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
									</ul> */}
								</div>
							</div>
						</div>
						{/* Trainer 2 */}
						<div className="py-2 col-lg-4 hover:scale-105 transition-all ease-in-out">
							<div className="trainer-item">
								<div className="image-thumb">
									<div className="relative w-[100%] md:h-[250px] h-[150px]">
										<Image
											className="rounded-md object-cover"
											layout="fill"
											src="/assets/images/trainer2.jpeg"
											alt=""
										/>
									</div>
								</div>
								<div className="down-content">
									<span className="text-blue-500 m-10">
										Table Tennis Trainer
									</span>
									<h5>Sai Prashant</h5>
									<p className="py-2 text-lg">
										A distinguished Table Tennis trainer, specializes in honing
										the skills of aspiring players, instilling a winning
										mentality and a passion for the sport
									</p>

									{/* <ul
										className="social-icons"
										id="trainer-icons">
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
									</ul> */}
								</div>
							</div>
						</div>
						{/* Trainer 3 */}
						<div className="py-2 col-lg-4 hover:scale-105 transition-all ease-in-out">
							<div className="trainer-item">
								<div className="image-thumb">
									<div className="relative w-[100%] md:h-[250px] h-[150px]">
										<Image
											className="rounded-md object-cover"
											layout="fill"
											src="/assets/images/trainer3.jpeg"
											alt=""
										/>
									</div>
								</div>
								<div className="down-content">
									<span className="text-blue-500 m-10 py-4">
										Table Tennis Trainer
									</span>
									<h5>Tarun Verma</h5>
									<p className="py-2 text-lg">
										An accomplished coach in Table Tennis, utilizes innovative
										training methods to nurture the talents of his students,
										guiding them towards achieving their full potential on the
										table.
									</p>

									{/* <ul
										className="social-icons"
										id="trainer-icons">
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
									</ul> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
}

export default TrainersSection
