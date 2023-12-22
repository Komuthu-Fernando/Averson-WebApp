import React from 'react';
import Linkedin from '../assets/linkedin.png';
import Instragram from '../assets/instagram.png';
import Twitter from '../assets/twiter.png';

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
				<p className="text-justify">
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
			<div className="flex gap-10 text-xs place-self-start">
				<p>Terms & Conditions</p>
				<p>Privacy Policy</p>
			</div>
			<div className="flex gap-20">
				<p>Culture</p>
				<p>Careers</p>
			</div>
			<div className="grid grid-cols-3 gap-4 place-items-center">
				<img
					src={Linkedin}
					alt="linkedin-logo"
					className="w-4 cursor-pointer"
				/>
				<img
					src={Instragram}
					alt="linkedin-logo "
					className="w-4 cursor-pointer"
				/>
				<img src={Twitter} alt="linkedin-logo" className="w-4 cursor-pointer" />
			</div>
		</div>
	);
}

export default Footer;
