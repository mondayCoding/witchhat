import React, { Component, useState, useEffect } from 'react';

import { Limiter } from '../../Library/Utility/Wrappers';
import { useDocumentTitleSetter } from '../../Hooks/useDocumentTitleSetter';

export const Home: React.SFC = () => {
	useDocumentTitleSetter('Home');
	return (
		<Limiter>
			<h2>Home</h2>
		</Limiter>
	);
};
