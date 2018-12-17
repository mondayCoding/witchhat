import React, { Component, useState, useEffect } from 'react';
import { Button } from '../../Library/Button/Button';
import { useDocumentTitleSetter } from '../../Hooks/useDocumentTitleSetter';

export const COUNTER = () => {
	const [count, setCount] = useState(0);
	useDocumentTitleSetter('Counter');

	return (
		<React.Fragment>
			<h2>{count}</h2>
			<Button onClick={() => setCount(count + 1)} text={'Increase'} />
			<Button onClick={() => setCount(count - 1)} text={'Decrease'} />
			<Button onClick={() => setCount(0)} text={'Reset'} disabled={count === 0} />
		</React.Fragment>
	);
};
