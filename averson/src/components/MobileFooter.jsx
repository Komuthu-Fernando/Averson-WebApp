import React from 'react';
import Linkedin from '../assets/linkedin.png';
import Instragram from '../assets/instagram.png';
import Twitter from '../assets/twiter.png';

function MobileFooter() {
	return (
		<div className="bg-footer-bg mt-20 p-10 pt-20 text-white grid grid-rows-1 justify-items-center">
			<p className="text-center">
				Avero Inc. is a multi-service engineering firm specializing in design,
				build, testing, certification, and support services for embedded flight
				systems & software, health technology, and advanced IT.
			</p>
			<div>
				<div className="flex gap-10 text-xs m-5">
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
				</div>
			</div>
			<div className="flex gap-4 place-items-center">
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

export default MobileFooter;
