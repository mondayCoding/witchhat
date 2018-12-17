import React, { Component, useEffect } from 'react';
import { useMousePositionLog } from '../../Hooks/useMousePositionLog';
import { useMousePosition } from '../../Hooks/useMousePosition';
import { useDocumentTitleSetter } from '../../Hooks/useDocumentTitleSetter';

export const LOGPOSITION = () => {
	useDocumentTitleSetter('Mouse Tracker');
	useEffect(useMousePositionLog);
	const { posX, posY } = useMousePosition();

	return (
		<div>
			<h4>Logging mouse position</h4>
			<h5>MouseY: {posY}</h5>
			<h5>MouseX: {posX}</h5>
		</div>
	);
};
