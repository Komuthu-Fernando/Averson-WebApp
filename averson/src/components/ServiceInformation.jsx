import React from 'react';
import image6 from '../assets/img6.png';

function ServiceInformation() {
	return (
		<div className="grid grid-cols-2 max-w-screen m-20 mt-40">
			<div className="flex justify-center">
				<div className="items-center">
					<p className="text-3xl">The Avero</p>
					<p className="text-3xl">
						Difference <span className="font-bold">embedded</span>
					</p>
					<p className="text-3xl">
						<span className="font-bold">finance engine</span>
					</p>
					<p className="mt-10 max-w-96">
						Trusted experts who go the extra mile for custorners to provide
						turn-key solutions, complete system integration,and comprehensive
						support.
					</p>
					<button className="mt-10 border-2 border-black text-black px-4 py-2 rounded-2xl hover:bg-black hover:text-white">
						Learn More
					</button>
				</div>
			</div>
			<div className="flex items-center">
				<div>
					<img src={image6} alt="ServiceImage" className="w-80 rounded-2xl" />
				</div>
			</div>
		</div>
	);
}

export default ServiceInformation;
