import React, { useState, useEffect } from 'react';
import WebFooter from './WebFooter';
import MobileFooter from './MobileFooter';

function Footer() {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const isMobileView = windowSize.width && windowSize.width < 768;

	if (isMobileView) {
		return <MobileFooter />;
	}

	return <WebFooter />;
}

export default Footer;
