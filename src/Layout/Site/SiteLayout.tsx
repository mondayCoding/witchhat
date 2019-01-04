import React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router';
import navicons from '../../UtilsUI/Icons';
import { LOGPOSITION } from '../LogMousePos/LogMousePos';
import { COUNTER } from '../Counter/Counter';
import { SignUp } from '../SignUp/SignUp';
import { Account } from '../Account/Account';
import { Landing } from '../Landing/Landing';
import { ForgotPassword } from '../ForgotPassword/ForgotPassword';
import { Home } from '../Home/Home';
import { ThemedLayout, ThemedLink, NaviSubHeading } from './SiteLayoutStyles';
import { SignIn } from '../SignIn/SignIn';
import { EconCalculator } from '../EconomyCalc/EconCalculator';
import { auth } from '../../Firebase/index';
import { Heading } from '../../Library/Text/Heading';
import * as routes from '../../Constants/Routes';

export const SiteLayout: React.SFC = () => (
	<ThemedLayout>
		<nav className="nav">
			<Navigation />
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
				<Route exact={true} path={'/econ/:id'} component={DynamicRoute} />
				<Route exact={true} path={'/counter'} component={COUNTER} />
				<Route exact={true} path={'/mouse_logger'} component={LOGPOSITION} />
				<Redirect to="/" />
			</Switch>
		</main>
	</ThemedLayout>
);

const Navigation = () => (
	<div className="link--wrapper">
		<NaviSubHeading>Basics</NaviSubHeading>

		<ThemedLink to={routes.LANDING} {...linkProps}>
			{navicons.createchar} Landing
		</ThemedLink>

		<ThemedLink to={routes.HOME} {...linkProps}>
			{navicons.soon} Home™
		</ThemedLink>

		<ThemedLink to={routes.ACCOUNT} {...linkProps}>
			{navicons.missions} Account
		</ThemedLink>

		<NaviSubHeading>Demos</NaviSubHeading>

		<ThemedLink to={'/econ'} {...linkProps}>
			{navicons.missions} EconCalculator
		</ThemedLink>

		<ThemedLink to={'/counter'} {...linkProps}>
			{navicons.missions} Counter
		</ThemedLink>

		<ThemedLink to={'/mouse_logger'} {...linkProps}>
			{navicons.missions} Mouse Logger
		</ThemedLink>

		<NaviSubHeading>Testing</NaviSubHeading>

		<ThemedLink to={routes.SIGN_OUT} onClick={auth.signOut}>
			{navicons.poweroff} Sign Out
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
	</div>
);

const linkProps = {
	exact: true,
	activeClassName: 'active'
};

const DynamicRoute: React.SFC<
	RouteComponentProps<{
		id: string;
	}>
> = ({ match }) => (
	<div>
		<Heading
			text="DYNAMIC ROUTE"
			ingress="this is very dynamic route"
			hasUnderline={true}
		/>
		<span>Route ID: {match.params.id}</span>
	</div>
);
