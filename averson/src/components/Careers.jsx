import React from 'react';
import careers1 from '../assets/careers1.png';
import careers2 from '../assets/careers2.png';

function Careers() {
	return (
		<div className="m-20 mt-40 flex grid grid-cols-2">
			<div className="flex flex-col justify-self-center">
				<p className="mb-5">CAREERS</p>
				<div className="text-5xl font-semibold">
					<p>Be a part of</p>
					<p>our story</p>
				</div>
				<p className="mt-10">
					At Avero, we're always looking for creative problem solvers to join
					our team
				</p>
				<div>
					<button className="mt-10 border-2 border-black text-black px-4 py-2 rounded-3xl hover:bg-black hover:text-white">
						Join Now
					</button>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-2">
				<img
					src={careers1}
					alt="careers1"
					className="rounded-xl w-full h-auto"
				/>
				<img
					src={careers2}
					alt="careers2"
					className="rounded-xl w-full h-auto"
				/>
			</div>
		</div>
	);
}

export default Careers;
