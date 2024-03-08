"use client"
import { useState } from "react"
import { Carousel } from "react-bootstrap"
import {items} from '../../public/Items.json'
import  "../../public/assets/css/bootstrap.min.css"
import Image from 'next/image'
import ReactPlayer from "react-player"



export default function VideoCarousel() {
	const { bootstrap } = items
	const [index, setIndex] = useState(0)
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex)
	}
	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}>
			{bootstrap.map((item) => (
				<Carousel.Item
					key={item.id}
					interval={4000}>
					<ReactPlayer
						playIcon
						playing={true}
						width="100%"
						height="400px"
						url={item.videoUrl}
						controls={false}
						light={false}
						pip={true}
					/>
					<source
						src={item.videoUrl}
						type="video/mp4"
					/>
					<Carousel.Caption style={{ color: "white" }}>
						<h4 className="font-mono font-bold text-green-400">{item.title}</h4>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	)
}
