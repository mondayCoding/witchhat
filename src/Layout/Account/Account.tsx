import React, { Component, useState, useEffect } from 'react';
import { Formik, FormikProps, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../Library/Button/Button';
import { Field as FieldWrapper } from '../../Library/Field/Field';
import { RouteComponentProps } from 'react-router';
import { Select } from '../../Library/Select/Select';
import { ChromePicker, ColorResult } from 'react-color';
import { themed } from '../../Library/theme';

export const Account: React.SFC = () => {
	const [themeColor, setThemeColor] = useState('');

	const setNewThemeColor = (values: ColorResult) => {
		const newHexValue = values.hex;
		setThemeColor(newHexValue);
	};

	const setGlobalTheme = () => {};

	return (
		<div
			style={{
				maxWidth: '32rem',
				margin: '0 auto',
				backgroundColor: themeColor,
				padding: '1rem'
			}}
		>
			<h2>Account</h2>
			<ChromePicker
				color={themeColor}
				disableAlpha
				onChangeComplete={(values) => setNewThemeColor(values)}
			/>
			<Select options={nom} />
			<FieldWrapper label="Mallilabel" />
			<Button onClick={setGlobalTheme} text="Set Global Color" />
			{themeColor && <h2>{themeColor}</h2>}
		</div>
	);
};

const nom = [
	{ label: 'nom', value: 'nam1' },
	{ label: 'nom3', value: 'nam2' },
	{ label: 'nom', value: 'nam3' },
	{ label: 'nom3', value: 'nam4' },
	{ label: 'nom', value: 'nam5' },
	{ label: 'nom3', value: 'nam6' },
	{ label: 'nom', value: 'nam7' },
	{ label: 'nom3', value: 'nam8' }
];
