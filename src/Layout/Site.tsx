import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import * as routes from '../Constants/Routes';
import navicons from '../UtilsUI/Icons';
import { BrowserRouter } from 'react-router-dom';
import { LOGPOSITION } from './LogMousePos/LogMousePos';
import { COUNTER } from './Counter/Counter';
import { SignUp } from './SignUp/SignUp';
import { Account } from './Account/Account';
import { Landing } from './Landing/Landing';
import { ForgotPassword } from './ForgotPassword/ForgotPassword';
import { Home } from './Home/Home';
import { ThemedLayout, ThemedLink } from './SiteStyles';
import { GlobalStyle } from './GlobalStyles';
import { SignIn } from './SignIn/SignIn';
import { EconCalculator } from './EconomyCalc/EconCalculator';
import { ThemeManager } from '../Library/theme';
import { auth } from '../Firebase/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from '../Hooks/useAuthState';

const App: React.SFC = () => {
	const { userAuth } = useAuthState();

	return (
		<ThemedLayout>
			<nav className="nav">
				{userAuth ? <AuthNavigation /> : <NonAuthNavigation />}
			</nav>
			<main className="main">
				<Switch>
					<Route exact={true} path={routes.SIGN_IN} component={SignIn} />
					<Route exact={true} path={routes.SIGN_UP} component={SignUp} />
					<Route exact={true} path={routes.LANDING} component={Landing} />
					<Route exact={true} path={routes.HOME} component={Home} />
					<Route exact={true} path={routes.ACCOUNT} component={Account} />
					<Route
						exact={true}
						path={routes.PASSWORD_FORGET}
						component={ForgotPassword}
					/>
					<Route exact={true} path={'/econ'} component={EconCalculator} />
					<Route exact={true} path={'/counter'} component={COUNTER} />
					<Route exact={true} path={'/mouse_logger'} component={LOGPOSITION} />
					<Redirect to="/" />
				</Switch>
			</main>
		</ThemedLayout>
	);
};

const AuthNavigation = () => (
	<div className="link--wrapper">
		<ThemedLink to={routes.LANDING} {...linkProps}>
			{navicons.createchar} Landing
		</ThemedLink>

		<ThemedLink to={routes.HOME} {...linkProps}>
			{navicons.soon} Home™
		</ThemedLink>

		<ThemedLink to={routes.ACCOUNT} {...linkProps}>
			{navicons.missions} Account
		</ThemedLink>

		<ThemedLink to={'undefined'} onClick={auth.signOut}>
			{navicons.poweroff} Sign Out
		</ThemedLink>
	</div>
);

const NonAuthNavigation = () => (
	<div className="link--wrapper">
		<ThemedLink to={routes.ACCOUNT} {...linkProps}>
			{navicons.missions} Account
		</ThemedLink>

		<ThemedLink to={routes.SIGN_IN} {...linkProps}>
			{navicons.dashboard} Sign In
		</ThemedLink>

		<ThemedLink to={routes.SIGN_UP} {...linkProps}>
			{navicons.dashboard} Sign Up
		</ThemedLink>

		<ThemedLink to={routes.PASSWORD_FORGET} {...linkProps}>
			{navicons.missions} Forgot password
		</ThemedLink>

		<ThemedLink to={'/econ'} {...linkProps}>
			{navicons.missions} EconCalculator
		</ThemedLink>

		<ThemedLink to={'/counter'} {...linkProps}>
			{navicons.missions} Counter
		</ThemedLink>

		<ThemedLink to={'/mouse_logger'} {...linkProps}>
			{navicons.missions} Mouse Logger
		</ThemedLink>
	</div>
);

export const ThemedApp = () => {
	return (
		<ThemeManager>
			<GlobalStyle />
			<BrowserRouter>
				<App />
			</BrowserRouter>
			<ToastContainer
				draggablePercent={40}
				hideProgressBar={true}
				toastClassName={'TOAST'}
			/>
		</ThemeManager>
	);
};

const linkProps = {
	exact: true,
	activeClassName: 'active'
};
