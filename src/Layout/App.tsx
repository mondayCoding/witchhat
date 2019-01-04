import React from 'react';
import { useAuthState } from '../Hooks/useAuthState';
import { LoginLayout } from './Login/LoginLayout';
import { SiteLayout } from './Site/SiteLayout';

export const App: React.SFC = () => {
	const { userAuth } = useAuthState();

	return userAuth ? <SiteLayout /> : <LoginLayout />;
};
