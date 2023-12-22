import React from 'react';
import img1 from '../assets/work1.png';
import img2 from '../assets/work2.png';
import img3 from '../assets/work3.png';
import img4 from '../assets/work4.png';
import img5 from '../assets/work1.png';
import img6 from '../assets/work2.png';
import img7 from '../assets/work3.png';
import img8 from '../assets/work4.png';

function OurWork() {
	const images = [img1, img2, img3, img4, img5, img6, img7, img8];

	return (
		<div className="m-20 mt-40">
			<div className="grid grid-cols-3">
				<div className="flex flex-col justify-self-center col-span-2">
					<p className="mb-5">OUR WORK</p>
					<div className="text-3xl font-semibold">
						<p>vital component of global transportation,</p>
						<p>connecting people and goods</p>
					</div>
				</div>
				<div className="overflow-x-auto col-span-3 mt-10 rounded-lg">
					<div className="flex justify-between gap-16">
						{images.map((image, index) => (
							<img
								key={index}
								src={image}
								alt={`Work ${index + 1}`}
								className="w-80 h-auto rounded-lg transition duration-1000 transform hover:scale-105 overflow:hidden"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurWork;
