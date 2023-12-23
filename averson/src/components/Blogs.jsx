import React, { useState, useEffect } from 'react';

function Blogs() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await fetch(
					'https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30'
				);
				const data = await response.json();
				setBlogs(data.blogs);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchBlogs();
	}, []);

	const getRandomBlogs = () => {
		const shuffled = blogs.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, 4);
	};

	const randomBlogs = getRandomBlogs();

	return (
		<div className="m-20 mt-40">
			<p className="mb-5">BLOGS</p>
			<p className="text-3xl mb-10">Insightful Insights</p>
			<div className="flex flex-col md:flex-row justify-around gap-2">
				{randomBlogs.map((blog) => (
					<div
						key={blog.id}
						className="blog-item max-w-xs mb-4 md:mb-0 md:w-1/4"
					>
						<img src={blog.photo_url} alt="Blog" className="mb-2 rounded-xl" />
						<p className="h-16 overflow-hidden line-clamp-5">
							{blog.description}
						</p>
						<button className="mt-2 border-2 border-black text-black px-4 py-2 rounded-2xl hover:bg-black hover:text-white">
							Learn More
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Blogs;
