"use client"
import React from "react"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css"
import { useRef } from "react"

const Header = () => {
	const mobileBtn = useRef(null)
	const mobileNav = useRef(null)
	const handleNavClick = () =>{
		mobileNav.current.style.display = mobileNav.current.style.display === "block" ? "none" : "block"
		mobileBtn.current.classList.toggle("active")
	}
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
								Khel<em>hood</em>
							</a>
							{/* Menu */}
							<ul
								className="nav block"
								ref={mobileNav}>
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
									<a href="#contact-us">Contact Us</a>
								</li>
							</ul>
							{/* Mobile Menu Trigger */}
							<a
								onClick={handleNavClick}
								className="menu-trigger"
								ref={mobileBtn}>
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
