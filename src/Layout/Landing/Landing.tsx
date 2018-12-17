import React, { Component, useState, useEffect } from 'react';

import { Limiter } from '../../Library/Utility/Wrappers';
import { useDocumentTitleSetter } from '../../Hooks/useDocumentTitleSetter';

export const Landing: React.SFC = () => {
	useDocumentTitleSetter('Landing');
	return (
		<Limiter>
			<h2>Landing</h2>
		</Limiter>
	);
};
