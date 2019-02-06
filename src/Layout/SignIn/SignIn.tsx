import React, { Component, useState, useEffect } from 'react';
import { Formik, FormikProps, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../Library/Button/Button';
import { Limiter } from '../../Library/Utility/Wrappers';
import * as routes from '../../Constants/Routes';
import { RouteComponentProps } from 'react-router';
import { auth } from '../../Firebase/index';
import { Heading } from '../../Library/Text/Heading';
import Notify from '../../UtilsUI/Notification';
import { useDocumentTitleSetter } from '../../Hooks/useDocumentTitleSetter';
import { Link } from 'react-router-dom';
import { TextField } from '../../Library/TextInput/TextInputPlain';

export const SignIn: React.SFC<Partial<RouteComponentProps>> = ({ history }) => {
	useDocumentTitleSetter('Sign In');

	const handleSubmit = (values: any, resetForm: () => void) => {
		auth
			.signInWithEmailAndPassword(values.email, values.password)
			.then((authe: any) => {
				history.push(routes.LANDING);
				console.log(authe);
				Notify.success('Successfully signed in');
			})
			.catch((error) => {
				console.log(error);
				Notify.error(error.message);
			});
	};

	return (
		<div className="App">
			<Formik
				render={SignInForm}
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
			/>
		</div>
	);
};

const SignInForm = ({
	handleSubmit,
	values,
	dirty
}: FormikProps<typeof initialValues>) => (
	<Limiter centered={true}>
		<Heading
			text="Sign in"
			hasUnderline={true}
			ingress="Beware he who enters, there is no god inside"
		/>
		<TextField name="email" type="email" placeholder="Email" hideLabel={true} />
		<TextField
			name="password"
			type="password"
			placeholder="Password"
			hideLabel={true}
		/>
		<Button text="Submit" disabled={!dirty} onClick={handleSubmit} />
		<Link to={routes.SIGN_UP}>Create Account</Link>
		<Link to={routes.PASSWORD_FORGET}>I have forgotten my password</Link>
		{/* <div>{values.email}</div>
		<div>{values.password}</div> */}
	</Limiter>
);

const initialValues = {
	email: '',
	password: ''
};

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required()
});
