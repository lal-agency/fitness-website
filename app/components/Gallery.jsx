import React from "react"
import Image from "next/image"
import VideoCarousel from "../components/VideoCarousel"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css"

function Gallery() {
	  return (
			<section
				className="section"
				id="our-classes">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<div className="section-heading">
								<h2>
									Our <em>Gallery</em>
								</h2>
							</div>
						</div>
					</div>
					<div className="row flex justify-center  p-4 shadow-lg shadow-blue-700 rounded-md">
						<VideoCarousel />
					</div>
				</div>
			</section>
		)

                                }
export default Gallery
