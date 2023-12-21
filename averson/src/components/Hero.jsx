import React from 'react';
import landingImage from '../assets/LandingImage.png';

function Hero() {
	return (
		<div className="relative min-h-screen">
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url(${landingImage})` }}
			>
				<div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-10vh" />
			</div>

			<div className="absolute bottom-10 left-10 p-4 mb-5 text-white">
				<p className="text-base">Extra Aspirational</p>
				<p className="text-6xl">Avero. Pushing</p>
				<p className="text-6xl">engineering forward</p>
			</div>
		</div>
	);
}

export default Hero;
