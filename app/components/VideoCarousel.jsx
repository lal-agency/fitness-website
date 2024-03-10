"use client"
import {useState } from "react"
import { Carousel } from "react-bootstrap"
import {items} from '../../public/Items.json'
import  "../../public/assets/css/bootstrap.min.css"
import ReactPlayer from "react-player"
import { setInterval } from "timers"



export default function VideoCarousel() {
	const [toPlay, settoPlay] = useState(false)
	setInterval(()=>{
	settoPlay(true)}, 4000);

	const { bootstrap } = items
	const [index, setIndex] = useState(0)
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex)
	}
	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			interval={4000} // Set the interval to 4 seconds
			autoplay={true} // Enable autoplay
			touch={true} // Enable swipe to shift
		>
			{bootstrap.map((item) => (
				<Carousel.Item
					key={item.id}
					interval={4000}
				>
					<ReactPlayer
						muted={true}
						playing={toPlay}
						loop={true}
						width="100%"
						height="400px"
						url={item.videoUrl}
					/>
					<source
						src={item.videoUrl}
						type="video/mp4"
					/>
					<Carousel.Caption style={{ color: "white" }}>
						<h5 className="font-mono  font-bold text-green-400">{item.title}</h5>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	)
}
