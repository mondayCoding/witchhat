import React, { Component, useState, useEffect } from 'react';

export const LOGPOSITION = () => {
	useEffect(logMousePositionToConsole, []);
	const [posY, SetPosY] = useState(0);
	const [posX, SetPosX] = useState(0);

	useEffect(() => {
		console.log('creating');
		window.addEventListener('mousemove', (e) => passPositions(e, SetPosX, SetPosY));

		return () => {
			console.log('removing');
			window.removeEventListener('mousemove', (e) => {
				passPositions(e, SetPosX, SetPosY);
			});
		};
	}, []);

	return (
		<div>
			<h4>Logging mouse position</h4>
			<h5>MouseY: {posY}</h5>
			<h5>MouseX: {posX}</h5>
		</div>
	);
};

const logMousePositionToConsole = () => {
	// console.log('listener created');
	window.addEventListener('mousemove', logmousepos);

	return () => {
		// console.log('listener removed');
		window.removeEventListener('mousemove', logmousepos);
	};
};

const passPositions = (
	e: MouseEvent,
	func1: (x: number) => void,
	func2: (x: number) => void
) => {
	const { x, y } = getMousePosition(e);
	func1(x);
	func2(y);
};

const logmousepos = (e: MouseEvent) => console.log({ x: e.clientX, y: e.clientY });
const getMousePosition = (e: MouseEvent) => ({ x: e.clientX, y: e.clientY });
