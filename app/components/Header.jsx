import React from "react"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css"

const Header = () => {
	return (
		<header className="header-area header-sticky">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<nav className="main-nav">
							{/* Logo */}
							<a
								href="index.html"
								className="logo">
								Training<em> Studio</em>
							</a>
							{/* Menu */}
							<ul className="nav">
								<li className="scroll-to-section">
									<a
										href="#top"
										className="active">
										Home
									</a>
								</li>
								<li className="scroll-to-section">
									<a href="#features">About</a>
								</li>
								<li className="scroll-to-section">
									<a href="#our-classes">Classes</a>
								</li>
								<li className="scroll-to-section">
									<a href="#schedule">Schedules</a>
								</li>
								<li className="scroll-to-section">
									<a href="#contact-us">Contact</a>
								</li>
								<li className="main-button">
									<a href="#">Sign Up</a>
								</li>
							</ul>
							{/* Mobile Menu Trigger */}
							<a className="menu-trigger">
								<span>Menu</span>
							</a>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
