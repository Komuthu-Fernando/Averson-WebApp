import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import arrow from '../assets/right-arrow.png';

function Industries() {
	const SectionOneData = [
		{
			id: 1,
			image: img1,
			description: 'Aerospace & Defence',
		},
		{
			id: 2,
			image: img2,
			description: 'Digital Health',
		},
	];

	const SectionTwoData = [
		{
			id: 1,
			image: img3,
			description: 'Rail & Transpotation',
		},
		{
			id: 2,
			image: img4,
			description: 'Medical Device',
		},
	];

	return (
		<div className="max-w-full mx-10 mb-10">
			<div className="text-center mt-20 mb-20">
				<p className="text-lg">
					Traditional: Aversan delivers leading-edge and reliable <br />
					safety-critical electronics, software systems, expert resources, and
					business-fortifying solutions.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-x-auto">
				<div className="order-2 md:order-1">
					<hr className="w-full border-t-2 border-gray-300 mb-2" />
					<p className="my-5">Nuclear</p>
					<div className="flex gap-4 max-w-full overflow-x-auto">
						{SectionOneData.map((data) => (
							<div key={data.id} className="relative">
								<img
									src={data.image}
									alt="Image"
									className="max-w-full max-h-full object-contain md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg"
									style={{ maxWidth: '340px' }}
								/>
								<div className="absolute inset-0 bg-black opacity-30 rounded-lg hover:opacity-0 transition duration-300"></div>
								<div className="flex justify-between items-center absolute bottom-0 left-0 right-0 h-24 bg-white opacity-0 rounded-t-lg hover:opacity-100 transition duration-1000">
									<p className="text-black m-5">{data.description}</p>
									<img src={arrow} alt="arrow" className="h-8 mr-5" />
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="order-1 md:order-2">
					<hr className="w-full border-t-2 border-gray-300 mb-2" />
					<p className="my-5">Automotive</p>
					<div className="flex gap-4 max-w-full overflow-x-auto">
						{SectionTwoData.map((data) => (
							<div key={data.id} className="relative">
								<img
									src={data.image}
									alt="Image"
									className="max-w-full max-h-full object-contain md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg"
									style={{ maxWidth: '340px' }}
								/>
								<div className="absolute inset-0 bg-black opacity-30 rounded-lg hover:opacity-0 transition duration-300"></div>
								<div className="flex justify-between items-center absolute bottom-0 left-0 right-0 h-24 bg-white opacity-0 rounded-t-lg hover:opacity-100 transition duration-1000">
									<p className="text-black m-5">{data.description}</p>
									<img src={arrow} alt="arrow" className="h-8 mr-5" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Industries;
