// Industries.jsx

import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

function Industries() {
	return (
		<div className="max-w-full mx-10 mb-10">
			<div className="text-center mt-20 mb-20">
				<p className="text-lg">
					Traditional: Aversan delivers leading-edge and reliable <br />
					safety-critical electronics, software systems, expert resources, and
					business-fortifying solutions.
				</p>
			</div>
			{/* responsive */}
			<div className="grid grid-cols-2 gap-2 flex flex-col md:flex-row justify-around">
				<div>
					<hr className="w-full border-t-2 border-gray-300 mb-2" />
					<p className="my-5">Nuclear</p>
					<div className="flex gap-4 max-w-full overflow-x-auto">
						<div className="relative">
							<img
								src={img1}
								alt="Nuclear Image 1"
								className="max-w-full max-h-full object-contain md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg"
								style={{ maxWidth: '340px' }}
							/>
							<div className="absolute inset-0 bg-black opacity-30 rounded-lg hover:opacity-0 transition duration-300"></div>
						</div>
						<div className="relative">
							<img
								src={img2}
								alt="Nuclear Image 2"
								className="max-w-full max-h-full object-contain md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg"
								style={{ maxWidth: '340px' }}
							/>
							<div className="absolute inset-0 bg-black opacity-30 rounded-lg hover:opacity-0 transition duration-300"></div>
						</div>
					</div>
				</div>
				<div>
					<hr className="w-full border-t-2 border-gray-300 mb-2" />
					<p className="my-5">Automotive</p>
					<div className="flex gap-4 max-w-full overflow-x-auto">
						<div className="relative">
							<img
								src={img3}
								alt="Auto Image 1"
								className="max-w-full max-h-full object-contain md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg"
								style={{ maxWidth: '340px' }}
							/>
							<div className="absolute inset-0 bg-black opacity-30 rounded-lg hover:opacity-0 transition duration-300"></div>
						</div>
						<div className="relative">
							<img
								src={img4}
								alt="Auto Image 2"
								className="max-w-full max-h-full object-contain md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg"
								style={{ maxWidth: '340px' }}
							/>
							<div className="absolute inset-0 bg-black opacity-30 rounded-lg hover:opacity-0 transition duration-300"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Industries;
