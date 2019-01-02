import React from 'react';
import { SignIn } from '../SignIn/SignIn';
import { ThemedLogin } from './LoginLayoutStyle';
import { SignUp } from '../SignUp/SignUp';
import { Switch, Route, Redirect } from 'react-router';
import * as routes from '../../Constants/Routes';

export const LoginLayout: React.SFC = () => (
	<ThemedLogin>
		<Switch>
			<Route exact={true} path={routes.SIGN_IN} component={SignIn} />
			<Route exact={true} path={routes.SIGN_UP} component={SignUp} />
			<Redirect to={routes.SIGN_IN} />
		</Switch>
	</ThemedLogin>
);
