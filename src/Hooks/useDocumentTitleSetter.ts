import { useState, useEffect } from 'react';

// Custom hook
export const useDocumentTitleSetter = (title: string) => {
	useEffect(() => {
		document.title = `${title} | WitchHat`;
	}, []);
};
