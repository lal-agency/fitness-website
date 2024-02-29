import React from "react"
import Image from "next/image"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css" 
const ScheduleSection = () => {
    return (
			<section
				className="section"
				id="schedule">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<div className="section-heading dark-bg">
								<h2 className="hover:scale-105 transition-all ease-in-out">
									Classes <em>Schedule</em>
								</h2>
								<Image
									src="/assets/images/line-dec.png"
									alt=""
									width={50}
									height={25} // Set the height according to your needs
								/>
								<p>
									Explore our class schedule and find the perfect time to join
									our fitness classes. Whether {"you're"} an early bird or a
									night owl, we have classes to fit your schedule and help you
									stay on track with your fitness goals.
								</p>
							</div>
						</div>
					</div>
					<div className="row hover:scale-105 transition-all ease-in-out">
						<div className="col-lg-12">
							<div className="filters">
								<ul className="schedule-filter">
									<li
										className="active"
										data-tsfilter="monday">
										Monday
									</li>
									<li data-tsfilter="tuesday">Tuesday</li>
									<li data-tsfilter="wednesday">Wednesday</li>
									<li data-tsfilter="thursday">Thursday</li>
									<li data-tsfilter="friday">Friday</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-10 offset-lg-1">
							<div className="schedule-table filtering">
								<table>
									<tbody>
										<tr>
											<td class="day-time">Fitness Class</td>
											<td
												class="monday ts-item show"
												data-tsmeta="monday">
												10:00AM - 11:30AM
											</td>
											<td
												class="tuesday ts-item"
												data-tsmeta="tuesday">
												2:00PM - 3:30PM
											</td>
											<td>William G. Stewart</td>
										</tr>
										<tr>
											<td class="day-time">Muscle Training</td>
											<td
												class="friday ts-item"
												data-tsmeta="friday">
												10:00AM - 11:30AM
											</td>
											<td
												class="thursday friday ts-item"
												data-tsmeta="thursday">
												2:00PM - 3:30PM
											</td>
											<td>Paul D. Newman</td>
										</tr>
										<tr>
											<td class="day-time">Body Building</td>
											<td
												class="tuesday ts-item"
												data-tsmeta="tuesday">
												10:00AM - 11:30AM
											</td>
											<td
												class="monday ts-item show"
												data-tsmeta="monday">
												2:00PM - 3:30PM
											</td>
											<td>Boyd C. Harris</td>
										</tr>
										<tr>
											<td class="day-time">Yoga Training Class</td>
											<td
												class="wednesday ts-item"
												data-tsmeta="wednesday">
												10:00AM - 11:30AM
											</td>
											<td
												class="friday ts-item"
												data-tsmeta="friday">
												2:00PM - 3:30PM
											</td>
											<td>Hector T. Daigle</td>
										</tr>
										<tr>
											<td class="day-time">Advanced Training</td>
											<td
												class="thursday ts-item"
												data-tsmeta="thursday">
												10:00AM - 11:30AM
											</td>
											<td
												class="wednesday ts-item"
												data-tsmeta="wednesday">
												2:00PM - 3:30PM
											</td>
											<td>Bret D. Bowers</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
}

export default ScheduleSection
