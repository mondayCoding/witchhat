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

const mapStateToProps = ({ economy }: any) => {
	return economy;
};

export const Landing = connect<any>(mapStateToProps)(LandingBase);
