import page from './page'
import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/font-awesome.css"
import "../public/assets/css/templatemo-training-studio.css" 

export const metadata = {
  title: 'fitness_app',
  description: 'This is a landing page of a fitness organization',
}

export default function RootLayout({ children }) {
 return (
		<html lang="en">
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
