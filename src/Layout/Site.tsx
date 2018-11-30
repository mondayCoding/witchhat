import React, { Component, useState, useEffect } from 'react';
import logo from '../logo.svg';
import './Site.scss';
import { Switch, Route, Redirect } from 'react-router';
import * as routes from '../Constants/Routes';
import navicons from '../UtilsUI/Icons';
import { NavLink, BrowserRouter } from 'react-router-dom';

const App = () => {
	const [count, setCount] = useState(0);
	useEffect(logMousePosition, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<h2>{count}</h2>
				<button onClick={() => setCount(count + 1)}>increase</button>
				<button onClick={() => setCount(count - 1)}>decrease</button>
				<Main />
			</header>
		</div>
	);
};

const linkProps = {
	exact: true,
	activeClassName: 'active',
	className: 'nav--item'
};

const Main = () => (
	<BrowserRouter>
		<div className="layout">
			<nav className="nav">
				<NavLink to={routes.SIGN_IN} {...linkProps}>
					{navicons.dashboard} Sign In
				</NavLink>

				<NavLink to={routes.SIGN_UP} {...linkProps}>
					{navicons.dashboard} Sign Up
				</NavLink>

				<NavLink to={routes.LANDING} {...linkProps}>
					{navicons.createchar} Landing
				</NavLink>

				<NavLink to={routes.HOME} {...linkProps}>
					{navicons.soon} Home™
				</NavLink>

				<NavLink to={routes.ACCOUNT} {...linkProps}>
					{navicons.missions} Account
				</NavLink>

				<NavLink to={routes.PASSWORD_FORGET} {...linkProps}>
					{navicons.missions} Forgot password
				</NavLink>
			</nav>
			<main className="main">
				<Switch>
					<Route exact={true} path={routes.SIGN_IN} component={HOMEROUTE} />
					<Route exact={true} path={routes.SIGN_UP} component={ANOTHERROUTE} />
					<Route exact={true} path={routes.LANDING} component={THIRDROUTE} />
					<Route exact={true} path={routes.HOME} component={HOMEROUTE} />
					<Route exact={true} path={routes.ACCOUNT} component={ANOTHERROUTE} />
					<Route exact={true} path={routes.PASSWORD_FORGET} component={THIRDROUTE} />
					<Redirect to="/" />
				</Switch>
			</main>
		</div>
	</BrowserRouter>
);

const HOMEROUTE = () => <h2>HOME</h2>;
const ANOTHERROUTE = () => <h2>ANOTHER</h2>;
const THIRDROUTE = () => <h2>THIRD</h2>;

const logMousePosition = () => {
	console.log('create');
	window.addEventListener('mousemove', logmousepos);
	return () => {
		console.log('cleaning');
		window.removeEventListener('mousemove', logmousepos);
	};
};

const logmousepos = (e: any) => console.log({ x: e.clientX, y: e.clientY });

export default App;
