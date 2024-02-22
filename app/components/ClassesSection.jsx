import React from "react"
import Image from 'next/image'
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css" 
const ClassesSection = () => {
    return (
			<section
				className="section"
				id="our-classes">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<div className="section-heading">
								<h2>
									Our <em>Classes</em>
								</h2>
								<Image
									src="/assets/images/line-dec.png"
									alt=""
									width={50}
									height={25}
								/>
								<p>
									Nunc urna sem, laoreet ut metus id, aliquet consequat magna.
									Sed viverra ipsum dolor, ultricies fermentum massa consequat
									eu.
								</p>
							</div>
						</div>
					</div>
					<div
						className="row"
						id="tabs">
						<div className="col-lg-4">
							<ul>
								<li>
									<a href="#tabs-1">
										<Image
											src="/assets/images/tabs-first-icon.png"
											alt=""
											width={50}
											height={50}
										/>
										First Training Class
									</a>
								</li>
								<li>
									<a href="#tabs-2">
										<Image
											src="/assets/images/tabs-first-icon.png"
											alt=""
											width={50}
											height={50}
										/>
										Second Training Class
									</a>
								</li>
								<li>
									<a href="#tabs-3">
										<Image
											src="/assets/images/tabs-first-icon.png"
											alt=""
											width={50}
											height={50}
										/>
										Third Training Class
									</a>
								</li>
								<li>
									<a href="#tabs-4">
										<Image
											src="/assets/images/tabs-first-icon.png"
											alt=""
											width={50}
											height={50}
										/>
										Fourth Training Class
									</a>
								</li>
								<div className="main-rounded-button">
									<a href="#">View All Schedules</a>
								</div>
							</ul>
						</div>
						<div className="col-lg-8">
							<section className="tabs-content">
								<article id="tabs-1">
									<Image
										src="/assets/images/training-image-01.jpg"
										alt="First Class"
										width={600}
										height={250}
									/>
									<h4>First Training Class</h4>
									<p>
										Phasellus convallis mauris sed elementum vulputate. Donec
										posuere leo sed dui eleifend hendrerit. Sed suscipit
										suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum
										sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat
										imperdiet, molestie nunc ut, accumsan diam.
									</p>
									<div className="main-button">
										<a href="#">View Schedule</a>
									</div>
								</article>
								{/* Articles for other classes go here */}
							</section>
						</div>
					</div>
				</div>
			</section>
		)
}

export default ClassesSection