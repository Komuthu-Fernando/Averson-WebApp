import React from 'react';

function Footer() {
	const whatWeDo = [
		'Product Development',
		'System Integration',
		'Test Automation',
		'Independent Verification \n& Validation',
		'Application Development',
		'Professional Services',
	];

	const industries = [
		'Aerospace & Defence',
		'Medical Devices',
		'Digital Health',
		'Rail & Transportation',
	];

	return (
		<div className="bg-footer-bg mt-40 p-10 pt-20 text-white grid grid-cols-3 gap-8 justify-items-center">
			<div>
				<p>
					Avero Inc. is a multi-service engineering firm specializing in design,
					build, testing, certification, and support services for embedded
					flight systems & software, health technology, and advanced IT.
				</p>
			</div>
			<div>
				<p className="mb-10">WHAT WE DO</p>
				<ul>
					{whatWeDo.map((item, index) => (
						<li
							key={index}
							className="mb-5 cursor-pointer"
							style={{ whiteSpace: 'pre-wrap' }}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div>
				<p className="mb-10">INDUSTRIES</p>
				<ul>
					{industries.map((item, index) => (
						<li key={index} className="mb-5 cursor-pointer">
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Footer;
