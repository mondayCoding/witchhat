export const useMousePositionLog = () => {
	// console.log('listener created');
	window.addEventListener('mousemove', logmousepos);
	return () => {
		// console.log('listener removed');
		window.removeEventListener('mousemove', logmousepos);
	};
};

const logmousepos = (e: MouseEvent) => console.log({ x: e.clientX, y: e.clientY });
