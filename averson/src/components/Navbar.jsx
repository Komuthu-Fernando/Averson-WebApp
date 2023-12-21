import React, { useEffect, useState } from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';

function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const halfwayPoint = window.innerHeight / 2;
			if (window.scrollY > halfwayPoint) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`p-4 flex items-center justify-between text-sm z-40 fixed w-full ${
				scrolled ? 'bg-white shadow-md' : ''
			}`}
		>
			<div className="flex items-center space-x-20">
				<img
					src={scrolled ? logo2 : logo1}
					alt="Logo"
					className="w-12 h-auto ml-10"
				/>{' '}
				<div className="flex items-center space-x-8">
					<NavLink href="/about" scrolled={scrolled}>
						About
					</NavLink>
					<NavLink href="/solutions" scrolled={scrolled}>
						Solutions
					</NavLink>
					<NavLink href="/our-work" scrolled={scrolled}>
						Our Work
					</NavLink>
					<NavLink href="/resources" scrolled={scrolled}>
						Resources
					</NavLink>
				</div>
			</div>

			<div>
				<button
					className={`border ${
						scrolled ? 'border-black text-black' : 'border-white text-white'
					} px-4 py-2 rounded-xl mr-10 ${
						scrolled ? 'bg-white' : ''
					} hover:bg-white hover:text-black transition duration-300`}
				>
					Talk to an Expert
				</button>
			</div>
		</nav>
	);
}

function NavLink({ href, children, scrolled }) {
	return (
		<a
			href={href}
			className={`text-${
				scrolled ? 'black' : 'white'
			} hover:text-blue-200 transition duration-300`}
		>
			{children}
		</a>
	);
}

export default Navbar;
