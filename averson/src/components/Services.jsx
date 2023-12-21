import React, { useState } from 'react';
import s1 from '../assets/img5.png';
import s2 from '../assets/img5.1.png';
import s3 from '../assets/img5.2.png';
import s4 from '../assets/img5.3.png';
import s5 from '../assets/img5.4.png';
import s6 from '../assets/img5.5.png';

const servicesData = [
	{
		id: 1,
		number: '01',
		title: 'Embedded Systems Development',
		description:
			'Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.',
		imageUrl: s1,
	},
	{
		id: 2,
		number: '02',
		title: 'System Integration',
		description:
			'Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.',
		imageUrl: s2,
	},
	{
		id: 3,
		number: '03',
		title: 'Test Automation',
		description:
			'Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.',
		imageUrl: s3,
	},
	{
		id: 4,
		number: '04',
		title: 'Professional Services',
		description:
			'Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.',
		imageUrl: s4,
	},
	{
		id: 5,
		number: '05',
		title: 'Application Development',
		description:
			'Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.',
		imageUrl: s5,
	},
	{
		id: 6,
		number: '06',
		title: 'Varification and Validation',
		description:
			'Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.',
		imageUrl: s6,
	},
];

function ServicePage() {
	const [selectedService, setSelectedService] = useState(servicesData[0]);

	const handleServiceClick = (service) => {
		setSelectedService(service);
	};

	return (
		<div className="grid grid-cols-2 max-w-screen m-20 ">
			<div className="flex justify-center">
				<div>
					<p className="text-3xl">Lorem ipsum</p>
					<p className="text-3xl">
						<span className="font-bold">connecter</span> Auctor
					</p>
					<ul>
						{servicesData.map((service) => (
							<div className="my-10">
								<li
									onClick={() => handleServiceClick(service)}
									className={`${
										selectedService.id === service.id
											? 'text-black border-black'
											: 'text-stone-400 border-stone-400'
									} border-b-2 pb-5`}
								>
									<div className="flex justify-between">
										<span>{service.number}</span>
										<span className="pl-20">{service.title}</span>
									</div>
								</li>
							</div>
						))}
					</ul>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<div>
					<div>
						<img
							src={selectedService.imageUrl}
							alt={selectedService.title}
							className="w-60 rounded-3xl mb-10"
						/>
						<p className="">{selectedService.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServicePage;
