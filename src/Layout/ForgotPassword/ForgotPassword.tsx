import React, { Component, useState, useEffect } from 'react';

import { Limiter } from '../../Library/Utility/Wrappers';
import { useDocumentTitleSetter } from '../../Hooks/useDocumentTitleSetter';

export const ForgotPassword: React.SFC = () => {
	useDocumentTitleSetter('Forgot Password');
	return (
		<Limiter>
			<h2>Forgot Password</h2>
		</Limiter>
	);
};
