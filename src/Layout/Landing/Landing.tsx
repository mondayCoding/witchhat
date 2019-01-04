import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Limiter } from '../../Library/Utility/Wrappers';
import { useDocumentTitleSetter } from '../../Hooks/useDocumentTitleSetter';

const LandingBase: React.SFC<any> = (props) => {
	useDocumentTitleSetter('Landing');
	console.log(props);

	return (
		<Limiter>
			<h2>Landing</h2>
		</Limiter>
	);
};

const mapStateToProps = (state: any) => {
	return state;
};

interface StateProps {
	state: { economy: any };
}

interface ReturnProps {
	state: { economy: any };
}

export const Landing = connect<any>(mapStateToProps)(LandingBase);
