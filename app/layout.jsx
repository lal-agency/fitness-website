import page from './page'
import Head from 'next/head'
import "../public/assets/css/global.css"
import Script from "next/script"
export const metadata = {
  title: 'Khelhood',
  description: `"Khelhood" combines "Khelo" (play) with "hood" (short for neighborhood or community).
Where we trying to build a  playfully vibrant community focused on sports and recreation.`,
}

export default function RootLayout({ children }) {
 return (
		<html lang="en">	
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"></link>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"></link>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"></link>
				<link
					rel="manifest"
					href="/site.webmanifest"></link>
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"></link>
				<meta
					name="msapplication-TileColor"
					content="#da532c"></meta>
				<meta
					name="theme-color"
					content="#ffffff"></meta>
			</head>
			<body>
				<div>
					<div
						id="js-preloader"
						class="js-preloader">
						<div class="preloader-inner">
							<span class="dot"></span>
							<div class="dots">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
				</div>
				{children}
			</body>
			<page />
		</html>
 )
}
