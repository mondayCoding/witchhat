import { useState, useEffect } from 'react';

// Custom hook
export const useMousePosition = () => {
	const [posY, SetPosY] = useState(0);
	const [posX, SetPosX] = useState(0);
	const setPositions = (e: MouseEvent) => {
		SetPosX(e.clientX);
		SetPosY(e.clientY);
	};
	useEffect(() => {
		console.log('creating mouse event listener');
		window.addEventListener('mousemove', setPositions);
		return () => {
			console.log('removing mouse event listener');
			window.removeEventListener('mousemove', setPositions);
		};
	}, []);
	return { posX, posY };
};
