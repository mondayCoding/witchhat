import React, { Component, useState, useEffect } from 'react';

import { Limiter } from '../../Library/Utility/Wrappers';

export const Home: React.SFC = () => {
	return (
		<Limiter>
			<h2>Home</h2>
		</Limiter>
	);
};
